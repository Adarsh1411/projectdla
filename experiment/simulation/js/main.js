const canvas = document.getElementById("dlaCanvas");
const ctx = canvas.getContext("2d");
const particleInput = document.getElementById("particleCount");
const walkInput = document.getElementById("walkLimit");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");
const dimensionBtn = document.getElementById("dimensionBtn");
const statusEl = document.getElementById("status");
const clusterCountEl = document.getElementById("clusterCount");
const walkerCountEl = document.getElementById("walkerCount");
const dimensionEl = document.getElementById("dimension");

const SIZE = 150;                 // logical grid, scaled to the canvas
const CENTER = Math.floor(SIZE / 2);
let grid, aggregate, running = false, timer = null, attempted = 0, target = 1000;
let maxRadius = 1;

function index(x, y) { return y * SIZE + x; }
function inBounds(x, y) { return x >= 1 && y >= 1 && x < SIZE - 1 && y < SIZE - 1; }
function occupied(x, y) { return !inBounds(x, y) || grid[index(x, y)] === 1; }
function reset() {
  stop();
  grid = new Uint8Array(SIZE * SIZE);
  aggregate = [];
  attempted = 0;
  maxRadius = 1;
  grid[index(CENTER, CENTER)] = 1;
  aggregate.push({x:CENTER, y:CENTER});
  target = Math.max(100, Math.min(5000, Number(particleInput.value) || 1000));
  clusterCountEl.textContent = "1";
  walkerCountEl.textContent = "0";
  dimensionEl.textContent = "—";
  statusEl.textContent = "Ready";
  draw();
}
function stop() { running = false; if (timer) clearTimeout(timer); timer = null; }
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#030b14";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  const cell = canvas.width / SIZE;
  for (const p of aggregate) {
    const dx = p.x - CENTER, dy = p.y - CENTER;
    const r = Math.sqrt(dx*dx + dy*dy);
    ctx.fillStyle = (p.x === CENTER && p.y === CENTER) ? "#fff4a3" : `hsl(${195 - Math.min(35, r*.18)} 95% ${60 + Math.min(15,r*.1)}%)`;
    ctx.fillRect(p.x*cell, p.y*cell, Math.max(1,cell), Math.max(1,cell));
  }
}
function touchesCluster(x, y) {
  return occupied(x+1,y) || occupied(x-1,y) || occupied(x,y+1) || occupied(x,y-1);
}
function addWalker() {
  // Release walkers on a circle outside the cluster.
  const releaseRadius = Math.min(62, Math.max(12, maxRadius + 8));
  const angle = Math.random() * Math.PI * 2;
  let x = Math.round(CENTER + Math.cos(angle) * releaseRadius);
  let y = Math.round(CENTER + Math.sin(angle) * releaseRadius);
  const limit = Math.max(100, Math.min(3000, Number(walkInput.value) || 900));
  for (let step = 0; step < limit; step++) {
    if (!inBounds(x,y)) break;
    if (touchesCluster(x,y)) {
      grid[index(x,y)] = 1;
      aggregate.push({x,y});
      maxRadius = Math.max(maxRadius, Math.hypot(x-CENTER, y-CENTER));
      return true;
    }
    const direction = Math.floor(Math.random()*4);
    if (direction===0) x++;
    else if (direction===1) x--;
    else if (direction===2) y++;
    else y--;
    // If a walker drifts far away, respawn it near the cluster.
    if (Math.hypot(x-CENTER,y-CENTER) > releaseRadius + 15) {
      const a = Math.random()*Math.PI*2;
      x = Math.round(CENTER + Math.cos(a)*releaseRadius);
      y = Math.round(CENTER + Math.sin(a)*releaseRadius);
    }
  }
  return false;
}
function tick() {
  if (!running) return;
  let addedThisFrame = 0;
  for (let i=0; i<35 && attempted<target; i++) {
    attempted++;
    if (addWalker()) addedThisFrame++;
  }
  clusterCountEl.textContent = String(aggregate.length);
  walkerCountEl.textContent = String(attempted);
  draw();
  if (attempted >= target) {
    stop();
    statusEl.textContent = "Complete";
    calculateDimension();
    return;
  }
  statusEl.textContent = addedThisFrame ? "Growing…" : "Walking…";
  timer = setTimeout(tick, 10);
}
function start() {
  if (running) return;
  if (attempted >= target) reset();
  target = Math.max(100, Math.min(5000, Number(particleInput.value) || 1000));
  running = true;
  statusEl.textContent = "Growing…";
  tick();
}
function calculateDimension() {
  // Box-counting: count occupied boxes at several box sizes.
  const scales = [2,3,4,5,6,8,10,12,15,20,25,30];
  const points = aggregate;
  const xs = [], ys = [];
  for (const box of scales) {
    const seen = new Set();
    for (const p of points) seen.add(`${Math.floor(p.x/box)},${Math.floor(p.y/box)}`);
    const n = seen.size;
    if (n > 0) { xs.push(Math.log(1/box)); ys.push(Math.log(n)); }
  }
  const n = xs.length;
  if (n < 2) { dimensionEl.textContent = "—"; return; }
  const meanX = xs.reduce((a,b)=>a+b,0)/n;
  const meanY = ys.reduce((a,b)=>a+b,0)/n;
  let numerator=0, denominator=0;
  for (let i=0;i<n;i++) { numerator += (xs[i]-meanX)*(ys[i]-meanY); denominator += (xs[i]-meanX)**2; }
  const slope = denominator ? numerator/denominator : NaN;
  dimensionEl.textContent = Number.isFinite(slope) ? slope.toFixed(2) : "—";
}
startBtn.addEventListener("click", start);
pauseBtn.addEventListener("click", () => { stop(); statusEl.textContent = "Paused"; });
resetBtn.addEventListener("click", reset);
dimensionBtn.addEventListener("click", calculateDimension);
reset();


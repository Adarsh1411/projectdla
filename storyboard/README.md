#### Please use the [reference](https://github.com/virtual-labs/ph3-exp-dev-process/blob/main/storyboard/README.org) document to fill this template. Follow the [link](https://github.com/virtual-labs/ph3-exp-dev-process/tree/main/sample/storyboard) to view a sample storyboard document. 


# Storyboard

## Experiment 1: Fractal Dimension Computation Using Diffusion-Limited Aggregation (DLA)

### 1. Story Outline

This experiment demonstrates Diffusion-Limited Aggregation (DLA), a physical process in which randomly moving particles attach to an existing cluster and form complex branching structures. These structures are examples of fractal patterns found in nature and physical growth processes.

The experiment allows users to observe the formation of a DLA cluster through a web-based simulation developed using HTML, CSS, and JavaScript. Users begin with a seed particle and observe how randomly moving particles join the cluster. After observing the growth pattern, users learn how the box-counting method can be used to estimate its fractal dimension. The experiment aims to develop an understanding of particle aggregation, fractal geometry, and the measurement of geometric complexity.

### 2. Story

The experiment begins with an introduction to Diffusion-Limited Aggregation and the concept of fractals. The user opens the simulation and observes an initial seed particle in the simulation area. When the simulation starts, particles move randomly around the existing cluster. When a particle reaches the sticking condition, it attaches to the cluster and becomes part of the growing structure.

As the process continues, the cluster develops a branching and irregular shape. The user observes how the structure changes as more particles are added. The experiment then introduces the box-counting method, which measures the number of boxes required to cover the cluster at different scales. By comparing these measurements, the user learns how the fractal dimension represents the complexity of the generated pattern. Finally, the user reviews the observations and answers questions to evaluate their understanding.

#### 2.1 Set the Visual Stage Description

When the user opens the experiment, the landing page displays the title "Fractal Dimension Computation Using Diffusion-Limited Aggregation." A short introduction explains the purpose of the experiment and provides instructions for starting the simulation.

The main visual stage contains a simulation canvas where the DLA cluster is displayed. Initially, a seed particle appears near the centre of the simulation area. As the simulation runs, additional particles move randomly and attach to the existing cluster, producing a branching pattern.

The interface may include Start, Pause, and Reset buttons, particle or speed controls, a theory section, and a results area. A box-counting visualization may be used to demonstrate how occupied boxes are counted at different scales. If implemented, the result section displays the estimated fractal dimension and other relevant simulation information. The layout should be clear and simple so that users can easily observe the growth process and understand the experiment.

#### 2.2 Set User Objectives & Goals

The main objective of the experiment is to simulate Diffusion-Limited Aggregation, visualize the formation of fractal growth patterns, and understand how the fractal dimension can be estimated using the box-counting method.

At the beginning, the user reads the introduction and understands the basic concepts of particle aggregation and fractal geometry. The user then starts the simulation and observes how randomly moving particles attach to the existing cluster.

During the experiment, the user identifies the branching structure and learns that its geometric complexity can be studied using fractal dimension. The user explores the relationship between box size and the number of occupied boxes. By the end of the experiment, the user should be able to:

1. Explain the basic principle of Diffusion-Limited Aggregation.
2. Describe how random particle movement leads to cluster formation.
3. Identify the characteristics of a DLA fractal pattern.
4. Explain the purpose of the box-counting method.
5. Understand how fractal dimension is estimated from measurements at different scales.
6. Interpret the simulation results and identify factors that may affect the estimate.

#### 2.3 Set the Pathway Activities

The user follows a sequence of activities to complete the experiment.

First, the user reads the theory and instructions provided on the landing page. Next, the user opens the simulation and identifies the initial seed particle. The user starts the simulation and observes the random movement of particles around the seed.

As the simulation progresses, the user observes the particles attaching to the existing cluster and the formation of branching structures. The user may pause or reset the simulation if these controls are available. After observing the cluster, the user proceeds to the fractal analysis section.

In this section, the user learns about the box-counting method and observes how the cluster can be covered using grids of different box sizes. The occupied boxes are counted for each scale, and these observations are used to understand the estimation of fractal dimension. Finally, the user reviews the results, answers assessment questions, and reads the conclusion to reinforce the concepts learned.

#### 2.4 Set Challenges and Questions/Complexity/Variations in Questions

The experiment can include questions of increasing difficulty to encourage observation, reasoning, and problem-solving.

**Basic-level questions:**

1. What is the full form of DLA?
2. What is a seed particle?
3. What is a fractal pattern?
4. Why do particles attach to an existing cluster?

**Intermediate-level questions:**

1. How does random particle movement affect the growth of the cluster?
2. Why does a DLA cluster form branching structures?
3. What is the purpose of the box-counting method?
4. What happens to the number of occupied boxes when the box size decreases?

**Advanced-level questions:**

1. How can the fractal dimension be estimated from box-counting measurements?
2. Why can two simulation runs produce different cluster patterns?
3. How can the number of particles affect the estimated fractal dimension?
4. What factors may cause errors in the calculated dimension?

The user should answer these questions by applying the concepts learned during the simulation. If the user gives an incorrect answer, the system may provide a hint or direct the user back to the relevant theory. Optional variations include comparing clusters from different simulation runs or examining different box sizes, provided these features are supported by the implementation.

#### 2.5 Allow Pitfalls

During the experiment, users may make mistakes if they do not follow the instructions carefully. These mistakes can be used as learning opportunities to improve understanding.

A user may assume that every moving particle will attach to the cluster. The experiment should clarify that a particle joins the cluster only when the model's sticking condition is satisfied. Another possible mistake is confusing the random movement of individual particles with the final shape of the cluster.

During box-counting analysis, users may count empty boxes or compare measurements obtained using inconsistent box sizes. The experiment should explain that only boxes containing part of the cluster are counted and that measurements must be compared consistently.

Users may also assume that every fractal has an integer dimension or that every simulation produces exactly the same result. Feedback should clarify that fractal dimensions can be non-integer and that the appearance and estimated dimension of a simulated cluster can vary with the simulation conditions and measurement method.

These pitfalls encourage users to examine their observations, correct misconceptions, and develop a more accurate understanding of the experiment.

#### 2.6 Conclusion

At the end of the experiment, the user should understand how Diffusion-Limited Aggregation produces complex branching structures through the random movement and attachment of particles. The user should also understand how the box-counting method helps estimate the fractal dimension of the generated cluster.

The conclusion should summarize the observations and explain the significance of the estimated dimension as a measure of geometric complexity. For a two-dimensional DLA cluster, the estimated fractal dimension is commonly around 1.7 to 1.8, although the result may vary depending on the simulation and measurement method.

If assessment and performance-tracking features are implemented, the system may display the user's score, number of correct answers, time taken, and hints used. Feedback can then be provided according to the user's performance. Otherwise, the conclusion should focus on the concepts understood, the cluster observed, and the limitations of the estimated result.

After completing the experiment, the user should be able to explain DLA, describe fractal growth, and understand the basic principle of fractal dimension estimation.

#### 2.7 Equations/Formulas: Refer to a Separate Sheet

The detailed equations and calculation procedure should be provided in a separate equations/formulas document, as required by the storyboard template.

The main relationship used in the experiment is the box-counting relationship. It connects the number of occupied boxes with the size of the boxes used to cover the cluster. The user uses measurements at different scales to estimate the fractal dimension.

The variables used are the box size, the number of occupied boxes, and the estimated fractal dimension. The detailed mathematical expressions and calculation steps should be documented separately rather than included in the story narration.

### 3. Flowchart

**Flowchart Title:** Flowchart for DLA Simulation and Fractal Dimension Computation

The flowchart should represent the following sequence:

Start → Initialize Simulation → Place Seed Particle → Generate Random Particle → Move Particle → Check Sticking Condition → If the condition is satisfied, attach the particle to the cluster → Otherwise, continue particle movement → Repeat the process until the stopping condition is reached → Display the DLA Cluster → Apply Box-Counting Analysis → Estimate Fractal Dimension → Display Results → End.

The flowchart should include decision branches for the sticking condition and the simulation stopping condition. It should be stored in the `pedagogy/storyboard/flowchart/` folder.

**Flowchart File:** Add the actual flowchart image or document link here after creating and uploading it.

### 4. Mindmap

**Mindmap Title:** Mind Map of DLA and Fractal Dimension Computation

The mind map should connect the main concepts and stages of the experiment.

**Central Topic:** Fractal Dimension Computation Using DLA

**Branch 1: Diffusion-Limited Aggregation**
- Random particle movement
- Seed particle
- Sticking condition
- Cluster growth

**Branch 2: Fractal Growth**
- Branching structures
- Irregular patterns
- Geometric complexity
- Physical growth models

**Branch 3: Box-Counting Method**
- Grid of different box sizes
- Occupied box counting
- Measurements at different scales
- Logarithmic analysis

**Branch 4: Fractal Dimension**
- Meaning of fractal dimension
- Estimation from box-counting data
- Interpretation of results
- Sources of measurement error

**Branch 5: Simulation**
- HTML interface
- CSS styling
- JavaScript logic
- Particle movement and aggregation
- Visualization and results

**Branch 6: Learning and Assessment**
- Observation
- Conceptual questions
- Problem-solving
- Result interpretation
- Conclusion

The mind map should be saved in `.mm` and `.png` formats in the `pedagogy/storyboard/mindmap/` folder. Add the PDF link here after creating and uploading the PDF version.

**Mindmap PDF:** Add the actual PDF link here after creating it.

### 5. Storyboard

The storyboard should visually explain the experiment through a sequence of scenes. Each scene should include its duration, action, and description.

**Scene 1: Introduction**
- Duration: 10 seconds
- Action: Display the experiment title and introduction.
- Description: The user learns the purpose of the DLA simulation and fractal dimension experiment.

**Scene 2: Initial Seed**
- Duration: 10 seconds
- Action: Display the simulation canvas with the initial seed particle.
- Description: The user identifies the starting point of the aggregation process.

**Scene 3: Random Particle Movement**
- Duration: 15 seconds
- Action: Show particles moving randomly around the seed.
- Description: The user observes how particles move through the simulation environment.

**Scene 4: Cluster Formation**
- Duration: 20 seconds
- Action: Show particles attaching to the existing cluster.
- Description: The cluster grows into a branching structure as the aggregation process continues.

**Scene 5: Box-Counting Analysis**
- Duration: 20 seconds
- Action: Display the cluster with grids of different box sizes.
- Description: The user learns how occupied boxes are counted to study the cluster at different scales.

**Scene 6: Results and Conclusion**
- Duration: 15 seconds
- Action: Display the generated cluster and the estimated fractal dimension, if available.
- Description: The user reviews the result and summarizes the concepts learned.

**Total Estimated Duration:** 90 seconds.

The storyboard should be created using storyboard software and exported as a GIF file. Save the GIF in the appropriate storyboard folder and add its actual link below.

**Storyboard GIF:** Add the actual GIF link here after creating and uploading it.
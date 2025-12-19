---
sidebar_position: 3
title: 'URDF – Describing the Humanoid Body'
description: 'Understanding Unified Robot Description Format for humanoid robotics'
---

# URDF – Describing the Humanoid Body

## Introduction

Unified Robot Description Format (URDF) is an XML-based format used to describe robot models in ROS. For humanoid robotics, URDF serves as the digital blueprint that defines the robot's physical structure, including links, joints, and their relationships. Understanding URDF is fundamental for both control and perception systems in humanoid robots.

## Purpose of URDF in Robotics

### Robot Modeling

URDF serves several critical purposes in robotics:

- **Physical Description**: Defines the robot's physical structure, including dimensions, masses, and inertial properties
- **Kinematic Chain**: Describes how different parts of the robot are connected and how they move relative to each other
- **Visual Representation**: Provides information for visualization tools and simulation environments
- **Collision Detection**: Defines collision geometry for simulation and safety systems

### Integration with ROS Ecosystem

URDF integrates seamlessly with various ROS tools and packages:

- **Robot State Publisher**: Converts joint positions to transforms for visualization
- **TF (Transforms)**: Provides coordinate frame relationships between different parts of the robot
- **Simulation**: Used by Gazebo and other simulators to create accurate robot models
- **Motion Planning**: Used by MoveIt! and other planners to understand robot kinematics

## Links, Joints, and Frames

### Links

Links represent the rigid parts of a robot. In humanoid robots, links typically correspond to:

- **Body Parts**: Torso, head, limbs
- **Segments**: Upper arm, lower arm, hand
- **End Effectors**: Feet, hands for manipulation
- **Sensors**: Camera housings, IMU mounts

Each link contains:

- **Inertial Properties**: Mass, center of mass, and inertia tensor
- **Visual Properties**: Mesh geometry and material for visualization
- **Collision Properties**: Collision geometry for simulation and safety

### Joints

Joints define the connections between links and specify how they can move relative to each other:

- **Revolute Joints**: Rotational joints with limited range of motion (e.g., elbow, knee)
- **Continuous Joints**: Rotational joints with unlimited range of motion (e.g., shoulder, hip)
- **Prismatic Joints**: Linear joints (e.g., linear actuators)
- **Fixed Joints**: Rigid connections with no movement
- **Floating Joints**: 6-DOF joints for base connections in simulation

### Frames

Frames provide coordinate systems attached to robot parts:

- **Base Frame**: Typically located at the robot's base or center of mass
- **Link Frames**: Attached to each link for local coordinate systems
- **End-Effector Frames**: Located at manipulation points
- **Sensor Frames**: Located where sensors are mounted

## Dependency of Control and Perception on URDF Accuracy

### Control Systems

Accurate URDF is essential for effective control:

- **Inverse Kinematics**: Requires precise link lengths and joint axes
- **Dynamics Modeling**: Needs accurate mass properties and inertial tensors
- **Balance Control**: Depends on accurate center of mass calculations
- **Trajectory Planning**: Uses joint limits and kinematic constraints

### Perception Systems

Perception systems rely on URDF for:

- **Sensor Fusion**: Combines data from multiple sensors using known positions
- **SLAM Integration**: Incorporates robot pose information with sensor data
- **Object Recognition**: Uses known robot geometry to understand spatial relationships
- **Human-Robot Interaction**: Positions sensors and effectors correctly for interaction

## Common Humanoid URDF Design Errors

### Kinematic Chain Errors

**Incorrect Joint Axes**:
```xml
<!-- WRONG: Wrong axis direction -->
<joint name="shoulder_joint" type="revolute">
  <axis xyz="0 0 1"/>  <!-- Should be 0 1 0 for shoulder abduction -->
</joint>

<!-- CORRECT: Proper axis direction -->
<joint name="shoulder_joint" type="revolute">
  <axis xyz="0 1 0"/>  <!-- Shoulder abduction axis -->
</joint>
```

**Missing or Extra Links**:
- Forgetting to include intermediate links for sensors or mounting points
- Adding unnecessary links that complicate the kinematic chain

### Physical Property Errors

**Inaccurate Mass Properties**:
- Using estimated rather than measured mass values
- Incorrect center of mass locations
- Unrealistic inertia tensors

**Improper Joint Limits**:
```xml
<!-- WRONG: Too restrictive or too permissive limits -->
<limit lower="-0.5" upper="0.5" effort="100" velocity="1"/>

<!-- CORRECT: Realistic limits based on hardware -->
<limit lower="-2.0" upper="1.5" effort="100" velocity="2"/>
```

### Frame and Transformation Errors

**Incorrect Origin Definitions**:
- Wrong parent-child relationships
- Incorrect transformation matrices
- Misaligned coordinate systems

**Missing Sensor Mounts**:
- Not including frames for sensors (cameras, IMUs, etc.)
- Incorrect sensor placement relative to other components

### Best Practices for Humanoid URDF

**Modular Design**:
Structure URDF files in a modular way to facilitate reuse and maintenance:

```xml
<!-- Example of modular URDF structure -->
<robot name="humanoid_robot">
  <!-- Include common components -->
  <xacro:include filename="common_properties.urdf.xacro"/>

  <!-- Define base body -->
  <link name="base_link">
    <!-- Base link properties -->
  </link>

  <!-- Include arms, legs as separate xacro files -->
  <xacro:include filename="left_arm.urdf.xacro"/>
  <xacro:include filename="right_arm.urdf.xacro"/>
  <xacro:include filename="left_leg.urdf.xacro"/>
  <xacro:include filename="right_leg.urdf.xacro"/>
</robot>
```

**Validation Techniques**:
- Use URDF validators to check for syntax and logical errors
- Visualize the robot in RViz to verify proper structure
- Test kinematic models with MoveIt! or similar tools
- Verify that all sensors have appropriate frames

## Practical Examples: Common Humanoid Platforms

### NAO Robot Structure

The NAO humanoid robot uses a typical bipedal structure:

- **25 degrees of freedom**: Including head, arms, and legs
- **Distributed sensors**: Cameras, IMUs, force sensors, tactile sensors
- **Kinematic chains**: Separate chains for each arm and leg

### Pepper Robot Considerations

Pepper adds additional complexity with:

- **Omnidirectional base**: Requires special consideration for base joints
- **Flexible neck**: Multiple degrees of freedom for head movement
- **Touchscreen integration**: Special mounting considerations

### Atlas Robot Features

Atlas demonstrates advanced humanoid design:

- **Hydraulic actuation**: Requires special modeling considerations
- **Complex hands**: Detailed finger kinematics
- **High DOF**: Requires efficient URDF organization

## URDF Tools and Validation

### URDF Validation

Several tools help validate URDF files:

- **check_urdf**: Basic syntax and structure checker
- **urdf_to_graphviz**: Visualizes the kinematic tree
- **RViz**: Provides 3D visualization of the robot model

### Xacro for Complex Models

Xacro (XML Macros) simplifies complex URDF models:

```xml
<!-- Example Xacro macro for a joint -->
<xacro:macro name="simple_joint" params="name type parent child axis xyz">
  <joint name="${name}" type="${type}">
    <parent link="${parent}"/>
    <child link="${child}"/>
    <axis xyz="${axis}"/>
    <origin xyz="${xyz}"/>
  </joint>
</xacro:macro>
```

## Summary

URDF is the foundation for representing humanoid robots in ROS, defining their physical structure, kinematic relationships, and integration with various ROS tools. Accurate URDF models are critical for both control and perception systems, enabling effective robot operation. Understanding common design errors and best practices helps create robust and reliable humanoid robot models.

---

## References
1. URDF Documentation. (2023). *Unified Robot Description Format*. Retrieved from http://wiki.ros.org/urdf
2. Xacro Documentation. (2023). *XML Macros for URDF*. Retrieved from http://wiki.ros.org/xacro
3. Siciliano, B., & Khatib, O. (2016). *Springer Handbook of Robotics*. Springer.
4. Corke, P. (2017). *Robotics, Vision and Control: Fundamental Algorithms in MATLAB*. Springer.
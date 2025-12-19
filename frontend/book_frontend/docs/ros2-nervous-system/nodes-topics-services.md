---
sidebar_position: 2
title: 'Nodes, Topics, and Services'
description: 'Understanding ROS 2 communication patterns for humanoid robotics control'
---

# Nodes, Topics, and Services

## Introduction

In ROS 2, communication between different components occurs through three primary patterns: nodes, topics, and services. Understanding these patterns is crucial for developing effective humanoid robotics applications, as they determine how information flows through the robotic nervous system.

## ROS 2 Nodes and Message Passing

### What are ROS 2 Nodes?

Nodes are the fundamental computational units in ROS 2. Each node represents a single process that performs specific computation and communicates with other nodes. In humanoid robotics, nodes might represent:

- Sensor drivers (camera, IMU, force sensors)
- Control algorithms (balance control, path planning)
- Perception systems (object recognition, speech processing)
- Hardware interfaces (motor controllers, actuators)

### Node Architecture

Each node in ROS 2 contains:

- **Publishers**: Interfaces for sending messages on topics
- **Subscribers**: Interfaces for receiving messages on topics
- **Services**: Interfaces for providing request-response functionality
- **Parameters**: Configuration values that can be dynamically changed
- **Actions**: Long-running tasks with feedback and goal management

### Creating Nodes

Nodes are typically implemented in programming languages like Python or C++. A basic node structure includes initialization, main processing loop, and cleanup procedures.

## Topics vs Services: Understanding the Differences

### Topics (Publish-Subscribe Pattern)

Topics use a publish-subscribe communication model:

- **Asynchronous**: Publishers and subscribers don't need to be active simultaneously
- **Broadcast**: One publisher can send to multiple subscribers
- **Data-Driven**: Communication occurs when new data is available
- **Use Cases**: Sensor data, robot state information, sensor streams

```python
# Example of topic publisher
import rclpy
from std_msgs.msg import String

def create_publisher_node():
    node = rclpy.create_node('sensor_publisher')
    publisher = node.create_publisher(String, 'sensor_data', 10)
    return node, publisher
```

### Services (Request-Response Pattern)

Services use a request-response communication model:

- **Synchronous**: Client waits for server response
- **Direct**: One-to-one communication between client and server
- **Action-Oriented**: Communication occurs when a specific action is requested
- **Use Cases**: Configuration changes, computational tasks, state queries

```python
# Example of service server
import rclpy
from example_interfaces.srv import AddTwoInts

def create_service_server():
    node = rclpy.create_node('math_server')
    srv = node.create_service(AddTwoInts, 'add_two_ints', add_callback)
    return node, srv
```

## Use Cases for Each Pattern

### When to Use Topics

**Continuous Data Streams:**
- Sensor data (camera images, IMU readings, LIDAR scans)
- Robot state information (joint positions, battery levels)
- Control commands (velocity commands, position targets)

**Event Broadcasting:**
- Alert notifications
- System status updates
- User interface updates

**Real-time Requirements:**
- Control loops that need consistent timing
- Safety monitoring systems
- Feedback control systems

### When to Use Services

**Configuration Tasks:**
- Changing robot parameters
- Loading new maps or configurations
- Calibrating sensors

**Computational Tasks:**
- Path planning for specific destinations
- Object recognition requests
- Data processing requests

**State Queries:**
- Current robot position
- Battery status
- System health checks

## High-Level Python-Based Agent-to-Controller Flow

### Agent-Controller Architecture

In humanoid robotics, the agent-controller flow typically involves:

1. **High-Level Agent**: Makes decisions based on goals and environmental information
2. **Communication Layer**: Transmits decisions to controllers using ROS 2 patterns
3. **Low-Level Controllers**: Execute commands and provide feedback

### Example Implementation

```python
import rclpy
from rclpy.node import Node
from std_msgs.msg import Float64MultiArray
from sensor_msgs.msg import JointState
from geometry_msgs.msg import Twist

class HumanoidAgent(Node):
    def __init__(self):
        super().__init__('humanoid_agent')

        # Publishers for sending commands to controllers
        self.cmd_vel_publisher = self.create_publisher(
            Twist, '/cmd_vel', 10
        )
        self.joint_cmd_publisher = self.create_publisher(
            Float64MultiArray, '/joint_commands', 10
        )

        # Subscribers for receiving sensor feedback
        self.joint_state_subscriber = self.create_subscription(
            JointState, '/joint_states', self.joint_state_callback, 10
        )

        # Timer for control loop
        self.timer = self.create_timer(0.1, self.control_loop)

    def control_loop(self):
        """Main agent control loop"""
        # Process goals and environmental information
        # Generate appropriate commands
        cmd_vel = Twist()
        cmd_vel.linear.x = 0.5  # Example command
        self.cmd_vel_publisher.publish(cmd_vel)

    def joint_state_callback(self, msg):
        """Process joint state feedback"""
        # Update internal state based on feedback
        pass

def main(args=None):
    rclpy.init(args=args)
    agent = HumanoidAgent()

    try:
        rclpy.spin(agent)
    except KeyboardInterrupt:
        pass
    finally:
        agent.destroy_node()
        rclpy.shutdown()
```

## Humanoid Motion Communication Examples

### Walking Pattern Control

```python
# Topic-based communication for walking patterns
from std_msgs.msg import Float64MultiArray

class WalkingController:
    def __init__(self):
        self.footstep_publisher = self.create_publisher(
            Float64MultiArray, '/footstep_plan', 10
        )
        self.com_publisher = self.create_publisher(
            Float64MultiArray, '/center_of_mass', 10
        )

    def publish_walking_pattern(self, pattern):
        """Publish walking pattern to controllers"""
        msg = Float64MultiArray()
        msg.data = pattern
        self.footstep_publisher.publish(msg)
```

### Balance Control

```python
# Service-based communication for balance control
from example_interfaces.srv import SetBool

class BalanceController:
    def __init__(self):
        self.balance_service = self.create_service(
            SetBool, '/enable_balance', self.balance_callback
        )

    def balance_callback(self, request, response):
        """Handle balance enable/disable requests"""
        if request.data:
            self.enable_balance_control()
            response.success = True
            response.message = "Balance control enabled"
        else:
            self.disable_balance_control()
            response.success = True
            response.message = "Balance control disabled"

        return response
```

### Multi-Modal Communication

Humanoid robots often require both topics and services:

- **Topics**: For continuous sensor data and control commands
- **Services**: For configuration and state queries
- **Actions**: For long-running tasks like walking or manipulation

## Best Practices for Communication Patterns

### Topic Best Practices

- Use appropriate QoS settings based on real-time requirements
- Consider message frequency to avoid network congestion
- Use message filters for time-synchronized multi-sensor data
- Implement proper error handling for dropped messages

### Service Best Practices

- Design services to be idempotent when possible
- Use appropriate timeouts to prevent hanging requests
- Implement proper error responses for exceptional conditions
- Consider using actions instead of services for long-running tasks

### Integration Considerations

- Plan communication patterns early in system design
- Consider failure modes and graceful degradation
- Document all topics, services, and their message types
- Use standard message types when available to promote reusability

## Summary

Understanding the differences between nodes, topics, and services is essential for effective ROS 2 development in humanoid robotics. The choice between publish-subscribe and request-response patterns significantly impacts system architecture, performance, and maintainability. By following best practices and understanding when to use each pattern, developers can create robust and efficient robotic systems.

---

## References
1. ROS 2 Documentation. (2023). *Nodes and Topics*. Retrieved from https://docs.ros.org/
2. Quigley, M., et al. (2009). *ROS: an open-source Robot Operating System*. ICRA Workshop.
3. Siciliano, B., & Khatib, O. (2016). *Springer Handbook of Robotics*. Springer.
/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['intro'],
    },
    {
      type: 'category',
      label: 'ROS 2 Nervous System',
      items: [
        'ros2-nervous-system/ros2-as-nervous-system',
        'ros2-nervous-system/nodes-topics-services',
        'ros2-nervous-system/urdf-description',
      ],
    },
    {
      type: 'category',
      label: 'Digital Twin Simulation',
      items: [
        'digital-twin-simulation/digital-twins-robotics',
        'digital-twin-simulation/physics-simulation-gazebo',
        'digital-twin-simulation/high-fidelity-unity',
      ],
    },
    {
      type: 'category',
      label: 'The AI-Robot Brain (NVIDIA Isaac™)',
      items: [
        'isaac-ai-brain/isaac-overview',
        'isaac-ai-brain/accelerated-perception',
        'isaac-ai-brain/navigation-planning',
      ],
    },
    {
      type: 'category',
      label: 'Vision-Language-Action (VLA) Systems',
      items: [
        'vla-systems/vla-foundations',
        'vla-systems/voice-to-action',
        'vla-systems/cognitive-planning',
      ],
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};

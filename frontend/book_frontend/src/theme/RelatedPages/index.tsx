/**
 * Custom RelatedPages component for clear navigation between related pages and modules
 * Provides contextual navigation links to help users discover related content
 */

import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {useLocation} from '@docusaurus/router';
import {translate} from '@docusaurus/Translate';
import type {Props} from '@theme/RelatedPages';

import styles from './styles.module.css';

// Mock related pages data - in a real implementation, this would come from the sidebar structure or metadata
const mockRelatedPages = {
  'ros2-nervous-system/ros2-as-nervous-system': [
    {
      title: 'Communication Patterns',
      description: 'Learn about nodes, topics, and services in ROS 2',
      url: '/docs/ros2-nervous-system/nodes-topics-services',
    },
    {
      title: 'URDF Description',
      description: 'Understand Unified Robot Description Format',
      url: '/docs/ros2-nervous-system/urdf-description',
    }
  ],
  'ros2-nervous-system/nodes-topics-services': [
    {
      title: 'ROS 2 Fundamentals',
      description: 'Go back to the basics of ROS 2',
      url: '/docs/ros2-nervous-system/ros2-as-nervous-system',
    },
    {
      title: 'URDF Description',
      description: 'Learn about robot description formats',
      url: '/docs/ros2-nervous-system/urdf-description',
    }
  ],
  'ros2-nervous-system/urdf-description': [
    {
      title: 'ROS 2 Fundamentals',
      description: 'Go back to the basics of ROS 2',
      url: '/docs/ros2-nervous-system/ros2-as-nervous-system',
    },
    {
      title: 'Communication Patterns',
      description: 'Learn about nodes, topics, and services in ROS 2',
      url: '/docs/ros2-nervous-system/nodes-topics-services',
    }
  ],
  'digital-twin-simulation/digital-twins-robotics': [
    {
      title: 'Physics Simulation with Gazebo',
      description: 'Learn about physics simulation in robotics',
      url: '/docs/digital-twin-simulation/physics-simulation-gazebo',
    },
    {
      title: 'High Fidelity with Unity',
      description: 'Explore Unity for high-fidelity simulations',
      url: '/docs/digital-twin-simulation/high-fidelity-unity',
    }
  ],
  'digital-twin-simulation/physics-simulation-gazebo': [
    {
      title: 'Digital Twins in Robotics',
      description: 'Understand how digital twins apply to robotics',
      url: '/docs/digital-twin-simulation/digital-twins-robotics',
    },
    {
      title: 'High Fidelity with Unity',
      description: 'Explore Unity for high-fidelity simulations',
      url: '/docs/digital-twin-simulation/high-fidelity-unity',
    }
  ],
  'digital-twin-simulation/high-fidelity-unity': [
    {
      title: 'Digital Twins in Robotics',
      description: 'Understand how digital twins apply to robotics',
      url: '/docs/digital-twin-simulation/digital-twins-robotics',
    },
    {
      title: 'Physics Simulation with Gazebo',
      description: 'Learn about physics simulation in robotics',
      url: '/docs/digital-twin-simulation/physics-simulation-gazebo',
    }
  ],
  'isaac-ai-brain/accelerated-perception': [
    {
      title: 'Isaac Overview',
      description: 'Get an overview of Isaac tools',
      url: '/docs/isaac-ai-brain/isaac-overview',
    },
    {
      title: 'Navigation Planning',
      description: 'Learn about navigation and planning algorithms',
      url: '/docs/isaac-ai-brain/navigation-planning',
    }
  ],
  'isaac-ai-brain/isaac-overview': [
    {
      title: 'Accelerated Perception',
      description: 'Learn about perception acceleration',
      url: '/docs/isaac-ai-brain/accelerated-perception',
    },
    {
      title: 'Navigation Planning',
      description: 'Learn about navigation and planning algorithms',
      url: '/docs/isaac-ai-brain/navigation-planning',
    }
  ],
  'isaac-ai-brain/navigation-planning': [
    {
      title: 'Isaac Overview',
      description: 'Get an overview of Isaac tools',
      url: '/docs/isaac-ai-brain/isaac-overview',
    },
    {
      title: 'Accelerated Perception',
      description: 'Learn about perception acceleration',
      url: '/docs/isaac-ai-brain/accelerated-perception',
    }
  ],
  'vla-systems/cognitive-planning': [
    {
      title: 'VLA Foundations',
      description: 'Learn about VLA system foundations',
      url: '/docs/vla-systems/vla-foundations',
    },
    {
      title: 'Voice to Action',
      description: 'Understand voice to action systems',
      url: '/docs/vla-systems/voice-to-action',
    }
  ],
  'vla-systems/vla-foundations': [
    {
      title: 'Cognitive Planning',
      description: 'Learn about cognitive planning',
      url: '/docs/vla-systems/cognitive-planning',
    },
    {
      title: 'Voice to Action',
      description: 'Understand voice to action systems',
      url: '/docs/vla-systems/voice-to-action',
    }
  ],
  'vla-systems/voice-to-action': [
    {
      title: 'VLA Foundations',
      description: 'Learn about VLA system foundations',
      url: '/docs/vla-systems/vla-foundations',
    },
    {
      title: 'Cognitive Planning',
      description: 'Learn about cognitive planning',
      url: '/docs/vla-systems/cognitive-planning',
    }
  ],
  'tutorial-basics/congratulations': [
    {
      title: 'Create a Page',
      description: 'Learn how to create a new page',
      url: '/docs/tutorial-basics/create-a-page',
    },
    {
      title: 'Create a Document',
      description: 'Learn how to create a document',
      url: '/docs/tutorial-basics/create-a-document',
    }
  ],
  'tutorial-basics/create-a-document': [
    {
      title: 'Create a Page',
      description: 'Learn how to create a new page',
      url: '/docs/tutorial-basics/create-a-page',
    },
    {
      title: 'Markdown Features',
      description: 'Explore markdown features',
      url: '/docs/tutorial-basics/markdown-features',
    }
  ],
  'tutorial-basics/create-a-page': [
    {
      title: 'Create a Document',
      description: 'Learn how to create a document',
      url: '/docs/tutorial-basics/create-a-document',
    },
    {
      title: 'Markdown Features',
      description: 'Explore markdown features',
      url: '/docs/tutorial-basics/markdown-features',
    }
  ],
  'tutorial-basics/deploy-your-site': [
    {
      title: 'Create a Document',
      description: 'Learn how to create a document',
      url: '/docs/tutorial-basics/create-a-document',
    },
    {
      title: 'Create a Page',
      description: 'Learn how to create a new page',
      url: '/docs/tutorial-basics/create-a-page',
    }
  ],
  'tutorial-basics/markdown-features': [
    {
      title: 'Create a Document',
      description: 'Learn how to create a document',
      url: '/docs/tutorial-basics/create-a-document',
    },
    {
      title: 'Create a Page',
      description: 'Learn how to create a new page',
      url: '/docs/tutorial-basics/create-a-page',
    }
  ],
  'tutorial-extras/manage-docs-versions': [
    {
      title: 'Translate your Site',
      description: 'Learn how to translate your Docusaurus site',
      url: '/docs/tutorial-extras/translate-your-site',
    },
    {
      title: 'Create a Document',
      description: 'Learn how to create a document',
      url: '/docs/tutorial-basics/create-a-document',
    }
  ],
  'tutorial-extras/translate-your-site': [
    {
      title: 'Manage Docs Versions',
      description: 'Learn how to manage documentation versions',
      url: '/docs/tutorial-extras/manage-docs-versions',
    },
    {
      title: 'Create a Document',
      description: 'Learn how to create a document',
      url: '/docs/tutorial-basics/create-a-document',
    }
  ],
};

function RelatedPages(): JSX.Element | null {
  // For this implementation, we'll use the current location to determine related pages
  // In a real implementation, this would come from actual metadata
  // Using useLocation hook for SSR compatibility
  const location = useLocation();
  const currentPath = location.pathname;

  // Extract the doc ID from the location (e.g., from '/docs/ros2-nervous-system/ros2-as-nervous-system' to 'ros2-nervous-system/ros2-as-nervous-system')
  const docId = currentPath.replace('/docs/', '').replace('/docs/next/', '');

  const relatedPages = mockRelatedPages[docId as keyof typeof mockRelatedPages] || [];

  if (relatedPages.length === 0) {
    // Try to match based on partial path
    const matchingKey = Object.keys(mockRelatedPages).find(key => currentPath.includes(key));
    if (matchingKey) {
      const relatedPagesFromMatch = mockRelatedPages[matchingKey as keyof typeof mockRelatedPages];
      if (relatedPagesFromMatch && relatedPagesFromMatch.length > 0) {
        return (
          <div className={styles.relatedPages}>
            <div className={styles.relatedPagesHeader}>
              <h3 className={styles.relatedPagesTitle}>
                {translate({message: 'Related Pages', id: 'relatedPages.title'})}
              </h3>
              <div className={styles.relatedPagesDivider}></div>
            </div>

            <div className={styles.relatedPagesGrid}>
              {relatedPagesFromMatch.map((page, index) => (
                <Link
                  key={index}
                  to={page.url}
                  className={styles.relatedPageCard}
                  aria-label={`Navigate to ${page.title}`}
                >
                  <div className={styles.relatedPageContent}>
                    <h4 className={styles.relatedPageTitle}>{page.title}</h4>
                    <p className={styles.relatedPageDescription}>{page.description}</p>
                    <span className={styles.relatedPageLinkText}>
                      {translate({message: 'Read more', id: 'relatedPages.readMore'})} →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        );
      }
    }
    return null;
  }

  return (
    <div className={styles.relatedPages}>
      <div className={styles.relatedPagesHeader}>
        <h3 className={styles.relatedPagesTitle}>
          {translate({message: 'Related Pages', id: 'relatedPages.title'})}
        </h3>
        <div className={styles.relatedPagesDivider}></div>
      </div>

      <div className={styles.relatedPagesGrid}>
        {relatedPages.map((page, index) => (
          <Link
            key={index}
            to={page.url}
            className={styles.relatedPageCard}
            aria-label={`Navigate to ${page.title}`}
          >
            <div className={styles.relatedPageContent}>
              <h4 className={styles.relatedPageTitle}>{page.title}</h4>
              <p className={styles.relatedPageDescription}>{page.description}</p>
              <span className={styles.relatedPageLinkText}>
                {translate({message: 'Read more', id: 'relatedPages.readMore'})} →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default RelatedPages;
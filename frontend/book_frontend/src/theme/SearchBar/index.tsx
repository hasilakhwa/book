/**
 * Custom SearchBar component with improved visual feedback and results
 * Enhances search functionality with better UX
 */

import React, {useState, useRef, useEffect} from 'react';
import clsx from 'clsx';
import {useLocation} from '@docusaurus/router';
import {usePluginData} from '@docusaurus/useGlobalData';
import {useHistory, useLocation as useSearchLocation} from '@docusaurus/router';
import {translate} from '@docusaurus/Translate';

import styles from './styles.module.css';

// Mock search implementation for now - this would be replaced with actual search functionality
const mockSearchResults = [
  {title: 'ROS 2 Fundamentals', url: '/docs/ros2-nervous-system/ros2-as-nervous-system', excerpt: 'Learn the basics of ROS 2 as a middleware nervous system'},
  {title: 'Communication Patterns', url: '/docs/ros2-nervous-system/nodes-topics-services', excerpt: 'Understand nodes, topics, and services in ROS 2'},
  {title: 'URDF Description', url: '/docs/ros2-nervous-system/urdf-description', excerpt: 'Learn about Unified Robot Description Format'},
  {title: 'Digital Twins in Robotics', url: '/docs/digital-twin-simulation/digital-twins-robotics', excerpt: 'Explore digital twin concepts in robotics'},
  {title: 'Physics Simulation with Gazebo', url: '/docs/digital-twin-simulation/physics-simulation-gazebo', excerpt: 'Simulation environments using Gazebo'},
  {title: 'AI-Robot Brain with NVIDIA Isaac', url: '/docs/isaac-ai-brain/isaac-overview', excerpt: 'Accelerated computing for AI robotics'},
  {title: 'Vision-Language-Action Systems', url: '/docs/vla-systems/vla-foundations', excerpt: 'Understanding VLA systems for robotics'},
];

function SearchBar(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const location = useSearchLocation();
  const history = useHistory();

  // Toggle search bar visibility
  const toggleSearch = () => {
    setIsOpen(!isOpen);
    if (!isOpen && searchInputRef.current) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    }
  };

  // Handle search input changes
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.length > 0) {
      // Filter mock results based on query (in a real implementation, this would be an API call)
      const filteredResults = mockSearchResults.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.excerpt.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filteredResults);
    } else {
      setSearchResults([]);
    }
  };

  // Handle search submission
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchResults.length > 0) {
      // Navigate to the first result (in a real implementation, this might be different)
      history.push(searchResults[0].url);
      setIsOpen(false);
      setSearchQuery('');
      setSearchResults([]);
    }
  };

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchInputRef.current && !searchInputRef.current.contains(event.target as Node)) {
        if (isOpen && searchQuery === '') {
          setIsOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, searchQuery]);

  // Close search when route changes
  useEffect(() => {
    setIsOpen(false);
    setSearchQuery('');
    setSearchResults([]);
  }, [location.pathname]);

  return (
    <div className={styles.searchContainer}>
      <button
        className={clsx(styles.searchButton, {
          [styles.searchButtonActive]: isOpen,
        })}
        onClick={toggleSearch}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleSearch();
          }
        }}
        aria-label={translate({message: 'Search', id: 'searchBar.aria.label'})}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
      >
        <svg
          className={styles.searchIcon}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className={styles.searchModal}
          role="dialog"
          aria-modal="true"
          aria-label={translate({message: 'Search results', id: 'searchBar.dialog.aria.label'})}
        >
          <form onSubmit={handleSearchSubmit} className={styles.searchForm}>
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              onKeyDown={(e) => {
                if (e.key === 'Escape') {
                  setIsOpen(false);
                  setSearchQuery('');
                  setSearchResults([]);
                }
              }}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder={translate({message: 'Search...', id: 'searchBar.placeholder'})}
              className={clsx(styles.searchInput, {
                [styles.searchInputFocused]: isFocused,
              })}
              aria-label={translate({message: 'Search input', id: 'searchBar.input.aria.label'})}
              autoComplete="off"
            />
            {searchQuery && searchResults.length > 0 && (
              <div className={styles.searchResults} role="listbox" aria-label={translate({message: 'Search results', id: 'searchBar.results.aria.label'})}>
                <ul className={styles.searchResultsList}>
                  {searchResults.map((result, index) => (
                    <li
                      key={index}
                      className={styles.searchResultItem}
                      role="option"
                      aria-selected="false"
                    >
                      <a
                        href={result.url}
                        className={styles.searchResultLink}
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            history.push(result.url);
                            setIsOpen(false);
                            setSearchQuery('');
                            setSearchResults([]);
                          }
                        }}
                        onClick={(e) => {
                          e.preventDefault();
                          history.push(result.url);
                          setIsOpen(false);
                          setSearchQuery('');
                          setSearchResults([]);
                        }}
                      >
                        <div className={styles.searchResultTitle}>{result.title}</div>
                        <div className={styles.searchResultExcerpt}>{result.excerpt}</div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {searchQuery && searchResults.length === 0 && (
              <div className={styles.searchNoResults} role="alert">
                {translate({message: 'No results found', id: 'searchBar.noResults'})}
              </div>
            )}
          </form>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
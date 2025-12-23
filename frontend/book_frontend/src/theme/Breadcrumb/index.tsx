/**
 * Custom Breadcrumb component with improved navigation system
 * Enhances user navigation by showing the current page hierarchy
 */

import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {useLocation} from '@docusaurus/router';
import {translate} from '@docusaurus/Translate';
import {usePluralForm} from '@docusaurus/theme-common';
import {useActivePlugin} from '@theme/hooks/useDocs';
import type {Props} from '@theme/Breadcrumb';

import styles from './styles.module.css';

// Simplified breadcrumb implementation for docs
function useBreadcrumbs(): {label: string; href?: string}[] {
  const location = useLocation();
  const activePlugin = useActivePlugin();

  // For now, return a simple breadcrumb structure based on the current path
  const pathSegments = location.pathname
    .split('/')
    .filter(segment => segment.length > 0 && segment !== 'docs');

  const breadcrumbs = [
    {label: translate({message: 'Home', id: 'breadcrumb.home'}), href: '/'},
  ];

  // Add segments based on path
  pathSegments.forEach((segment, index) => {
    const isLast = index === pathSegments.length - 1;
    const href = isLast ? undefined : `/${pathSegments.slice(0, index + 1).join('/')}`;

    // Convert kebab-case to Title Case for display
    const label = segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    breadcrumbs.push({label, href});
  });

  return breadcrumbs;
}

export default function Breadcrumb({className}: Props): JSX.Element {
  const breadcrumbs = useBreadcrumbs();

  if (breadcrumbs.length <= 1) {
    // Don't show breadcrumbs if there's only one item (home)
    return <></>;
  }

  return (
    <nav
      className={clsx(styles.breadcrumb, className)}
      aria-label={translate({message: 'Breadcrumb', id: 'breadcrumb.nav.aria.label'})}>
      <ul className={styles.breadcrumbList}>
        {breadcrumbs.map((item, idx) => {
          const isLast = idx === breadcrumbs.length - 1;

          return (
            <li key={idx} className={styles.breadcrumbItem}>
              {isLast ? (
                <span className={styles.breadcrumbItemLinkCurrent}>
                  {item.label}
                </span>
              ) : (
                <>
                  <Link
                    to={item.href!}
                    className={styles.breadcrumbItemLink}>
                    {item.label}
                  </Link>
                  <span className={styles.breadcrumbSeparator} aria-hidden="true">
                    {' > '}
                  </span>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
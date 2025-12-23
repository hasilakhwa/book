/**
 * Custom DocSidebarItem component with improved navigation structure
 * Enhances individual sidebar items with better accessibility and UX
 */

import React from 'react';
import clsx from 'clsx';
import {useThemeConfig} from '@docusaurus/theme-common';
import Link from '@docusaurus/Link';
import {translate} from '@docusaurus/Translate';
import IconExternalLink from '@theme/IconExternalLink';
import type {Props} from '@theme/DocSidebarItem';

function DocSidebarItemLink({
  item,
  onItemClick,
  activePath,
  level,
  index,
}: Props & {activePath: string; index: number}) {
  const {href, label, className} = item;
  const isActive = href === activePath || activePath.startsWith(href + '/');
  const isInternalLink = href.startsWith('/');

  return (
    <li className={clsx('menu__list-item', className)}>
      <Link
        className={clsx('menu__link', {
          'menu__link--active': isActive,
        })}
        aria-current={isActive ? 'page' : undefined}
        href={href}
        onClick={onItemClick}>
        {label}
        {isInternalLink ? null : <IconExternalLink />}
      </Link>
    </li>
  );
}

function DocSidebarItemCategory({
  item,
  onItemClick,
  activePath,
  level,
  index,
}: Props & {activePath: string; index: number}) {
  const {items, label, collapsible, className} = item;
  const [expanded, setExpanded] = React.useState(false);
  const isActive = items.some(subItem =>
    subItem.href === activePath || activePath.startsWith(subItem.href + '/')
  );

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <li
      className={clsx('menu__list-item', {
        'current-section': isActive,
      })}>
      <div
        className={clsx('menu__list-item-collapsible', {
          'menu__list-item-collapsible--active': isActive,
        })}>
        {collapsible ? (
          <button
            aria-label={translate(
              {
                id: 'theme.docs.sidebar.collapseCategoryButtonAriaLabel',
                message: "Collapse sidebar category '{label}'",
                description: 'The ARIA label for the button that collapses the sidebar category',
              },
              {label},
            )}
            type="button"
            className={clsx('menu__button', {
              'menu__button--active': isActive,
            })}
            onClick={toggleExpanded}>
            <span
              className={clsx('menu__button-caret', {
                'menu__button-caret--expanded': expanded,
              })}
              style={{
                display: 'inline-block',
                transform: expanded ? 'rotate(90deg)' : 'rotate(0deg)',
                transition: 'transform 0.2s ease',
                marginRight: '0.5rem',
              }}
            >
              ▶
            </span>
            {label}
          </button>
        ) : (
          <div className="menu__button menu__button--no-dropdown">
            <span style={{marginRight: '0.5rem'}}></span>
            {label}
          </div>
        )}
      </div>

      {(collapsible ? expanded : true) && (
        <ul className="menu__list">
          {items.map((childItem, childIndex) => (
            <DocSidebarItems
              key={childIndex}
              items={[childItem]}
              activePath={activePath}
              onItemClick={onItemClick}
              level={level + 1}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

export default function DocSidebarItems(props: Props): JSX.Element {
  const {items, activePath, ...propsRest} = props;

  return (
    <>
      {items.map((item, index) => {
        switch (item.type) {
          case 'category':
            return (
              <DocSidebarItemCategory
                key={index}
                item={item}
                activePath={activePath || ''}
                index={index}
                {...propsRest}
              />
            );
          case 'link':
          default:
            return (
              <DocSidebarItemLink
                key={index}
                item={item}
                activePath={activePath || ''}
                index={index}
                {...propsRest}
              />
            );
        }
      })}
    </>
  );
}
# Data Model: Vision-Language-Action (VLA) Systems

**Feature**: 004-vla-systems
**Created**: 2025-12-20
**Status**: Complete

## Content Entities

### VLAModuleChapter
**Description**: A chapter in the VLA Systems module

**Fields**:
- `id`: String identifier (vla-foundations, voice-to-action, cognitive-planning)
- `title`: Display title for the chapter
- `description`: Brief description for metadata
- `sidebar_position`: Number for ordering in sidebar
- `content`: Main content body with sections
- `frontmatter`: Metadata including title, description, sidebar_position
- `citations`: List of APA-formatted references

**Relationships**:
- Preceded by: Previous chapter in sequence (except Chapter 1)
- Followed by: Next chapter in sequence (except Chapter 3)

**Validation**:
- Must meet Flesch-Kincaid Grade 10-12 readability
- Must include minimum 3 technical citations
- Must have proper Docusaurus frontmatter

### TechnicalConcept
**Description**: A technical concept explained within a chapter

**Fields**:
- `name`: Technical term or concept name
- `definition`: Clear explanation of the concept
- `examples`: Practical examples or use cases
- `importance`: Level of importance for understanding (high/medium/low)
- `prerequisites`: Other concepts that should be understood first
- `related`: Related concepts within the module

**Relationships**:
- Belongs to: Single VLAModuleChapter
- Relates to: Other TechnicalConcept entities

**Validation**:
- Must be verifiable against authoritative sources
- Must be clearly explained for target audience
- Must include practical examples

### VLASystemComponent
**Description**: A component of the Vision-Language-Action system

**Fields**:
- `name`: Component name (Perception Module, Reasoning Engine, Action Sequencer, etc.)
- `function`: Primary function of the component
- `technology`: Underlying technology used
- `integration`: How it integrates with other components
- `use_cases`: Primary use cases for the component

**Relationships**:
- Part of: VLA system architecture
- Interacts with: Other VLASystemComponent entities

**Validation**:
- Must align with official research and documentation
- Must clearly explain the component's role

## Navigation Entities

### SidebarCategory
**Description**: A category in the Docusaurus sidebar

**Fields**:
- `label`: Display name for the category
- `type`: Category type (always "category")
- `items`: Array of page paths in the category
- `position`: Order in the sidebar

**Relationships**:
- Contains: Multiple SidebarItem entities
- Ordered with: Other SidebarCategory entities

**Validation**:
- Must follow Docusaurus sidebar format
- Must maintain proper sequence with other modules

### SidebarItem
**Description**: A single item in the sidebar navigation

**Fields**:
- `path`: Relative path to the documentation page
- `title`: Title displayed in navigation
- `description`: Optional description for navigation

**Relationships**:
- Belongs to: Single SidebarCategory
- Links to: VLAModuleChapter

**Validation**:
- Path must correspond to actual documentation file
- Must be accessible through Docusaurus routing

## Citation Entities

### TechnicalReference
**Description**: A technical reference or source cited in the content

**Fields**:
- `id`: Unique identifier for the reference
- `type`: Type of source (documentation, paper, website, etc.)
- `title`: Title of the source
- `authors`: Authors or organization
- `year`: Publication year
- `url`: URL if available
- `access_date`: Date when source was accessed
- `quote`: Specific quote or information referenced

**Relationships**:
- Referenced by: Multiple TechnicalConcept entities
- Cited in: VLAModuleChapter

**Validation**:
- Must follow APA citation format
- Must be verifiable and accessible
- Must be authoritative and relevant

## State Models

### ChapterDevelopmentState
**Description**: States for chapter development process

**States**:
- `draft`: Initial draft created
- `researched`: Research completed and integrated
- `written`: Content written with proper citations
- `reviewed`: Content reviewed for accuracy
- `approved`: Content approved for publication
- `published`: Content published in documentation

**Transitions**:
- `draft` → `researched`: Research phase completed
- `researched` → `written`: Content created
- `written` → `reviewed`: Initial review completed
- `reviewed` → `approved`: Final approval given
- `approved` → `published`: Integrated into documentation

## Integration Models

### VLASystemArchitecture
**Description**: Model of how VLA system components work together

**Components**:
- `perception_layer`: Visual and sensory processing
- `language_layer`: Natural language understanding
- `action_layer`: Task execution and robot control
- `integration_layer`: Coordination between components

**Relationships**:
- Perception provides environmental understanding to language layer
- Language layer interprets commands and provides intent to action layer
- Action layer executes tasks and provides feedback to integration layer
- Integration layer coordinates all components

**Constraints**:
- Each layer must be clearly explained
- Integration points must be documented
- Real-time processing requirements must be specified
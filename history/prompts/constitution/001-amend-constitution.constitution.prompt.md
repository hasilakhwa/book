---
id: 1
title: Amend Constitution
stage: constitution
date: 2025-12-18
surface: agent
model: Claude Sonnet 4.5
feature: none
branch: master
user: Claude Code
command: /sp.constitution
labels: ["constitution", "governance", "spec-kit-plus"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - .specify/memory/constitution.md
 - .specify/templates/plan-template.md
 - .specify/templates/spec-template.md
 - .specify/templates/tasks-template.md
tests:
 - none
---

## Prompt

```text
# Constitution
## Unified AI-Native Book Project

**Project Title:** AI-Native Book with Embedded RAG Intelligence
**Version:** 1.0
**Authoring Authority:** Constitution Writer (20+ years experience)
**Status:** Binding and Mandatory

---

## 1. Preamble

This Constitution defines the supreme rules, standards, and governance framework for the creation, deployment, and evaluation of an AI-native book project built using **Docusaurus**, **Spec-Kit Plus**, and **Claude Code**, with an embedded **Retrieval-Augmented Generation (RAG) chatbot**.

All contributors, agents, sub-agents, tools, and automated systems participating in this project are bound by this Constitution.

---

## 2. Project Scope & Objectives

### 2.1 Primary Objective
To design, write, and deploy a **unified, production-grade technical book** that:
- Is authored and structured using **AI- and specification-driven workflows**
- Is published via **Docusaurus** and deployed on **GitHub Pages**
- Includes a fully integrated **RAG chatbot** capable of answering questions grounded strictly in the book's content

### 2.2 Secondary Objectives
- Demonstrate reusable AI intelligence via **Claude Code Subagents and Agent Skills**
- Enable **user-aware personalization** and **Urdu translation**
- Establish a reproducible, auditable, and extensible AI-native documentation architecture

**Authoritative references:**
- Docusaurus Documentation: https://docusaurus.io/docs
- Spec-Kit Plus (Panaversity): https://github.com/panaversity/spec-kit-plus
- Claude Code (Anthropic): https://www.anthropic.com/claude-code

---

## 3. Core Principles

The project SHALL adhere to the following immutable principles:

1. **Specification Supremacy**
   All implementation must follow formally defined specifications generated and validated using Spec-Kit Plus.

2. **Accuracy by Verification**
   All factual, technical, and architectural claims MUST be verifiable against authoritative primary sources.

3. **Grounded Intelligence**
   The RAG chatbot MUST respond strictly from indexed book content or explicitly user-selected text. Hallucinated or ungrounded answers are prohibited.

4. **Clarity for Technical Readers**
   Content SHALL target readers with a computer science or software engineering background.

5. **Reproducibility**
   Every build, deployment, and AI behavior must be reproducible from documented specifications and source code.

6. **Ethical & Transparent AI Usage**
   AI-generated content must be auditable, traceable, and clearly governed by deterministic specifications.

**Supporting sources:**
- ISO/IEC 25010 Software Quality Model: https://www.iso.org/standard/35733.html
- NIST AI Risk Management Framework: https://www.nist.gov/itl/ai-risk-management-framework

---

## 4. Technology Constitution

### 4.1 Mandatory Technology Stack

The following technologies are **non-negotiable**:

- **Frontend & Book Framework:** Docusaurus
- **Specification System:** Spec-Kit Plus
- **AI Authoring & Automation:** Claude Code
- **Backend API:** FastAPI
- **AI SDKs:** OpenAI Agents / ChatKit SDKs
- **Vector Database:** Qdrant Cloud (Free Tier)
- **Relational Database:** Neon Serverless PostgreSQL
- **Authentication (Bonus):** Better Auth
- **Deployment:** GitHub Pages (Book), Cloud hosting for APIs

**Authoritative documentation:**
- FastAPI: https://fastapi.tiangolo.com
- OpenAI Agents SDK: https://platform.openai.com/docs/agents
- Qdrant: https://qdrant.tech/documentation
- Neon: https://neon.tech/docs
- Better Auth: https://www.better-auth.com

---

## 5. Book Authoring Standards

### 5.1 Content Rules
- All chapters MUST be generated or refined via **Claude Code** under explicit specifications.
- Each chapter SHALL have a deterministic scope, learning objectives, and constraints.
- AI assistance must not violate plagiarism or copyright laws.

### 5.2 Writing Quality
- Target readability: **Flesch–Kincaid Grade 10–12**
- Technical accuracy takes precedence over stylistic flair.

### 5.3 Citations
- Citation style: **APA**
- Minimum **50% peer-reviewed or official technical documentation**
- All claims must be traceable.

**Reference standards:**
- APA Style Guide: https://apastyle.apa.org
- Flesch–Kincaid Readability Tests: https://readabilityformulas.com

---

## 6. RAG Chatbot Constitution

### 6.1 Functional Mandates
The chatbot MUST:
- Answer questions strictly from indexed book content
- Support **contextual Q&A based on user-selected text**
- Reject or explicitly flag questions outside available knowledge

### 6.2 Architectural Rules
- Embeddings stored in Qdrant
- Metadata links answers to exact chapter/section
- Retrieval logic auditable and testable

### 6.3 Prohibited Behavior
- Hallucinated facts
- External knowledge injection without citation
- User profiling beyond declared authentication data

**RAG best practices:**
- Lewis et al., *Retrieval-Augmented Generation* (Facebook AI Research): https://arxiv.org/abs/2005.11401

---

## 7. Personalization & Localization (Bonus Governance)

### 7.1 Authentication
- Signup and Signin MUST use Better Auth
- During signup, users SHALL be asked about:
  - Software background
  - Hardware background
  - Experience level

### 7.2 Personalized Content
- Logged-in users may personalize chapters via an explicit button
- Personalization must be reversible and transparent

### 7.3 Urdu Translation
- Logged-in users may translate chapter content to **Urdu**
- Original English content must remain accessible
- Machine translation must preserve technical accuracy

**Localization standards:**
- W3C Internationalization: https://www.w3.org/International

---

## 8. Scoring & Evaluation Framework

### 8.1 Base Score (100 Points)
- Book completion and deployment
- Functional RAG chatbot
- Specification compliance

### 8.2 Bonus Points
- +50: Reusable intelligence via Claude Subagents & Skills
- +50: Authentication with background-aware personalization
- +50: Chapter-level personalization
- +50: Urdu translation support

### 8.3 Disqualification Criteria
- Ungrounded AI answers
- Missing specifications
- Plagiarism or unverifiable claims

---

## 9. Compliance & Enforcement

- This Constitution overrides all informal instructions.
- Any deviation requires an explicit constitutional amendment.
- Automated agents must fail-safe if constitutional constraints are violated.

---

## 10. Success Criteria

The project SHALL be deemed successful if:
- The book is publicly accessible on GitHub Pages
- The RAG chatbot answers accurately and verifiably
- All specifications are satisfied and reproducible
- Zero plagiarism is detected
- Fact-checking review is passed

---

## 11. Final Authority

This Constitution is final, binding, and enforceable across all human and AI contributors.
No implementation detail may contradict its principles, standards, or constraints.
```

## Response snapshot

The project constitution has been successfully updated with the new AI-Native Book with Embedded RAG Intelligence Constitution. The template at `.specify/memory/constitution.md` has been completely replaced with the specific constitution content provided by the user.

Additionally, I've updated the following template files to align with the new constitution:
1. `.specify/templates/plan-template.md` - Updated the Constitution Check section with specific compliance items
2. `.specify/templates/spec-template.md` - Updated functional requirements to include constitutional requirements
3. `.specify/templates/tasks-template.md` - Updated foundational tasks and final phase tasks to include constitutional compliance

The new constitution establishes 6 core principles:
1. Specification Supremacy
2. Accuracy by Verification
3. Grounded Intelligence
4. Clarity for Technical Readers
5. Reproducibility
6. Ethical & Transparent AI Usage

It also mandates specific technology stack requirements (Docusaurus, Spec-Kit Plus, Claude Code, FastAPI, Qdrant, Neon PostgreSQL, Better Auth for bonus features).

The constitution includes governance for book authoring standards, RAG chatbot functionality, personalization/localization features, scoring framework, and success criteria.

## Outcome

- ✅ Impact: Complete constitution replacement with new AI-native book project governance
- 🧪 Tests: No tests required for this governance update
- 📁 Files: 4 files updated to maintain constitutional alignment
- 🔁 Next prompts: Ready to proceed with feature development following new constitution
- 🧠 Reflection: Constitution now provides comprehensive governance for AI-native book project with RAG capabilities

## Evaluation notes (flywheel)

- Failure modes observed: None
- Graders run and results (PASS/FAIL): N/A for governance update
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): Begin feature development following new constitution
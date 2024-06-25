# Nikshay Setu V3 Monorepo

Welcome to the Nikshay Setu V3 Monorepo! This repository contains the source code for the Nikshay Setu project. Below you'll find detailed information about the project, setup instructions, and guidelines for contributing.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup Instructions](#setup-instructions)
- [Conventional Branching](#conventional-branching)
- [Conventional Commits](#conventional-commits)
- [Contribution Guidelines](#contribution-guidelines)
- [License](#license)

## Project Overview

Nikshay Setu is an initiative aimed at providing a comprehensive digital health solution. The V3 version of the project brings enhanced features, better performance, and improved user experience.

## Features

- User-friendly interface for managing health records
- Integration with various health services
- Real-time data synchronization
- Secure data handling and privacy protection

## Tech Stack

- **Frontend:** React, Redux, TypeScript, Theme UI
- **Backend:** Node.js, Express, MongoDB
- **Authentication:** NextAuth.js with Google provider integration
- **State Management:** Redux (without @reduxjs/toolkit)
- **Testing:** Jest, React Testing Library

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/gaurav-digiflux/nikshay-setu-v3-monorepo.git
   cd nikshay-setu-v3-monorepo
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Set up environment variables:**
   Create a `.env` file in the root directory and add the necessary environment variables as specified in the `.env.example` file.
4. **Run the development server:**
   ```bash
   npm run dev
   ```
5. **Build the project:**
   ```bash
   npm run build
   ```
6. **Run tests:**
   ```bash
   npm test
   ```

## Conventional Branching

We follow a conventional branching strategy to maintain a clean and organized repository:

- **main:** The production-ready code.
- **develop:** The development branch where features are integrated.
- **feature/feature-name:** Branches for new features.
- **bugfix/bugfix-name:** Branches for bug fixes.
- **hotfix/hotfix-name:** Branches for urgent fixes on production.

## Conventional Commits

We use Conventional Commits to provide a consistent commit history:

- **feat:** A new feature.
- **fix:** A bug fix.
- **docs:** Documentation only changes.
- **style:** Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc).
- **refactor:** A code change that neither fixes a bug nor adds a feature.
- **perf:** A code change that improves performance.
- **test:** Adding missing or correcting existing tests.
- **chore:** Changes to the build process or auxiliary tools and libraries such as documentation generation.
  Example:

```bash
git commit -m "feat: add new user authentication flow"
```

# MobTime Refactoring Project

This repository is a fork of the original [MobTime](https://github.com/mobtimeapp/mobtime) project.  
The goal is to refactor the existing codebase to improve structure, maintainability, and resilience — starting with a full migration from JavaScript to TypeScript.

---

## Phase 1: JavaScript → TypeScript Migration

### Objectives

- Understand the existing codebase: its logic, structure, and orchestration.
- Identify key dependencies and their integration points.
- Gradually introduce TypeScript while ensuring non-regression.

### Steps

1. Explore and document how the main components interact.
2. Start with the backend (my personal favorite 😄):
   - Select a single feature or route as a pilot refactor.
   - Write non-regression tests to secure existing behavior.
   - Convert the targeted module to TypeScript.
   - Ensure typings and build configuration are correct.
3. Iterate module by module until full TypeScript coverage is achieved.

---

## Next Steps

After the TypeScript migration, the plan is to:

- Improve test coverage and developer experience.
- Document architectural decisions in this file.

---

> *Refactoring is the process of changing a software system in such a way that it does not alter the external behavior of the code yet  
> improves its >internal structure.  
> — Martin fowler*

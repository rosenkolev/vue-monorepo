# Vue Monorepo

A modern Vue Monorepo using `pnpm` workspaces, `turborepo`, and `changesets`.

## Project Structure

```
.
├── apps/
│   ├── docs/          # VitePress documentation site
│   └── portal/        # Main Vue 3 Portal application
├── packages/
│   ├── ui/            # Vue Component Library (PrimeVue, Storybook)
│   └── utils/         # Shared TypeScript Utilities
├── turbo.json         # Turbo pipeline configuration
├── pnpm-workspace.yaml
└── package.json
```

## Features

- **Monorepo Management**: `pnpm` workspaces for dependency management, `turborepo` for build orchestration.
- **Component Library**: `packages/ui` exporting reusable components (`Button`, `Input`, `CheckboxList`) built with **PrimeVue**.
- **Documentation**: `apps/docs` running **VitePress**.
- **Main App**: `apps/portal` demonstrating the components and featuring a **Dark/Light Theme Switcher**.
- **Testing**: **Vitest** for unit tests (JSDOM environment), **Storybook** for interaction tests.
- **Linting**: Root-level ESLint (Flat Config) & Prettier.

## How to Run

### Install Dependencies

```bash
pnpm install
```

### Development

Start all applications in development mode:

```bash
pnpm dev
```

- **Portal**: [http://localhost:5173](http://localhost:5173)
- **Storybook**: [http://localhost:6006](http://localhost:6006)
- **Docs**: [http://localhost:5174](http://localhost:5174)

### Build

Build all packages and apps:

```bash
pnpm build
```

### Test

Run unit tests across the workspace:

```bash
pnpm test
```

### Release

To publish changes:

```bash
pnpm changeset
pnpm version
pnpm release
```

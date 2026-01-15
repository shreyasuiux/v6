# Design Layer

## Purpose

The `/src/design/` directory contains **design-owned components** and their supporting architecture. This layer provides a clear separation between Figma-generated presentational components and application-owned business logic.

## Architecture

### Component Pattern

```
┌─────────────────────────────────────────┐
│ Page Layer (/src/pages/)               │
│ - Routing units                         │
│ - Imports from design layer             │
└──────────────┬──────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────┐
│ Design Layer (/src/design/)             │
│ - Wrapper components                    │
│ - Type definitions                      │
│ - Asset injection                       │
└──────────────┬──────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────┐
│ Design Imports (/src/imports/)          │
│ - Figma-generated components            │
│ - Pure presentational                   │
└─────────────────────────────────────────┘
```

### Key Principles

1. **Props-Based Architecture**: Design components receive all dependencies via props
2. **Asset Injection**: Images imported from centralized manifest, passed as props
3. **Type Safety**: TypeScript interfaces for all component props and assets
4. **Regeneration Safety**: Figma components can be regenerated without breaking the app
5. **Zero Build Dependencies**: No `figma:asset` imports in final build

## Files

### `Desktop72.types.ts`

**Purpose**: TypeScript interfaces for Desktop72 component

**Contents**:
- `Desktop72Assets` - Interface for all required images
- `Desktop72Props` - Props interface for component

**Usage**:
```typescript
import { Desktop72Assets, Desktop72Props } from '@/design/Desktop72.types';
```

### `Desktop72.wrapper.tsx`

**Purpose**: Wrapper component that injects assets via props

**Contents**:
- Asset prop merging with defaults
- Placeholder generation for development
- Forward compatibility with refactored components

**Usage**:
```typescript
import { Desktop72Wrapper } from '@/design/Desktop72.wrapper';
import { homeAssets } from '@/assets/assetManifest';

<Desktop72Wrapper 
  assets={homeAssets}
  onSearchClick={handleSearch}
/>
```

## Ownership & Modification Rules

| Directory | Ownership | Safe to Modify | Regeneration |
|-----------|-----------|----------------|--------------|
| `/src/design/` | **Application** | ✅ Yes | Manual |
| `/src/imports/` | **Design/Figma** | ❌ No | Automatic |
| `/src/pages/` | **Application** | ✅ Yes | Manual |
| `/src/app/components/` | **Application** | ✅ Yes | Manual |

### Guidelines

**✅ DO**:
- Create wrapper components in `/src/design/`
- Define type interfaces for design components
- Inject assets and dependencies via props
- Document component requirements clearly
- Test thoroughly after changes

**❌ DON'T**:
- Modify files in `/src/imports/` directly
- Add business logic to design components
- Import `figma:asset` in wrapper components
- Mix design and application concerns
- Bypass the wrapper pattern

## Asset Management

### Asset Flow

```
Asset Manifest (/src/assets/assetManifest.ts)
    ↓
Page Component (/src/pages/*/page.tsx)
    ↓
Design Wrapper (/src/design/*.wrapper.tsx)
    ↓
Design Component (/src/imports/*.tsx)
```

### Example: Desktop72

**Asset Manifest**:
```typescript
// /src/assets/assetManifest.ts
export const homeAssets = {
  background: '/src/assets/images/home/background.png',
  videoThumbnail1: '/src/assets/images/home/video-thumb-1.png',
  // ... 18 more assets
};
```

**Page**:
```typescript
// /src/pages/Home/Home.page.tsx
import { Desktop72Wrapper } from '@/design/Desktop72.wrapper';
import { homeAssets } from '@/assets/assetManifest';

export function HomePage() {
  return <Desktop72Wrapper assets={homeAssets} />;
}
```

**Wrapper**:
```typescript
// /src/design/Desktop72.wrapper.tsx
export function Desktop72Wrapper({ assets, onSearchClick }: Desktop72Props) {
  // Inject assets into design component
  return <Desktop72Original {...props} />;
}
```

## Adding New Design Components

### Step 1: Import Figma Component

```bash
# Figma generates component in /src/imports/
/src/imports/NewComponent.tsx
```

### Step 2: Create Type Definition

```typescript
// /src/design/NewComponent.types.ts
export interface NewComponentAssets {
  heroImage: string;
  icon: string;
}

export interface NewComponentProps {
  assets?: NewComponentAssets;
  onAction?: () => void;
}
```

### Step 3: Create Wrapper

```typescript
// /src/design/NewComponent.wrapper.tsx
import { NewComponentProps } from './NewComponent.types';
import NewComponentOriginal from '@/imports/NewComponent';

export function NewComponentWrapper({ assets, onAction }: NewComponentProps) {
  return <NewComponentOriginal onAction={onAction} />;
}
```

### Step 4: Add Assets to Manifest

```typescript
// /src/assets/assetManifest.ts
export const newComponentAssets = {
  heroImage: '/src/assets/images/new/hero.png',
  icon: '/src/assets/images/new/icon.png',
};
```

### Step 5: Use in Page

```typescript
// /src/pages/NewPage/NewPage.page.tsx
import { NewComponentWrapper } from '@/design/NewComponent.wrapper';
import { newComponentAssets } from '@/assets/assetManifest';

export function NewPage() {
  return (
    <PageWithNavigation>
      {(props) => <NewComponentWrapper assets={newComponentAssets} />}
    </PageWithNavigation>
  );
}
```

## Benefits

### 1. Clear Separation of Concerns
- Design components focus on presentation
- Application components handle business logic
- Assets managed centrally
- Easy to understand and maintain

### 2. Regeneration Safety
- Figma components can be regenerated
- Wrappers preserve application integration
- Type definitions catch breaking changes
- Zero risk to application code

### 3. Asset Control
- All assets in centralized manifest
- Easy to swap images (e.g., A/B testing)
- Simple to optimize (WebP, compression)
- Version controlled and cacheable

### 4. Development Experience
- Type-safe component usage
- IntelliSense support
- Clear documentation
- Easy to test with mocks

### 5. Production Ready
- Zero virtual module dependencies
- Optimizable build output
- Works on any hosting platform
- No Figma runtime dependencies

## Testing

### Unit Testing

```typescript
import { render } from '@testing-library/react';
import { Desktop72Wrapper } from '@/design/Desktop72.wrapper';

const mockAssets = {
  background: 'data:image/svg+xml,...',
  // ... other mocks
};

test('renders with custom assets', () => {
  const { container } = render(
    <Desktop72Wrapper assets={mockAssets} />
  );
  expect(container).toBeInTheDocument();
});
```

### Integration Testing

```typescript
test('HomePage loads with real assets', () => {
  const { container } = render(<HomePage />);
  // Assert UI renders correctly
});
```

## Troubleshooting

### Type Errors

**Problem**: TypeScript errors about missing properties

**Solution**: 
1. Check that asset interface matches manifest
2. Ensure all required props are provided
3. Verify import paths are correct

### Assets Not Loading

**Problem**: Images show as broken

**Solution**:
1. Verify asset paths in manifest
2. Check that images exist in `/src/assets/images/`
3. Review browser console for 404 errors

### Component Not Rendering

**Problem**: Blank screen or errors

**Solution**:
1. Check wrapper is properly importing original component
2. Verify all props are passed correctly
3. Review React DevTools for component tree

## Future Enhancements

### Phase 1: Complete Asset Injection ⏳
- Refactor Desktop72 to accept assets via props
- Eliminate all remaining `figma:asset` imports
- Achieve 100% asset isolation

### Phase 2: Design System Extraction 📋
- Extract reusable components from design files
- Create shared component library
- Document design tokens and patterns

### Phase 3: Advanced Features 📋
- Lazy loading for images
- Responsive image srcsets
- CDN integration
- Image optimization pipeline

## Resources

- [Asset Export Guide](/ASSET_EXPORT_GUIDE.md) - How to export images from Figma
- [Asset Manifest](/src/assets/assetManifest.ts) - Centralized asset configuration
- [Pages Layer Docs](/PAGES_LAYER_IMPLEMENTATION.md) - Routing architecture
- [Final Isolation Docs](/FINAL_ASSET_ISOLATION.md) - Complete architecture guide

---

**Version**: 1.0.0  
**Last Updated**: January 15, 2026  
**Maintainer**: Application Team

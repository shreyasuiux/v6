# Developer Migration Guide - React Router

## Quick Start for Developers

This guide helps developers understand the new routing system and how to work with it.

## What Changed?

### Before: State-Based Navigation
```tsx
// OLD - Don't do this anymore
const [showPage, setShowPage] = useState(false);
dispatchNavigation('navigate-service', 'Cloud Practice');
setShowCloudPractice(true);
```

### After: React Router Navigation  
```tsx
// NEW - Use this pattern
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/routes';

const navigate = useNavigate();
navigate(ROUTES.SERVICES.CLOUD_PRACTICE);
```

## How to Navigate Programmatically

### In a Component
```tsx
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/routes';

function MyComponent() {
  const navigate = useNavigate();
  
  const handleClick = () => {
    // Navigate to a specific route
    navigate(ROUTES.PRODUCTS.AGENT_STUDIO);
    
    // Navigate with scroll to top
    window.scrollTo({ top: 0, behavior: 'auto' });
    navigate(ROUTES.HOME);
    
    // Go back
    navigate(-1);
    
    // Go forward
    navigate(1);
  };
  
  return <button onClick={handleClick}>Navigate</button>;
}
```

### Using Links
```tsx
import { Link } from 'react-router-dom';
import { ROUTES } from '@/routes';

function Navigation() {
  return (
    <nav>
      <Link to={ROUTES.HOME}>Home</Link>
      <Link to={ROUTES.SERVICES.CLOUD_PRACTICE}>Cloud Practice</Link>
      <Link to={ROUTES.PRODUCTS.AGENT_STUDIO}>Agent Studio</Link>
    </nav>
  );
}
```

### Using NavLink (with active state)
```tsx
import { NavLink } from 'react-router-dom';
import { ROUTES } from '@/routes';

function Navigation() {
  return (
    <nav>
      <NavLink 
        to={ROUTES.HOME}
        className={({ isActive }) => isActive ? 'active' : ''}
      >
        Home
      </NavLink>
    </nav>
  );
}
```

## Available Routes

Import routes from the centralized configuration:

```tsx
import { ROUTES } from '@/routes';
```

### Route Structure
```typescript
ROUTES = {
  HOME: '/',
  
  SERVICES: {
    CLOUD_PRACTICE: '/services/cloud-practice',
    DIGITAL_ENGINEERING: '/services/digital-engineering',
    BIG_DATA: '/services/big-data',
    APP_MODERNIZATION: '/services/app-modernization',
    SECURITY: '/services/security',
    DATABASE_MANAGEMENT: '/services/database-management',
    ERP_TESTING: '/services/erp-testing',
  },
  
  AI: {
    INDEX: '/ai',
    BFSI_AGENTS: '/ai/bfsi-agents',
    BRAND_MANAGEMENT: '/ai/brand-management',
  },
  
  PRODUCTS: {
    AGENT_STUDIO: '/products/agent-studio',
    ATLAS_API_MANAGER: '/products/atlas-api-manager',
    OTTOHM_VIDEO: '/products/ottohm-video',
    ITSM_TICKETING: '/products/itsm-ticketing',
    AI_OPS: '/products/ai-ops',
    SMART_CONTRACTS: '/products/smart-contracts',
  },
  
  WHO_WE_ARE: {
    OUR_TEAM: '/who-we-are/our-team',
    ABOUT_US: '/who-we-are/about-us',
    PARTNERS: '/who-we-are/partners',
    CAREERS: '/who-we-are/careers',
    NEWS: '/who-we-are/news',
  },
  
  CASE_STUDIES: '/case-studies',
};
```

## Adding a New Route

### Step 1: Add Route Path to ROUTES Constant
**File:** `/src/routes.tsx`

```tsx
export const ROUTES = {
  // ... existing routes ...
  
  NEW_SECTION: {
    NEW_PAGE: '/new-section/new-page',
  },
} as const;
```

### Step 2: Add Route Definition
**File:** `/src/routes.tsx` in `AppRoutes` component

```tsx
export function AppRoutes() {
  return (
    <Routes>
      {/* ... existing routes ... */}
      
      <Route 
        path={ROUTES.NEW_SECTION.NEW_PAGE} 
        element={
          <PageWithNavigation>
            {(props) => <NewPage {...props} />}
          </PageWithNavigation>
        } 
      />
    </Routes>
  );
}
```

### Step 3: Use the New Route
```tsx
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/routes';

const navigate = useNavigate();
navigate(ROUTES.NEW_SECTION.NEW_PAGE);
```

## Reading URL Parameters

### Define Route with Params
```tsx
<Route 
  path="/blog/:postId" 
  element={<BlogPost />} 
/>
```

### Access Params in Component
```tsx
import { useParams } from 'react-router-dom';

function BlogPost() {
  const { postId } = useParams();
  return <div>Post ID: {postId}</div>;
}
```

## Reading Query Strings

```tsx
import { useSearchParams } from 'react-router-dom';

function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  
  return <div>Search: {query}</div>;
}

// URL: /search?q=react+router
// query = "react router"
```

## Navigation with State

```tsx
import { useNavigate, useLocation } from 'react-router-dom';

// Navigate with state
function SourcePage() {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/destination', { 
      state: { from: 'source-page', userId: 123 } 
    });
  };
}

// Access state in destination
function DestinationPage() {
  const location = useLocation();
  const { from, userId } = location.state || {};
  
  return <div>Came from: {from}, User: {userId}</div>;
}
```

## Checking Current Route

```tsx
import { useLocation } from 'react-router-dom';
import { ROUTES } from '@/routes';

function MyComponent() {
  const location = useLocation();
  const isHome = location.pathname === ROUTES.HOME;
  
  return <div>Is Home: {isHome ? 'Yes' : 'No'}</div>;
}
```

## Navigation Guards / Protected Routes

```tsx
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const isAuthenticated = checkAuth(); // Your auth logic
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
}

// Usage in routes.tsx
<Route 
  path="/dashboard" 
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  } 
/>
```

## Common Patterns

### Navigate After Action
```tsx
function CreateForm() {
  const navigate = useNavigate();
  
  const handleSubmit = async (data) => {
    await api.create(data);
    // Navigate after successful creation
    navigate(ROUTES.HOME);
  };
}
```

### Conditional Navigation
```tsx
function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleLogin = async (credentials) => {
    await auth.login(credentials);
    
    // Redirect to the page they tried to access
    const from = location.state?.from || ROUTES.HOME;
    navigate(from, { replace: true });
  };
}
```

### Navigation with Confirmation
```tsx
function EditPage() {
  const navigate = useNavigate();
  const [isDirty, setIsDirty] = useState(false);
  
  const handleCancel = () => {
    if (isDirty) {
      if (confirm('Discard changes?')) {
        navigate(-1);
      }
    } else {
      navigate(-1);
    }
  };
}
```

## Deprecated Patterns

### ❌ Don't Use These Anymore

```tsx
// ❌ DON'T: Manual state management
const [showPage, setShowPage] = useState(false);
setShowPage(true);

// ❌ DON'T: Custom events
dispatchNavigation('navigate-service', 'Cloud Practice');

// ❌ DON'T: window.location
window.location.href = '/services/cloud-practice';

// ❌ DON'T: Hardcoded paths
navigate('/services/cloud-practice'); // Use ROUTES constant instead

// ❌ DON'T: history.pushState
window.history.pushState({}, '', '/new-page');
```

### ✅ Use These Instead

```tsx
// ✅ DO: React Router navigation
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/routes';
const navigate = useNavigate();
navigate(ROUTES.SERVICES.CLOUD_PRACTICE);

// ✅ DO: Link components
<Link to={ROUTES.HOME}>Home</Link>

// ✅ DO: Centralized route constants
navigate(ROUTES.PRODUCTS.AGENT_STUDIO);
```

## Testing with React Router

### In Jest Tests
```tsx
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

function renderWithRouter(component) {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
}

test('renders component', () => {
  renderWithRouter(<MyComponent />);
});
```

### With Memory Router (for testing)
```tsx
import { MemoryRouter } from 'react-router-dom';

function TestWrapper({ children, initialEntries = ['/'] }) {
  return (
    <MemoryRouter initialEntries={initialEntries}>
      {children}
    </MemoryRouter>
  );
}
```

## Troubleshooting

### Issue: "useNavigate must be used within a BrowserRouter"
**Solution:** Make sure your component is rendered within the router. Check that `<BrowserRouter>` wraps your app in `/src/main.tsx`.

### Issue: 404 on page refresh
**Solution:** Configure your hosting provider to redirect all requests to `index.html`. See `DEPLOYMENT_GUIDE.md`.

### Issue: Navigation not working
**Solution:** Check that you're using `useNavigate()` from React Router, not a custom implementation. Verify imports.

### Issue: Route not matching
**Solution:** Check that your path matches exactly. Paths are case-sensitive. Use `ROUTES` constant to avoid typos.

## Best Practices

### ✅ DO
- Always use `ROUTES` constant for navigation
- Use `<Link>` for navigation when possible
- Use `useNavigate()` for programmatic navigation
- Keep route definitions in `/src/routes.tsx`
- Scroll to top when navigating programmatically

### ❌ DON'T  
- Don't hardcode route strings
- Don't use `window.location` for internal navigation
- Don't define routes in page components
- Don't create nested `<BrowserRouter>` instances
- Don't bypass React Router for navigation

## Need Help?

- **Documentation:** See `ROUTING_REFACTOR_REPORT.md` for detailed implementation
- **Deployment:** See `DEPLOYMENT_GUIDE.md` for hosting setup
- **Summary:** See `ROUTING_IMPLEMENTATION_SUMMARY.md` for quick overview
- **React Router Docs:** https://reactrouter.com/

## Quick Reference Card

```tsx
// Import
import { useNavigate, Link, NavLink, useLocation, useParams } from 'react-router-dom';
import { ROUTES } from '@/routes';

// Navigate programmatically
const navigate = useNavigate();
navigate(ROUTES.HOME);
navigate(-1); // Go back
navigate(1);  // Go forward

// Link component
<Link to={ROUTES.SERVICES.CLOUD_PRACTICE}>Cloud Practice</Link>

// NavLink with active state
<NavLink to={ROUTES.HOME} className={({ isActive }) => isActive ? 'active' : ''}>

// Current location
const location = useLocation();
const currentPath = location.pathname;

// URL parameters
const { id } = useParams();

// Query strings
const [searchParams] = useSearchParams();
const query = searchParams.get('q');
```

---

**Happy Routing! 🚀**

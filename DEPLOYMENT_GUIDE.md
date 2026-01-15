# Deployment Guide for React Router Application

This application uses React Router for client-side routing. To ensure all routes work correctly on production, you need to configure your hosting provider to redirect all requests to `index.html`.

## Hosting Configuration

### Netlify

Create a `_redirects` file in the `public` directory (if not exists):

```
/* /index.html 200
```

Or use `netlify.toml`:

```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Vercel

Create `vercel.json` in the project root:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### Nginx

Add this to your nginx configuration:

```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

### Apache

Create/update `.htaccess` in your build directory:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```

### AWS S3 + CloudFront

1. In S3 bucket settings, set both Index Document and Error Document to `index.html`
2. In CloudFront, create a custom error response:
   - HTTP Error Code: 404
   - Error Caching Minimum TTL: 0
   - Customize Error Response: Yes
   - Response Page Path: `/index.html`
   - HTTP Response Code: 200

### Firebase Hosting

Update `firebase.json`:

```json
{
  "hosting": {
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

## Subpath Deployment

If your app is served from a subpath (e.g., `https://example.com/myapp/`), update the `BrowserRouter` in `/src/main.tsx`:

```tsx
<BrowserRouter basename="/myapp">
  <App />
</BrowserRouter>
```

## Build and Test

1. Build the application:
   ```bash
   npm run build
   ```

2. Test locally with a static server:
   ```bash
   npx serve -s dist
   ```

3. Navigate to different routes:
   - http://localhost:3000/
   - http://localhost:3000/services/cloud-practice
   - http://localhost:3000/products/agent-studio
   - http://localhost:3000/who-we-are/about-us

4. Refresh the page on any route - it should work without 404 errors

## Route Structure

The application uses the following route structure:

### Services
- `/services/cloud-practice`
- `/services/digital-engineering`
- `/services/big-data`
- `/services/app-modernization`
- `/services/security`
- `/services/database-management`
- `/services/erp-testing`

### AI Solutions
- `/ai`
- `/ai/bfsi-agents`
- `/ai/brand-management`

### Products
- `/products/agent-studio`
- `/products/atlas-api-manager`
- `/products/ottohm-video`
- `/products/itsm-ticketing`
- `/products/ai-ops`
- `/products/smart-contracts`

### Company
- `/who-we-are/our-team`
- `/who-we-are/about-us`
- `/who-we-are/partners`
- `/who-we-are/careers`
- `/who-we-are/news`

### Other
- `/case-studies`

## Troubleshooting

### 404 Errors on Refresh

If you get 404 errors when refreshing on routes other than `/`, your hosting provider is not redirecting correctly. Double-check the configuration above.

### Blank Page on Direct URL

Ensure `index.html` is being served for all routes. Check browser console for errors.

### Assets Not Loading

If CSS/JS assets aren't loading on subroutes, ensure your build tool is using relative paths. With Vite, this should work by default.

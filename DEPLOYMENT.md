# Deployment Guide

## Local Development

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Open browser**
   Navigate to `http://localhost:5173`

## Production Build

1. **Build for production**
   ```bash
   npm run build
   ```

2. **Preview production build**
   ```bash
   npm run preview
   ```

## Deployment Options

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on push to main branch

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts to deploy

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Run `npm run deploy`

### Traditional Web Hosting
1. Run `npm run build`
2. Upload the `dist` folder contents to your web server
3. Ensure your server serves `index.html` for all routes (SPA routing)

## Environment Variables

No environment variables are required for this application as it uses static data and client-side state management.

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance

- Bundle size: ~267KB (gzipped: ~85KB)
- CSS size: ~29KB (gzipped: ~6KB)
- Optimized for production with Vite
- Tree-shaking enabled
- Code splitting implemented

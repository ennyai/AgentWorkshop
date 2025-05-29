# Content Automation Webinar Landing Page

A modern, responsive landing page for the "Content Automation Webinar" - teaching business owners, marketers, and content creators how to automate their content creation process without coding.

## 🚀 Features

- **Free 1-Hour Webinar Registration** - Streamlined registration flow
- **Content Automation Focus** - No-code approach to content creation
- **Mobile-Responsive Design** - Built with Tailwind CSS
- **Modern React/TypeScript Stack** - Fast and reliable
- **Optimized for Conversion** - Lead magnet to workshop funnel

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Deployment**: Railway

## 📋 Webinar Content

- Live content automation demo
- No-code tools walkthrough (Make.com, n8n, Google Sheets)
- Step-by-step implementation strategy
- 80% time savings methodology
- Q&A and optional workshop preview

## 🚢 Deployment to Railway

### Prerequisites
- Railway account ([railway.app](https://railway.app))
- GitHub repository

### Quick Deploy

1. **Connect Repository**:
   ```bash
   # Push your code to GitHub
   git add .
   git commit -m "Ready for Railway deployment"
   git push origin main
   ```

2. **Deploy on Railway**:
   - Visit [railway.app](https://railway.app)
   - Click "Deploy from GitHub repo"
   - Select this repository
   - Railway will automatically detect the Vite configuration

3. **Environment Variables** (if needed):
   - Set `PORT` (Railway provides this automatically)
   - Add any custom environment variables in Railway dashboard

### Manual Deployment

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login to Railway
railway login

# Initialize project
railway init

# Deploy
railway up
```

## 🏗️ Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── HeroSection.tsx # Main hero with registration
│   ├── WorkshopOverview.tsx
│   ├── BusinessBenefits.tsx
│   ├── Timeline.tsx
│   ├── Testimonials.tsx
│   ├── BuildSection.tsx
│   ├── Navbar.tsx
│   ├── ZoomRegistration.tsx
│   └── RegistrationForm.tsx
├── lib/                # Utility functions
├── App.tsx            # Main app component
└── main.tsx          # App entry point
```

## 🎯 Target Audience

- Business owners looking to scale content
- Marketing teams wanting efficiency
- Content creators seeking automation
- COOs and marketing managers
- Freelancers and consultants

## 📊 Key Metrics to Track

- Webinar registration conversion rate
- Email capture rate
- Time spent on page
- Workshop upgrade conversion
- Mobile vs desktop usage

## 🔧 Customization

### Branding
- Update colors in `tailwind.config.ts`
- Replace logos and images in `public/`
- Modify content in component files

### Integrations
- Zoom webinar registration API
- Email marketing platform (optional)
- Analytics tracking (Google Analytics, etc.)

## 🌐 Live Demo

Once deployed to Railway, your webinar landing page will be available at your Railway-provided URL.

## 📝 License

Private project for content automation webinar marketing.

---

Built with ❤️ for content creators who want to scale without complexity.

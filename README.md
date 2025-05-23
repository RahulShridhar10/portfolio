# Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Shadcn UI. This portfolio features a clean design with dark/light mode toggle, smooth animations, and sections for showcasing your projects, skills, and testimonials.

## Features

- Responsive design that works on all devices (mobile, tablet, desktop)
- Dark/light mode toggle with theme persistence
- Smooth scrolling and animations
- Sections for:
  - Hero introduction
  - About me with skills and experience
  - Projects showcase with filtering
  - Testimonials
  - Contact form
- GitHub Pages deployment setup

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or another package manager (bun, pnpm, etc.)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
# or
bun install
```

3. Start the development server:
```bash
npm run dev
# or
bun run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Customization

### Personal Information

- Edit your personal information in the respective section components
- Update social media links in the `Footer` and `ContactSection` components
- Replace the placeholder avatar image with your own in the `AboutSection`

### Projects

- Update the projects array in `src/components/sections/projects-section.tsx` with your own projects
- Add your project images to the public directory or use external URLs

### Testimonials

- Update the testimonials array in `src/components/sections/testimonials-section.tsx` with your own testimonials

### Resume

- Replace the placeholder `public/resume.pdf` with your actual resume file

## Deployment to GitHub Pages

This project is configured for easy deployment to GitHub Pages using GitHub Actions.

### Setting up GitHub Pages Deployment

1. Create a GitHub repository for your portfolio
2. Push your code to the repository:
```bash
git remote add origin https://github.com/yourusername/portfolio-website.git
git branch -M main
git push -u origin main
```

3. In your repository settings on GitHub:
   - Go to "Settings" > "Pages"
   - Under "Source", select "GitHub Actions"

4. The GitHub Action workflow is already set up in `.github/workflows/deploy.yml`

5. Every time you push to the main branch, your site will automatically deploy to GitHub Pages

6. Your site will be available at `https://yourusername.github.io/portfolio-website`

### Custom Domain (Optional)

1. In your repository settings on GitHub:
   - Go to "Settings" > "Pages"
   - Under "Custom domain", enter your domain
   - Save

2. Update your DNS records with your domain provider to point to GitHub Pages

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- Shadcn UI
- Lucide Icons
- GitHub Actions

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Shadcn UI](https://ui.shadcn.com/) for the beautiful component library
- [Lucide Icons](https://lucide.dev/) for the icon set
- [Unsplash](https://unsplash.com/) for the placeholder images

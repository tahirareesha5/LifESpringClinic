# LifeSpring Health Clinic Website

A modern, responsive healthcare website built with Next.js for LifeSpring Health Clinic - a healthcare facility focused on preventive care, family medicine, and chronic disease management.

![LifeSpring Health Clinic](https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=1200&h=400&fit=crop)

## 🌟 Features

- **Modern Design**: Clean, warm, and welcoming interface designed specifically for healthcare
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Fast Performance**: Built with Next.js for optimal loading speeds
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Accessible**: WCAG compliant with proper ARIA labels and keyboard navigation

## 📁 Project Structure

```
lifespring-health-clinic/
├── public/
│   ├── favicon.svg
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Header/
│   │   ├── Footer/
│   │   ├── Layout/
│   │   ├── Logo/
│   │   └── Home/
│   │       ├── Hero.jsx
│   │       ├── Features.jsx
│   │       ├── About.jsx
│   │       ├── Services.jsx
│   │       ├── Stats.jsx
│   │       ├── Doctors.jsx
│   │       ├── Testimonials.jsx
│   │       ├── Appointment.jsx
│   │       └── CTA.jsx
│   ├── pages/
│   │   ├── _app.jsx
│   │   ├── _document.jsx
│   │   ├── index.jsx
│   │   ├── about.jsx
│   │   ├── services.jsx
│   │   ├── doctors.jsx
│   │   └── contact.jsx
│   └── styles/
│       └── globals.css
├── package.json
├── next.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd Life-Spring
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📄 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Landing page with hero, features, services overview |
| About | `/about` | Company history, values, leadership team |
| Services | `/services` | Detailed service offerings |
| Doctors | `/doctors` | Medical team profiles |
| Contact | `/contact` | Contact form, appointment booking, FAQ |

## 🎨 Design Features

- **Color Palette**: Calming teal/green primary with warm orange accents
- **Typography**: Inter for body text, Playfair Display for headings
- **Animations**: Subtle hover effects and transitions
- **Imagery**: High-quality Unsplash images for medical/wellness theme

## 🛠️ Built With

- [Next.js](https://nextjs.org/) - React framework
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library
- [Google Fonts](https://fonts.google.com/) - Inter & Playfair Display

## 📱 Responsive Breakpoints

- Desktop: 1024px and above
- Tablet: 768px - 1023px
- Mobile: Below 768px

## 🔧 Scripts

```bash
npm run dev     # Start development server
npm run build   # Build for production
npm run start   # Start production server
npm run lint    # Run ESLint
```

## 📝 License

This project is for LifeSpring Health Clinic.

---

Made with ❤️ for better healthcare experiences

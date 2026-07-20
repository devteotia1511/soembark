# SoEmbark - Creative Innovation Company

A world-class MERN stack website for SoEmbark, positioned as a Creative Innovation Company at the intersection of creativity, technology, branding, culture, and digital transformation.

## 🎨 Design Philosophy

The website embodies:
- **Minimal & Elegant**: Apple-level simplicity with premium aesthetics
- **Confident & Premium**: Timeless design inspired by Stripe, Notion, Linear, and Framer
- **Cinematic Experience**: Every section feels intentional and memorable
- **Future-Focused**: Communicates innovation, intelligence, and creativity

## 🚀 Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library for React
- **Lucide React** - Beautiful & consistent icon toolkit

### Backend
- **Node.js** - JavaScript runtime
- **Express** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling tool

## 📁 Project Structure

```
soembark/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # React components
│   │   │   ├── Navigation.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── WhoWeAre.jsx
│   │   │   ├── Philosophy.jsx
│   │   │   ├── Capabilities.jsx
│   │   │   ├── CreativeProcess.jsx
│   │   │   ├── FeaturedWork.jsx
│   │   │   ├── Industries.jsx
│   │   │   ├── InnovationLab.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   ├── FAQs.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   ├── lib/
│   │   │   └── utils.js      # Utility functions
│   │   ├── App.jsx           # Main app component
│   │   ├── main.jsx          # Entry point
│   │   └── index.css         # Global styles
│   ├── tailwind.config.js    # Tailwind configuration
│   ├── postcss.config.js     # PostCSS configuration
│   └── package.json
├── backend/                  # Express backend application
│   ├── models/
│   │   └── Contact.js        # MongoDB models
│   ├── routes/
│   │   └── contact.js        # API routes
│   ├── server.js             # Express server
│   ├── .env                  # Environment variables
│   └── package.json
└── README.md
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

### 1. Clone the Repository
```bash
git clone <repository-url>
cd soembark
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Configure environment variables in `backend/.env`:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/soembark
```

For MongoDB Atlas, use your connection string:
```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/soembark
```

Start the backend server:
```bash
node server.js
```

The backend will run on `http://localhost:5000`

### 3. Frontend Setup

```bash
cd frontend
npm install
```

Start the frontend development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:5173`

## 🌐 API Endpoints

### Contact Form
- `POST /api/contact` - Submit contact form
  - Body: `{ name, email, company, message }`
  - Returns: `{ success, message, data }`

- `GET /api/contact` - Get all contacts (admin)
  - Returns: `{ success, data: [contacts] }`

### Health Check
- `GET /api/health` - API health status
  - Returns: `{ status, message }`

## 🎯 Features

### Sections
1. **Hero** - Powerful statement with animated gradients
2. **Who We Are** - Vision and positioning
3. **Philosophy** - Core beliefs and approach
4. **Capabilities** - Interactive service categories
5. **Creative Process** - 8-step methodology
6. **Featured Work** - Portfolio showcase
7. **Industries** - Sector expertise
8. **Innovation Lab** - Thought leadership content
9. **Testimonials** - Client feedback
10. **FAQs** - Common questions with accordion
11. **Contact** - Form and contact information
12. **Footer** - Navigation and social links

### Design Features
- **Glassmorphism** - Subtle glass effects where appropriate
- **Micro-interactions** - Hover states and transitions
- **Smooth scrolling** - Native smooth scroll behavior
- **Responsive design** - Mobile-first approach
- **Premium animations** - Framer Motion powered
- **Dark theme** - Sophisticated dark color palette

## 🎨 Customization

### Colors
Edit `frontend/tailwind.config.js` to customize the brand colors:
```javascript
colors: {
  brand: {
    black: '#0a0a0a',
    dark: '#111111',
    gray: '#1a1a1a',
    light: '#f5f5f5',
    white: '#ffffff',
    accent: '#6366f1',
  }
}
```

### Content
All text content is in the respective component files. Update component files to change:
- Hero statements
- Service descriptions
- Featured work projects
- Testimonials
- FAQs

## 🚀 Deployment

### Frontend (Vercel/Netlify)
1. Connect your repository to Vercel or Netlify
2. Set build command: `npm run build`
3. Set output directory: `frontend/dist`
4. Deploy

### Backend (Render/Railway/Heroku)
1. Connect your repository
2. Set build command: `cd backend && npm install`
3. Set start command: `cd backend && node server.js`
4. Add environment variables (MONGODB_URI)
5. Deploy

### MongoDB
- Use MongoDB Atlas for production
- Update MONGODB_URI in environment variables
- Configure IP whitelist and database access

## 📝 Development

### Adding New Components
1. Create component in `frontend/src/components/`
2. Import in `frontend/src/App.jsx`
3. Add to the component tree

### Adding New API Routes
1. Create route file in `backend/routes/`
2. Add to `backend/server.js`
3. Create corresponding model in `backend/models/` if needed

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential.

## 👥 Contact

For inquiries, reach out to hello@soembark.com

---

Built with ❤️ by SoEmbark

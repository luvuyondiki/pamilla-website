# Pamilla - Premium Recruitment & Career Services

**Transform Your Career with Global Opportunities and Professional Placement Services**

A modern, responsive website that focuses on premium recruitment services with career transformation opportunities, inspired by the best professional platforms in the industry.

## 🌟 Features

### ✨ Modern Design & UX
- **One Life Adventures-inspired design** with premium aesthetics
- **Mobile-first responsive design** optimized for all devices
- **Smooth animations** and micro-interactions using AOS library
- **Advanced search functionality** with real-time suggestions
- **Interactive tour cards** with pricing and booking integration
- **Dynamic hero section** with auto-rotating destination slideshow

### 🎯 Primary Focus: Recruitment Services
- **CV upload system** with secure file handling and AI-powered matching
- **Global job opportunities** database across 50+ countries
- **Professional resume optimization** and cover letter services
- **Visa application support** and complete documentation assistance
- **Career counseling** and interview preparation coaching
- **Real-time application tracking** and status updates
- **Relocation support** including accommodation and settling assistance

### 🌍 Secondary: Adventure Travel
- **Curated tour packages** with detailed itineraries
- **Interactive destination showcase** with high-quality images
- **Advanced booking system** with calendar integration
- **Payment processing** ready for integration
- **Travel insurance** and support services
- **Group tour management** (max 22 people)

### 🛠 Technical Excellence
- **Node.js backend** with Express server
- **File upload handling** with Multer
- **RESTful API endpoints** for all functionality
- **Real-time search** and filtering
- **Form validation** and error handling
- **Performance optimized** with lazy loading
- **SEO optimized** with meta tags and structured data

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/pamilla/website.git
   cd pamilla-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:9888`

### Production Deployment

1. **Install production dependencies**
   ```bash
   npm install --production
   ```

2. **Start the production server**
   ```bash
   npm start
   ```

## 📁 Project Structure

```
pamilla-website/
├── index.html              # Main HTML file with enhanced structure
├── styles.css              # Modern CSS with animations and responsive design
├── script.js               # Enhanced JavaScript with advanced functionality
├── server.js               # Node.js server with API endpoints
├── package.json            # Project dependencies and scripts
├── README.md               # Project documentation
├── Web images/             # High-quality travel and destination images
│   ├── Malaysia_Arch Print_12.jpg
│   ├── Sri Lanka_Arch Print_52-topaz-low resolution-4x.jpg
│   ├── IMG_5181.jpg
│   └── ... (other images)
└── uploads/                # File upload directory (created automatically)
```

## 🔧 API Endpoints

### Recruitment
- `POST /api/upload-cv` - Upload CV application
- `GET /api/applications` - Get all applications (admin)
- `PUT /api/applications/:id/status` - Update application status

### Travel
- `POST /api/book-tour` - Submit tour booking
- `GET /api/bookings` - Get all bookings (admin)
- `PUT /api/bookings/:id/status` - Update booking status

### Contact & Search
- `POST /api/contact` - Submit contact form
- `GET /api/contacts` - Get all contacts (admin)
- `GET /api/search` - Search destinations and tours
- `GET /api/analytics` - Get website analytics

## 🎨 Design Features

### Hero Section
- **Dynamic slideshow** with 8 high-quality destination images
- **Search functionality** with destination suggestions
- **Quick destination links** for popular locations
- **Statistics display** showing company achievements
- **Smooth parallax effects** and animations

### Tour Showcase
- **Interactive tour cards** with hover effects
- **Pricing display** and special offers
- **Tour duration** and group size information
- **Rating system** with star displays
- **Booking integration** with modal forms

### Destination Gallery
- **Grid layout** with responsive design
- **Hover overlays** with tour information
- **Image optimization** with lazy loading
- **Category organization** by region
- **Quick navigation** to specific destinations

### User Experience
- **Smooth scrolling** navigation
- **Loading states** for all interactions
- **Success notifications** for form submissions
- **Error handling** with user-friendly messages
- **Keyboard navigation** support
- **Accessibility features** for all users

## 📱 Mobile Optimization

- **Touch-friendly** interface elements
- **Responsive navigation** with hamburger menu
- **Optimized images** for mobile devices
- **Fast loading** with compressed assets
- **Mobile-first** design approach

## 🔒 Security Features

- **File upload validation** (PDF, DOC, DOCX only)
- **File size limits** (5MB maximum)
- **Input sanitization** for all forms
- **Error handling** without exposing sensitive data
- **Secure file storage** with unique naming

## 🚀 Performance Optimizations

- **Lazy loading** for images
- **Minified CSS and JavaScript**
- **Optimized image formats** and sizes
- **Caching strategies** for static assets
- **Compression** for faster loading
- **CDN-ready** structure

## 🌟 Key Improvements from Version 1.0

### Design Enhancements
- **Modern typography** with Inter font family
- **Advanced color scheme** with gradients
- **Professional animations** and transitions
- **Enhanced visual hierarchy** and spacing
- **Improved accessibility** and contrast

### Functionality Additions
- **Advanced search system** with suggestions
- **Interactive tour booking** with calendar
- **File upload system** for CVs
- **Real-time form validation**
- **Success/error notifications**
- **Analytics tracking** capabilities

### User Experience
- **Smooth page transitions**
- **Loading states** and feedback
- **Mobile-optimized** interactions
- **Keyboard navigation** support
- **Screen reader** compatibility

## 🎯 Target Audience

### Primary Focus
- **African professionals** seeking global career opportunities
- **Job seekers** interested in international positions
- **Young professionals** looking for career growth and advancement
- **Experienced professionals** seeking career transitions
- **Recent graduates** looking for their first international role

### Secondary Focus
- **Adventure travelers** aged 18-35
- **Travel enthusiasts** seeking authentic experiences
- **Professionals** combining work and travel opportunities

## 🌍 Destinations Featured

- **Malaysia** - Cultural diversity and modern cities
- **Sri Lanka** - Ancient temples and pristine beaches
- **Thailand** - Vibrant culture and tropical paradise
- **Philippines** - Island paradise with diverse culture
- **Vietnam** - Rich history and stunning landscapes
- **Indonesia** - Tropical beauty and cultural heritage

## 📞 Contact Information

- **Phone:** +27 11 234 5678
- **Email:** hello@pamilla.com
- **Location:** Johannesburg, South Africa
- **WhatsApp:** Available for instant messaging

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **One Life Adventures** for design inspiration
- **Inter font family** for typography
- **Font Awesome** for icons
- **AOS library** for scroll animations
- **All contributors** and supporters

---

**Transform your career with Pamilla - Where global opportunities meet professional success! 💼🌟** 
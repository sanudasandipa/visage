# Visage - Facial Recognition Employee Tracking System
#https://luxury-syrniki-e65f0d.netlify.app/ - weblink

A modern web application for managing employee tracking using facial recognition technology.

## Features

- Modern, responsive design
- Smooth animations and transitions
- Subscription-based pricing plans
- **Multi-tier login system with separate dashboards**
- Interactive UI components

## Login System

The application now features a comprehensive login selection page that provides access to three different dashboard types:

### 🔧 Site Admin Dashboard
- **Purpose**: System administration and global management
- **Features**: Manage settings, user permissions, and global configurations
- **Access**: https://visage.sltdigitallab.lk/NewUI/new/site_admin/login.html

### 📊 Client Dashboard  
- **Purpose**: Individual user analytics and reports
- **Features**: Access personal analytics, reports, and attendance data
- **Access**: https://visage.sltdigitallab.lk/NewUI/new/login.html

### 👥 Group Dashboard
- **Purpose**: Team collaboration and group management
- **Features**: Collaborate with team members and manage group activities
- **Access**: https://visage.sltdigitallab.lk/NewUI/new/groups/login.html

## Navigation

- Click the **Login** button in the main navigation to access the login selection page
- From the login selection page, the Login button changes to **Back to Home** 
- The navbar automatically adapts its styling based on the current page
- All dashboard cards include security badges and smooth animations
- Keyboard navigation is supported (Tab to navigate, Enter/Space to select)

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd visage-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open in your default browser at `http://localhost:3000`.

## Project Structure

```
visage-app/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── LoginSelection.tsx    # New login selection page
│   │   └── Subscriptions.tsx
│   ├── App.tsx
│   └── index.tsx
├── public/
│   └── assets/
└── package.json
```

## Technologies Used

- React
- TypeScript
- React Bootstrap
- Framer Motion
- React Router
- CSS3

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

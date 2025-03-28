# Mehta Polychem Website

A professional website for Mehta Polychem, showcasing a polymer trading and distribution company's comprehensive services through an interactive and modern web platform.

## Project Overview

This website serves as the digital presence for Mehta Polychem, highlighting the company's polymer products, services, and industry expertise. The platform is designed to provide a seamless user experience with responsive design and modern UI components.

## Key Features

- **Product Catalog**: Comprehensive display of polymer products with detailed information
- **Service Offerings**: Showcase of specialized services for polymer industry clients
- **Blog Section**: Industry insights and company updates
- **Interactive UI**: Modern, responsive interface with intuitive navigation
- **Contact Form**: Easy communication channel for customer inquiries
- **Location Information**: Map and details about company's presence

## Technology Stack

### Frontend
- React.js for UI components
- Tailwind CSS for styling
- Shadcn UI components
- Responsive design principles
- React Query for data fetching

### Backend
- Express.js server
- PostgreSQL database (with Drizzle ORM)
- RESTful API architecture
- Google Sheets integration for contact form submissions

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- PostgreSQL database connection

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory with the following variables:
```
DATABASE_URL=your_postgresql_connection_string
```

4. Start the development server:
```bash
npm run dev
```

The application will be available at http://localhost:5000.

## Database Management

- Run database migrations:
```bash
npm run db:push
```

## Deployment

The project is configured for deployment on Replit:

1. Build the application:
```bash
npm run build
```

2. Start the production server:
```bash
npm run start
```

## Project Structure

- `/client/src` - Frontend React application
  - `/components` - Reusable UI components
  - `/pages` - Main application pages
  - `/hooks` - Custom React hooks
  - `/lib` - Utility functions and data
- `/server` - Backend Express server
  - `/routes.ts` - API endpoint definitions
  - `/storage.ts` - Data storage interface
- `/shared` - Shared code between frontend and backend
  - `/schema.ts` - Database schema and type definitions

## License

MIT
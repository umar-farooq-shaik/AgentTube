# AgentTube Landing Page

![AgentTube Banner](https://drive.google.com/uc?id=1YtAuRh9G0bkr7Js69bYN3aHkLRDKWDVp)

AgentTube is a cutting-edge platform designed to empower YouTube content creators with AI-driven insights and tools. This repository contains the landing page for AgentTube, built with modern web technologies to provide an engaging and responsive user experience.

**Live Demo:** [https://agent-tube-swart.vercel.app/](https://agent-tube-swart.vercel.app/)

## 🚀 Features

- **Hero Section**: A visually appealing introduction to AgentTube with a call-to-action form for analyzing YouTube videos.
- **Feature Highlights**: Showcases the platform's key features, such as AI analysis, transcription, thumbnail generation, and more.
- **How It Works**: A step-by-step guide to using AgentTube, making it easy for users to get started.
- **Responsive Design**: Optimized for all devices, ensuring a seamless experience on desktops, tablets, and mobile devices.
- **Authentication**: Secure user authentication powered by [Clerk](https://clerk.dev).
- **Interactive UI**: Dynamic components like the `AgentPulse` animation and `YoutubeVideoForm` for user interaction.

## 🛠 Technologies Used

### Frameworks and Libraries
- **Next.js** – React-based framework for server-side rendering and static site generation.
- **React** – Library for building user interfaces.
- **Clerk** – Authentication and user management.
- **Lucide Icons** – Icon library for modern UI.

### Styling
- **Tailwind CSS** – Utility-first CSS framework for rapid UI development.
- **Tailwind CSS Animate** – Animation utilities for Tailwind.
- **Custom CSS** – Fine-tuned design elements.

### State Management and Utilities
- **Class Variance Authority (CVA)** – Manage class names with variants.
- **clsx** – Conditionally join class names.
- **tailwind-merge** – Merge Tailwind CSS classes.

### Development Tools
- **ESLint** – Maintain code quality with linting.
- **PostCSS** – CSS transformation and optimization.
- **Turbopack** – Next.js fast bundler for development.

## 📁 Project Structure

```
ai-agent-challenge/
├── app/                     # App directory for Next.js pages and layouts
│   ├── layout.jsx           # Root layout for the application
│   ├── page.jsx             # Landing page implementation
│   └── globals.css          # Global styles for the application
├── components/              # Reusable React components
│   ├── AgentPulse.jsx       # Animated pulse component
│   ├── AnalyzeButton.jsx    # Button for triggering video analysis
│   ├── ClientWrapper.jsx    # Wrapper for Clerk and Schematic providers
│   ├── Header.jsx           # Header component with navigation
│   ├── YoutubeVideoForm.jsx # Form for submitting YouTube video URLs
│   └── ui/                  # UI components (e.g., buttons)
├── lib/                     # Utility functions
│   └── utils.js             # Helper functions for class merging
├── public/                  # Static assets (e.g., images, fonts)
├── styles/                  # CSS styles
│   └── globals.css          # Global CSS styles
├── actions/                 # Server actions
│   └── analyseYoutubeVideo.js # Server action for analyzing YouTube videos
├── middleware.js            # Middleware for route protection
├── next.config.js           # Next.js configuration
├── package.json             # Project dependencies and scripts
└── README.md                # Project documentation
```

## 💻 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the project directory**
   ```bash
   cd ai-agent-challenge
   ```

3. **Install the dependencies**
   ```bash
   npm install
   ```

## ⚙️ Usage

### Development Server
To start the development server, run:
```bash
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000) to view the landing page.

### Production Build
To build the application for production, run:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

## 🔐 Environment Variables

Create a `.env.local` file in the root directory and add the following variables:

```env
NEXT_PUBLIC_SCHEMATIC_PUBLISHABLE_KEY=your_publishable_key
AI_SERVICE_URL=https://your-ai-service-url.com
```

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes.
4. Push to your branch (`git push origin feature-name`).
5. Open a pull request.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Clerk](https://clerk.dev)
- [Lucide Icons](https://lucide.dev)


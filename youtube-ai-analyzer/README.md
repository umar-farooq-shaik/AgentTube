# YouTube AI Analyzer

YouTube AI Analyzer is a Next.js application designed to analyze YouTube videos using artificial intelligence. The application provides a user-friendly interface for users to input video URLs and receive insightful analysis results.

## Features

- Analyze YouTube videos using AI algorithms.
- Display analysis results in a clear and organized manner.
- Responsive design for optimal viewing on various devices.

## Project Structure

```
youtube-ai-analyzer
├── public                # Static files
├── src
│   ├── components        # React components
│   │   └── VideoAnalyzer.js
│   ├── pages             # Next.js pages
│   │   ├── api
│   │   │   └── analyze.js
│   │   ├── _app.js
│   │   ├── index.js
│   │   └── results.js
│   ├── styles            # CSS styles
│   │   └── globals.css
│   └── utils             # Utility functions
│       └── apiClient.js
├── package.json          # npm configuration
├── next.config.js       # Next.js configuration
└── README.md             # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd youtube-ai-analyzer
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the development server, run:
```
npm run dev
```
Open your browser and navigate to `http://localhost:3000` to access the application.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
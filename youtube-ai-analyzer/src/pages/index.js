import React, { useState } from 'react';
import VideoAnalyzer from '../components/VideoAnalyzer';

const Home = () => {
    const [videoUrl, setVideoUrl] = useState('');
    const [analysisResult, setAnalysisResult] = useState(null);

    const handleAnalyze = async () => {
        const result = await VideoAnalyzer.analyzeVideo(videoUrl);
        setAnalysisResult(result);
    };

    return (
        <div>
            <h1>YouTube Video Analyzer</h1>
            <input
                type="text"
                placeholder="Enter YouTube Video URL"
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
            />
            <button onClick={handleAnalyze}>Analyze Video</button>
            {analysisResult && (
                <div>
                    <h2>Analysis Result:</h2>
                    <pre>{JSON.stringify(analysisResult, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default Home;
import React from 'react';

const Results = ({ analysisResults }) => {
    return (
        <div>
            <h1>Video Analysis Results</h1>
            {analysisResults.length > 0 ? (
                <ul>
                    {analysisResults.map((result, index) => (
                        <li key={index}>
                            <h2>{result.title}</h2>
                            <p>{result.description}</p>
                            <p>Score: {result.score}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No results available.</p>
            )}
        </div>
    );
};

export default Results;
export const fetchVideoData = async (videoId) => {
    const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=YOUR_API_KEY&part=snippet,contentDetails,statistics`);
    if (!response.ok) {
        throw new Error('Failed to fetch video data');
    }
    return await response.json();
};

export const postAnalysisResults = async (results) => {
    const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(results),
    });
    if (!response.ok) {
        throw new Error('Failed to post analysis results');
    }
    return await response.json();
};
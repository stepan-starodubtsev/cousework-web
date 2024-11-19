
const API_URL = 'http://206.189.52.50:5001/api/news';

export const fetchNews = async () => {
    const config = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    };

    try {
        const response = await fetch(API_URL, config);
        if (!response.ok) {
            throw new Error(`HTTP status ${response.status}: ${await response.text()}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
};
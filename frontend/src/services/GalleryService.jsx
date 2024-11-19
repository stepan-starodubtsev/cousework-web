import { checkTokenAndRedirect } from "./AuthService";

// GalleryService.jsx
const API_URL = `http://localhost:5001/api/photos`;

export const fetchImages = async () => {
    const token = localStorage.getItem('jwtToken');
    if (token) {
        const config = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        };

        try {
            const response = await fetch(API_URL, config);
            await checkTokenAndRedirect(response);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Fetch error:', error);
            throw error;
        }
    } else {
        throw new Error('No token found');
    }
};

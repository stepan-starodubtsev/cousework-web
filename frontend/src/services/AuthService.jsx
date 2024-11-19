import { jwtDecode } from 'jwt-decode';


export const isAuth = () => {
    return !!localStorage.getItem('jwtToken');
};

// Функция для логина пользователя
export const loginUser = async (data) => {
    const json_data = JSON.stringify(data);
    const config = {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: json_data
    };
    
    try {
        const response = await fetch(`http://localhost:5001/api/auth/login`, config);
        
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorText}`);
        }

        const credentials = await response.json();
        if (credentials.token) {
            localStorage.setItem('jwtToken', credentials.token);
        }
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
};

export const checkTokenAndRedirect = async (response) => {
    if (response.status === 401) {
        localStorage.removeItem('jwtToken');
        window.location.href = '/login';
        throw new Error('Unauthorized');
    }
};

export const getID = () => {
    const token = localStorage.getItem('jwtToken');
    if (token) {
        const decoded = jwtDecode(token);
        return decoded.id;
    }
};

export const getEmail = async () => {
    const token = localStorage.getItem('jwtToken');
    if (token != null) {
        const decoded = jwtDecode(token);
        const user = decoded.user;
        return user.email;
    } else {
        throw new Error('No token found');
    }
};

// Новая функция для проверки роли
export const getRole = () => {
    const token = localStorage.getItem('jwtToken');
    if (token) {
        const decoded = jwtDecode(token);
        console.log(decoded);
        console.log(decoded.user.role);
        return decoded.user.role;
    }
    return null;
};

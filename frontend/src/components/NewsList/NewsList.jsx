import React, { useState, useEffect } from 'react';
import { Alert } from 'react-bootstrap';
import { fetchNews } from '../../services/NewsService'; // Убедитесь, что путь правильный
import './NewsList.css';

export default function NewsList() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const getNews = async () => {
            try {
                const data = await fetchNews();
                setNews(data);
            } catch (error) {
                console.error('Error fetching news:', error);
                setNews([]); // Устанавливает пустой массив новостей в случае ошибки
            }
        };

        getNews();
    }, []);

    if (news.length === 0) {
        return (
            <div className="news-container">
                <Alert variant="warning" className="news-alert">
                    Помилка! Немає новин.
                </Alert>
            </div>
        );
    }

    return (
        <div className="news-container">
            {news.map((item, index) => (
                <div key={index} className="news-card">
                    <img src={`http://206.189.52.50:5001/photos/news/${item.photo}`} alt="News" className="news-image"/>
                    <div className="news-content">
                        <h3 className="news-title">{item.title}</h3>
                        <p className="news-text">{item.text}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

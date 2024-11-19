import React, { useState, useEffect } from 'react';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import './ControlledCarousel.css';

export default function ControlledCarousel() {
    const images = [image1, image2, image3];
    const captions = [
        {
            title: 'Розташування',
            text: 'Зручне розташування в центрі міста. До бібліотеки можна дістатись з будь якого кутка міста менш ніж 30 хвилин',
        },
        {
            title: 'Матеріальна база',
            text: 'Наявність великої кіькості книжок на будь який смак',
        },
        {
            title: 'Атмосфера',
            text: 'Приємний вайб для зручного читання в затишній атмосфері футуристичнох бібліотеки',
        }
    ];

    const [index, setIndex] = useState(0);

    const handlePrev = () => {
        setIndex(index === 0 ? images.length - 1 : index - 1);
    };

    const handleNext = () => {
        setIndex(index === images.length - 1 ? 0 : index + 1);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 3000);
        return () => clearInterval(interval);
    }, [index]);

    return (
        <div className="carousel-container">
            <div className="carousel">
                <img src={images[index]} alt={captions[index].title} className="carousel-image" />
                <div className="carousel-caption">
                    <h3>{captions[index].title}</h3>
                    <p>{captions[index].text}</p>
                </div>
                <button className="carousel-control prev" onClick={handlePrev}>&#10094;</button>
                <button className="carousel-control next" onClick={handleNext}>&#10095;</button>
            </div>
            <div className="carousel-indicators">
                {images.map((_, i) => (
                    <span
                        key={i}
                        className={`indicator ${i === index ? 'active' : ''}`}
                        onClick={() => setIndex(i)}
                    ></span>
                ))}
            </div>
        </div>
    );
}

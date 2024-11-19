import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Modal, Button, Alert } from 'react-bootstrap';

export default function GalleryList() {
    const [images, setImages] = useState([]);
    const [show, setShow] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    useEffect(() => {
        const getImages = async () => {
            try {
                const baseURL = `http://206.189.52.50:5001/photos/gallery/img`;
                const imageCount = 6;
                const generatedImages = Array.from({ length: imageCount }, (_, index) => {
                    if (index % 1 === 0) {
                      return {
                        url: `${baseURL}${index + 1}.png`
                      };
                    }
                    return null;
                  }).filter(Boolean);
                setImages(generatedImages);
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };

        getImages();
    }, []);

    const handleShow = (image) => {
        setSelectedImage(image);
        setShow(true);
    };

    const handleClose = () => {
        setShow(false);
    };

    if (images.length === 0) {
        return (
            <Container className="mt-3">
                <Alert variant="warning" className="text-center">
                    Помилка! Жодної фотографії не додано!
                </Alert>
            </Container>
        );
    }

    return (
        <Container className="mt-3 gallery-container">
            <Row>
                {images.map((image, index) => (
                    <Col key={index} md={4} className="mb-4">
                        <Card className="gallery-card">
                            <Card.Img 
                                variant="top" 
                                src={image.url} 
                                alt="Image"
                                onClick={() => handleShow(image.url)}
                                className="gallery-image"
                            />
                        </Card>
                    </Col>
                ))}
            </Row>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Перегляд зображення</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={selectedImage} alt="Selected" style={{ width: '100%', borderRadius: '10px' }}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Закрити
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}

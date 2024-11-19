const express = require('express');
const router = express.Router();
const {
    getNewsPhoto,
    getBooksPhoto,
    getVisitorsPhoto,
    getGalleryPhoto,
    uploadNewsPhoto,
    uploadBooksPhoto,
    uploadVisitorsPhoto,
    uploadGalleryPhoto,
    uploadPhoto
} = require('../controllers/photoController');

router.get('/news/:filename', getNewsPhoto);
router.get('/books/:filename', getBooksPhoto);
router.get('/visitors/:filename', getVisitorsPhoto);
router.get('/gallery/:filename', getGalleryPhoto);
router.post('/news', uploadNewsPhoto, uploadPhoto);
router.post('/books', uploadBooksPhoto, uploadPhoto);
router.post('/visitors', uploadVisitorsPhoto, uploadPhoto);
router.post('/gallery', uploadGalleryPhoto, uploadPhoto);

module.exports = router;

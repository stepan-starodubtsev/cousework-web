const multer = require('multer');
const path = require('path');

const newsStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '..', 'storage', 'news'));
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const booksStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '..', 'storage', 'books'));
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const visitorsStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '..', 'storage', 'visitors'));
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const galleryStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '..', 'storage', 'gallery'));
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const uploadNewsPhoto = multer({ storage: newsStorage });
const uploadBooksPhoto = multer({ storage: booksStorage });
const uploadVisitorsPhoto = multer({ storage: visitorsStorage });
const uploadGalleryPhoto = multer({ storage: galleryStorage });

exports.uploadNewsPhoto = uploadNewsPhoto.single('image');
exports.uploadBooksPhoto = uploadBooksPhoto.single('image');
exports.uploadVisitorsPhoto = uploadVisitorsPhoto.single('image');
exports.uploadGalleryPhoto = uploadGalleryPhoto.single('image');

exports.getNewsPhoto = (req, res) => {
    const filename = req.params.filename;
    const photoPath = path.join(__dirname, '..', 'storage', 'news', filename);
    res.sendFile(photoPath);
};

exports.getBooksPhoto = (req, res) => {
    const filename = req.params.filename;
    const photoPath = path.join(__dirname, '..', 'storage', 'books', filename);
    res.sendFile(photoPath);
};

exports.getVisitorsPhoto = (req, res) => {
    const filename = req.params.filename;
    const photoPath = path.join(__dirname, '..', 'storage', 'visitors', filename);
    res.sendFile(photoPath);
};

exports.getGalleryPhoto = (req, res) => {
    const filename = req.params.filename;
    const photoPath = path.join(__dirname, '..', 'storage', 'gallery', filename);
    res.sendFile(photoPath);
};

exports.uploadPhoto = (req, res) => {
    res.json({ message: 'Photo uploaded successfully', filename: req.file.filename });
};
const News = require('../models/News');
const User = require("../models/User");

exports.getAllNews = async (req, res) => {
    try {
        const news = await News.findAll();
        res.json(news);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getNews = async (req, res) => {
    const {id} = req.params;
    try {
        const news = await News.findByPk(id);
        res.json(news);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.createNews = async (req, res) => {
    const {photo, title, text} = req.body;

    try {
        const news = await News.create({photo, title, text});
        res.json(news);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.updateNews = async (req, res) => {
    const {id} = req.params;
    const {photo, title, text} = req.body;

    try {
        const news = await News.findByPk(id);
        if (!news) {
            return res.status(404).json({message: 'News not found'});
        }

        news.photo = photo;
        news.title = title;
        news.text = text;

        await news.save();
        res.json(news);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.deleteNews = async (req, res) => {
    const {id} = req.params;

    try {
        const news = await News.findByPk(id);
        if (!news) {
            return res.status(404).json({message: 'News not found'});
        }

        await news.destroy();
        res.json({message: 'News deleted'});
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

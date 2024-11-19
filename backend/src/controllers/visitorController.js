const Visitor = require('../models/Visitor');

exports.getAllVisitors = async (req, res) => {
    try {
        const visitors = await Visitor.findAll();
        res.json(visitors);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getVisitor = async (req, res) => {
    const { id } = req.params;
    try {
        const visitor = await Visitor.findByPk(id);
        if (!visitor) {
            return res.status(404).json({ message: 'Visitor not found' });
        }
        res.json(visitor);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.createVisitor = async (req, res) => {
    const { surname, name, lastName, age, email } = req.body;

    try {
        const visitor = await Visitor.create({ surname, name, lastName, age, email });
        res.json(visitor);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.updateVisitor = async (req, res) => {
    const { id } = req.params;
    const { surname, name, lastName, age, email } = req.body;

    try {
        const visitor = await Visitor.findByPk(id);
        if (!visitor) {
            return res.status(404).json({ message: 'Visitor not found' });
        }

        visitor.surname = surname;
        visitor.name = name;
        visitor.lastName = lastName;
        visitor.age = age;
        visitor.email = email;

        await visitor.save();
        res.json(visitor);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.deleteVisitor = async (req, res) => {
    const { id } = req.params;

    try {        const visitor = await Visitor.findByPk(id);
        if (!visitor) {
            return res.status(404).json({ message: 'Visitor not found' });
        }

        await visitor.destroy();
        res.json({ message: 'Visitor deleted' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

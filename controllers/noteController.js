const User = require('../models/User');
const Note = require('../models/Note');

const addNote = async (req, res) => {
    try {
        const { free_note } = req.body;

        if(!free_note) {
            return res
            .status(400)
            .json({ message: "Note is required." });
        }

        const user = await User.findOne({ email: req.user}).exec();
        if (!user) {
            return res
            .status(404)
            .json({ message: 'User not found.' });
        }

        const note = await Note.create({
            user: user._id,
            free_note: free_note
        });

        return res.status(201).json({
            message: "Note added successfully.",
            note: note
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "An error occurred during registration." });
    }
}

module.exports = addNote;
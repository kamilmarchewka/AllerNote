const User = require('../models/User');
const Note = require('../models/Note');

const addNote = async (req, res) => {
    try {
        const { free_note, well_being, headache, runny_nose, itchy_nose, itchy_eyes, cough } = req.body;

        if (!free_note) {
            return res.status(400).json({ message: "Note content is required." });
        }

        const userId = req.user; 

        const user = await User.findById(userId).exec();
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }

        const note = await Note.create({
            noteUser: user._id, 
            free_note: free_note,
            well_being: well_being || 0,
            headache: headache || 0,
            runny_nose: runny_nose || 0,
            itchy_nose: itchy_nose || 0,
            itchy_eyes: itchy_eyes || 0,
            cough: cough || 0
        });

        user.userNotes.push(note._id);
        await user.save();

        return res.status(201).json({
            message: "Note added successfully.",
            note: note
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "An error occurred during note creation." });
    }
};

module.exports = { addNote };
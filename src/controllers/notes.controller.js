const Note = require('../models/Note')


const notesController = {};

notesController.getNotes = async (req, res) => {

    const notes = await Note.find();
    res.json(notes);
};

notesController.getNote = async (req, res) => {
    const note = await Note.findById(req.params.id);
    res.json(note);
};

notesController.createNote = async (req, res) => {

    const { title, content, date, author } = req.body;
    const newNote = new Note({ //creamos la nota
        title: title,
        content: content,
        date: date,
        author: author
    })
    // console.log(newNote);
    await newNote.save(); //aqui guardamos la nota en mongodb *nota: esto tmbn devuelve la nota guardada
    res.json({message: 'note save'})
};

notesController.updateNote = async (req, res) => {
    const {title, content, author} = req.body;

    await Note.findOneAndUpdate({_id: req.params.id}, {
        title, //*nota: se puede poner asi tambien o tambien como esta en create 'title: title'
        author,
        content
    })
    res.json({message: 'note update'})
};

notesController.deleteNote = async (req, res) => {
    await Note.findOneAndDelete({_id: req.params.id});
    res.json({message: 'note delete'})
};

module.exports = notesController;
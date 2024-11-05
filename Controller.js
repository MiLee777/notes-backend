const Model = require('./Model');

module.exports.getNote = async (req, res) => {
  try {
    const note = await Model.find();
    res.send(note);
  } catch (error) {
    res.status(500).send({ error: 'Error fetching notes', details: error.message });
  }
}

module.exports.addNotes = async (req, res) => {
  try {
    const { title } = req.body;
    const data = await Model.create({ title });
    console.log('Note added');
    res.send(data);
  } catch (error) {
    res.status(500).send({ error: 'Error adding note', details: error.message });
  }
}

module.exports.deleteNote = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedNote = await Model.findByIdAndDelete(id);
    if (!deletedNote) {
      return res.status(404).send({ error: 'Note not found' });
    }
    res.send({ message: 'Note deleted' });
  } catch (error) {
    res.status(500).send({ error: 'Error deleting note', details: error.message });
  }
};


module.exports.updateNote = async (req, res) => {
  try {
    const { _id, title } = req.body;
    const updatedNote = await Model.findByIdAndUpdate(_id, { title }, { new: true });
    if (!updatedNote) {
      return res.status(404).send({ error: 'Note not found' });
    }
    res.send({ message: 'Note updated', data: updatedNote });
  } catch (error) {
    res.status(500).send({ error: 'Error updating note', details: error.message });
  }
}
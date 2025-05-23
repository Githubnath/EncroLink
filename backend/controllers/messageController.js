const Message = require('../models/Message');

exports.sendMessage = async (req, res) => {
  try {
    const { to, encryptedContent } = req.body;
    const message = new Message({ to, encryptedContent, from: req.user.id });
    await message.save();

    res.status(201).json({ message: 'Message sent securely.' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMessages = async (req, res) => {
  try {
    const messages = await Message.find({ to: req.user.id });
    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


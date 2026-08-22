const ChatMessage = require("../models/ChatMessages.js");
const User = require("../models/UserModel.js");

async function getAllmessages(req, res) {
  try {
    const { roomId } = req.query;
    const filter = roomId ? { roomId } : {};
    const messages = await ChatMessage.find(filter).limit(100).sort({ createdAt: 1 });
    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function addmessage(req, res) {
  const { sender, message, timestamp, roomId } = req.body;
  if (!sender || !message) {
    return res.status(400).json({ error: "Sender and message are required" });
  }

  try {
    const newMessage = new ChatMessage({
      sender,
      content: message,
      roomId,
      timestamp: timestamp || new Date(),
    });
    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = {
  getAllmessages,
  addmessage,
};

/*const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create express app
const app = express();

// Configure middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB database
mongoose.connect('mongodb://localhost/my_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Define schema for messages
const messageSchema = new mongoose.Schema({
  sender: String,
  recipient: String,
  message: String,
  timestamp: { type: Date, default: Date.now }
});

// Define model for messages
const Message = mongoose.model('Message', messageSchema);

// Create endpoint to send message
app.post('/messages', async (req, res) => {
  const { sender, recipient, message } = req.body;
  const newMessage = new Message({ sender, recipient, message });
  try {
    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Create endpoint to get all messages for a recipient
app.get('/messages/:recipient', async (req, res) => {
  const recipient = req.params.recipient;
  try {
    const messages = await Message.find({ recipient });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start server
app.listen(8000, () => console.log('Server started'));*/
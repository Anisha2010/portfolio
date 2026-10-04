import express from 'express';
import ContactMessage from '../models/ContactMessage.js';

const router = express.Router();

const inMemoryMessages = [];

router.post('/', async (req, res) => {
  const { name, email, subject, message } = req.body || {};

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  const trimmedName = String(name).trim();
  const trimmedEmail = String(email).trim();
  const trimmedSubject = String(subject).trim();
  const trimmedMessage = String(message).trim();

  if (trimmedName.length < 2) {
    return res.status(400).json({ message: 'Name is too short.' });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(trimmedEmail)) {
    return res.status(400).json({ message: 'Provide a valid email address.' });
  }

  if (trimmedMessage.length < 20) {
    return res.status(400).json({ message: 'Message must be at least 20 characters long.' });
  }

  try {
    const payload = {
      name: trimmedName,
      email: trimmedEmail,
      subject: trimmedSubject,
      message: trimmedMessage,
    };

    let savedMessage;

    if (global.__mongoConnected) {
      savedMessage = await ContactMessage.create(payload);
    } else {
      savedMessage = { ...payload, status: 'new', createdAt: new Date() };
      inMemoryMessages.push(savedMessage);
    }

    return res.status(201).json({
      message: 'Message saved successfully.',
      data: savedMessage,
    });
  } catch (error) {
    console.error('Contact submission failed:', error);
    return res.status(500).json({ message: 'Unable to send message. Please try again.' });
  }
});

export default router;

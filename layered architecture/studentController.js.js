// controllers/studentController.js
const studentService = require('../services/studentService');

exports.getStudents = async (req, res) => {
  try {
    const data = await studentService.getStudents();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
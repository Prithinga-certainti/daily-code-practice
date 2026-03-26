const studentRepo = require('../repositories/studentRepository');

exports.getStudents = async () => {
  return await studentRepo.getAllStudents();
};
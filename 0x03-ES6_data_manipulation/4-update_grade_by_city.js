export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  return listStudents
    .filter((student) => student.location === city)
    .map((student) => {
      const newGrade = newGrades.filter((grade) => grade.studentId === student.id)[0];
      return { ...student, grade: newGrade ? newGrade.grade : 'N/A' };
    });
}

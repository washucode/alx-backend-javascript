export default function getListStudentIds(a1) {
  if (!Array.isArray(a1)) return [];
  const listStudentIds = a1.map((student) => student.id);
  return listStudentIds;
}

export default function createReportObject(employeesList) {
  const report = {
    allEmployees: { ...employeesList },
    /* eslint-disable  */
    getNumberOfDepartments: (employeesList) => Object.keys(employeesList).length,

  }

  return report;
}

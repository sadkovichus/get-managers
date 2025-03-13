function getManagers(employees, id) {
  const managers = [];
  let currentEmployeeId = id;

  while (true) {
    const employee = employees.find(emp => emp.employeeId === currentEmployeeId);

    if (!employee) break;
    if (employee.managerId !== currentEmployeeId || managers.length === 0) managers.push(employee.managerId);
    if (employee.managerId === employee.employeeId) break;

    currentEmployeeId = employee.managerId;
  }

  return managers;
}
const employees = [
  { employeeId: 11, name: "John", managerId: 11 },
  { employeeId: 50, name: "Todd", managerId: 73 },
  { employeeId: 150, name: "Alex", managerId: 200 },
  { employeeId: 73, name: "Sara", managerId: 11 },
  { employeeId: 200, name: "Alex", managerId: 50 },
  { employeeId: 100, name: "Alex", managerId: 150 },
];

console.log(getManagers(employees, 200)); // [50, 73, 11]
console.log(getManagers(employees, 11));  // [11]
console.log(getManagers(employees, 150)); // []
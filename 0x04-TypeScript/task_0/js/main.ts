interface Student{
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 24,
    location: 'San Francisco'
}

const student2: Student = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 24,
    location: 'San Francisco'
}

const studentsList: Array<Student> = [student1, student2];

const table: HTMLTableElement = document.createElement('table');
const body: HTMLBodyElement = document.querySelector('body');
const thead: HTMLTableSectionElement = document.createElement('thead');
const tbody: HTMLTableSectionElement = document.createElement('tbody');
const th1: HTMLTableCellElement = document.createElement('th');
const th2: HTMLTableCellElement = document.createElement('th');


th1.innerHTML = 'First Name';
th2.innerHTML = 'Location';

thead.append(th1);
thead.append(th2);

table.append(thead);


studentsList.forEach((student: Student) => {
    const tr: HTMLTableRowElement = document.createElement('tr');
    const td1: HTMLTableCellElement = document.createElement('td');
    const td2: HTMLTableCellElement = document.createElement('td');

    td1.innerHTML = student.firstName;
    td2.innerHTML = student.location;

    tr.append(td1);
    tr.append(td2);

    tbody.append(tr);
});

table.append(tbody);
body.append(table);
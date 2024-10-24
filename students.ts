interface Student {
    id: number;
    name: string;
    phoneNumber: string;
    group: string;
    grade: number;
}

let students: Student[] = [];

function addStudent(student: Student): void {
    students.push(student);
    console.log("Student added:", student);
}

function showStudent(student: Student): void {
    console.log("Students:", student);
}

function editStudent(id: number, updatedStudent: Partial<Student>): void {
    students = students.map(student => student.id === id ? { ...student, ...updatedStudent } : student);
    const editedStudent = students.filter(student => student.id === id);
    console.log("Student edited:", editedStudent);
}

function deleteStudent(id: number): void {
    const removedStudent = students.filter(student => student.id === id)[0];
    students = students.filter(student => student.id !== id);
    console.log("Student deleted:", removedStudent);
}

function delay(callback: () => void, ms: number): void {
    setTimeout(callback, ms);
}

addStudent({ id: 1, name: "Baiel", phoneNumber: "996554214214", group: "IT-122", grade: 90 });
delay(() => {
    addStudent({ id: 2, name: "Saima", phoneNumber: "hz kakoi u nego nomer", group: "IT-122", grade: 100 });
        delay(() => {
            editStudent(1, { grade: 100 });
            delay(() => {
                deleteStudent(1);
                delay(() => {
                    students.forEach(showStudent);
                }, 2000);
            }, 2000);
        }, 2000);
    }, 2000);

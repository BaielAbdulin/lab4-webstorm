interface User {
    id: number;
    name: string;
    email: string;
    phoneNumber: string;
    gender: string;
    idNumber: string;
    text: string;
    option: boolean;
    date: string;
    agree: boolean;
}

let users: User[] = [];

let formData: Partial<User> = {
    name: null,
    email: null,
    phoneNumber: null,
    idNumber: null,
    gender: null,
    text: null,
    option: null,
    date: null,
    agree: null,
};

const updateFormData = (key: keyof User, value: any): void => {
    // @ts-ignore // P.S - Если так нельзя, можете пожалуйста сообщить. Других методов не нашел.
    formData[key] = value;
    console.log(formData);
};

updateFormData('name', 'John Doe');
updateFormData('email', 'john.doe@example.com');
updateFormData('phoneNumber', '9876543210');
updateFormData('gender', 'Male');
updateFormData('idNumber', '123456789');
updateFormData('text', 'Some text');
updateFormData('option', 'Option1');
updateFormData('date', '2024-01-01');
updateFormData('agree', true);


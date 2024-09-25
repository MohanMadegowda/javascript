//solve the questions

const users = [
    { firstName: "John", lastName: "Doe" },
    { firstName: "Jane", lastName: "Smith" },
    { firstName: "Emily", lastName: "Jones" }
];
const result = users.map(users => users.firstName + " " +users.lastName);
console.log(result);





const products = [
    { name: "Laptop", price: 1000, onSale: false },
    { name: "Phone", price: 500, onSale: true },
    { name: "Tablet", price: 300, onSale: true }
];
const onsaleProducts = products.filter(products => products.onSale);
console.log(onsaleProducts);




const orders = [
    { amount: 50 },
    { amount: 75 },
    { amount: 100 }
];
const totalAmount = orders.reduce((accumulator, currentValue) => {
return accumulator + currentValue.amount;
}, 0);
console.log(totalAmount);




// Expected output: ["Alice", "Charlie"]
const students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 65 },
    { name: "Charlie", grade: 78 },
    { name: "David", grade: 50 }
];
const output =students.filter(students => students.grade <70).map(students => students.name);
console.log(output);




// Expected output: { names: ["Alice", "Charlie"], totalSalary: 135000 }
const employees = [
    { name: "Alice", salary: 60000 },
    { name: "Bob", salary: 45000 },
    { name: "Charlie", salary: 75000 },
    { name: "David", salary: 30000 }
];
const filterEmployees = employees.filter(employees =>employees.salary > 50000);

const names = filterEmployees.map(filteremployees => filteremployees.name);

const totalSalary = filterEmployees.reduce((acc, curr) => {
    return acc+ curr.salary;
}, 0);
const results = {names, totalSalary};
console.log(results);
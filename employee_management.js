// Create an Employee Class

class Employee{
    constructor(name, salary, position, department){
this.name = name;
this.salary = salary;
this.position = position;
this.department = department 
    }
getDetails (){ //gives the information regrding employee
    console.log(`${this.name} employee has $${this.salary} salary, and works as a(n) ${this.position} in the ${this.department} department`)
//example output: Olivia employee has $50000 salary, and works as a(n) Developer in the Engineering department
}
}
//commit 1 is here 
//Create a Department Class
class Department{
    constructor(name){
this.name = name;
this.employees = []; } //empty array for employees 

addEmployee(employee){
    this.employees.push(employee); //adds employee into the empty employees array
}
getDepartmentSalary(){
    return this.employees.reduce((total, employee)=> {return total + employee.salary}, 0)
} // calculates department salary 
}
//commit 2 is here

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
// Create a Manager Class that Inherits from Employee
class Manager extends Employee {
constructor(name, salary, position, department, bonus) {
            
super(name, salary, position, department);
 this.bonus = bonus; }
    
    // Override getDetails to include the bonus
getDetails() {
    return `${this.name} manager has $${this.salary} salary, works as a(n) ${this.position} in the ${this.department} department, and has a bonus of $${this.bonus}.`;
    }
    };
// commit 3: Create Manager class with inheritance from Employee
    // Handle Bonuses for Managers
    // decided to create a funcion
function calculateTotalSalaryWithBonus(department) {
return department.employees.reduce((totalSalary, employee) => {
        if (employee instanceof Manager) { // instanceof defines manager, so that it applies to managers only
        totalSalary += employee.salary + employee.bonus;
} else {// if not manager just return regular salary in the sum
totalSalary += employee.salary;}
            return totalSalary;
 }, 0);}
 // commit 4: Handle bonuses in the department salary calculation
    // Create and Manage Departments and Employees
// create new company structure with at least 2 departments:
        
const engineering = new Department ("Engineering");
const marketing = new Department ("Marketing"); //creates 2 departments 
        
// create empkoyees 
const alice = new Employee("Alice", 80000, "Developer", "Engineering");
const bob = new Employee("Bob", 75000, "Designer", "Marketing"); //creates employees 
const charlie = new Manager("Charlie", 120000, "Engineering Manager", "Engineering", 20000);
const diana = new Manager("Diana", 130000, "Marketing Manager", "Marketing", 25000); //creates managers with bonuses 
        
// add to departments 
engineering.addEmployee(alice);
engineering.addEmployee(charlie);
marketing.addEmployee(bob);
marketing.addEmployee(diana); //adds employees to departments
        
// calculate total salary 
        console.log(`Total salary in the Engineering department: $${engineering.getDepartmentSalary()}`);
        console.log(`Total salary in the Marketing department: $${marketing.getDepartmentSalary()}`);
        
// calculate total salary when there are bonuses using the standalone function
        console.log(`Total salary with bonuses for Managers in the Engineering department: $${calculateTotalSalaryWithBonus(engineering)}`);
        console.log(`Total salary with bonuses for Managers in the Marketing department: $${calculateTotalSalaryWithBonus(marketing)}`);
        
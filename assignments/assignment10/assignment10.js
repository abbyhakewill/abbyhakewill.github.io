//Problem 1: Create JSON for each employee
let employees = [

    {
      name: "Sam",
      department: "Tech",
      designation: "Manager",
      salary: 40000,
      raiseEligible: true,
    },
    {
      name: "Mary",
      department: "Finance",
      designation: "Trainee",
      salary: 18500,
      raiseEligible: true,
    },
    {
      name: "Bill",
      department: "HR",
      designation: "Executive",
      salary: 21200,
      raiseEligible: false,
    }
  ];

console.log('Problem 1', employees)

//Problem 2: Create JSON for the company
const company = {
    companyName: "Tech Stars",
    website: "www.techstars.site",
    employees: employees,
};
    
console.log('Problem 2', company);
    
//Problem 3: A new employee has joined the company. Update the JSON from problems 1 and 2 to reflect the addition
function addEmployee (obj, employeeName, dept, desig, sal, raiseEligable){
    let newEmployee = {
      name: employeeName,
      department: dept,
      designation: desig,
      salary: sal,
      raiseEligible: raiseEligable
    };
  
    obj.push(newEmployee);
}
  addEmployee(employees, 'Anna', 'Tech', 'Executive', 25600, false);

console.log('Problem 3', employees);

//Problem 4: Given the JSON for the company, calculate the total salary for all company employees
let totSalary = 0;
for (let i = 0; i < employees.length; i++) {
  totSalary += employees[i].salary;
}

console.log('Problem 4', totSalary);

//Problem 5: If an employee is raise eligible, increase their salary by 10%. Given the JSON of the company and its 
//employees, write a function to update the salary for each employee who is raised eligible, then set their eligibility to false
function doRaises(){
    for (let i = 0; i < employees.length; i++){
      if (employees[i].raiseEligable){
        employees[i].salary *= 1.1;
        employees[i].raiseEligable = false;
      }
    }
}
    doRaises();

console.log('Problem 5', employees);

//Problem 6: Use the array to update the company JSON. For each employee, add another property called 'wfh' and set it to true of false
const homeWorkers = ['Anna', 'Sam'];
function setWFH(){
  for(let i=0; i<employees.length; i++){
    employees[i].wfh = homeWorkers.includes(employees[i].name);

  }
}
setWFH();

console.log('Problem 6', employees);
/*
console.log("Welcome to The Employee Wage Computation");
const IS_ABSENT = 0;
let empCheck = Math.floor(Math.random() * 10) % 2;
if  (empCheck == IS_ABSENT)
    console.log("Employee is ABSENT");
else
    console.log("Employee Is PRESENT");
    */

    //UC-3

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOUR = 4;
const FULL_TIME_HOUR = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS=2;

let empHrs = 0; empHrs = 4 
let empCheck = Math.floor(Math.random() * 10) % 3;
// fun
function getWorkingHours(empCheck){
    switch (empCheck){
        case IS_PART_TIME:
            return PART_TIME_HOUR;            
        case IS_FULL_TIME:
            return FULL_TIME_HOUR;            
        default:
            empHrs = 0;
    }
}
let empWage = empHrs * WAGE_PER_HOUR;
empHrs = getWorkingHours(empWage);
console.log("Emp Wage: " + empWage);
/*
console.log("Welcome to The Employee Wage Computation");
const IS_ABSENT = 0;
let empCheck = Math.floor(Math.random() * 10) % 2;
if  (empCheck == IS_ABSENT)
    console.log("Employee is ABSENT");
else
    console.log("Employee Is PRESENT");
    */

//UC-6

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOUR = 4;
const FULL_TIME_HOUR = 8;
const WAGE_PER_HOUR = 20;

const NUM_OF_WORKING_DAYS=10;
const MAX_HRS_IN_MONTH = 100;
let empHrs = 0; 
let totalEmpHrs = 0;
let totalWorkingDays = 0;

let empDailyWageArr = new Array();

function calcDailyWage(empHrs){
    return empHrs * WAGE_PER_HOUR;
}
while ( totalEmpHrs < MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
}   

// fun
function getWorkingHours(empCheck){
    switch (empCheck){
        case IS_PART_TIME:
            return PART_TIME_HOUR;            
        case IS_FULL_TIME:
            return FULL_TIME_HOUR;            
        default:
            return 0;
    }
}
//Computation
let empWage = calcDailyWage(totalEmpHrs);
console.log(" Total Days: " + totalWorkingDays + " Total Hrs: " + totalEmpHrs + " Emp Wage: " + empWage);

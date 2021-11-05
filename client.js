$(document).ready(button);

function button(){
  $('#run').on('click', employeeBonusArray(employees));
};// end button

const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];
console.log(employees[4].annualSalary.length);

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

// Create loop over employees array and log result
for (let employee of employees) {
  console.log('Should get all employees', employee);
};

// Create function with one object parameter
// function getBonus(employee){
//   // return new object with listed properties

//   let singleEmployee = ratingToBonus(employee);

//   return singleEmployee;
// };// End getBonus

// Create math function to determine rating to bonus percentage
function ratingToBonus(employeeObject){
  parseInt(employees.employeeNumber);
  parseInt(employees.annualSalary);
  let bonusPercentage = 0;
  let bonusCalculation = 0;
  let singleEmployee = {name: employeeObject.name};
  if(employeeObject.reviewRating <= 2){
    singleEmployee.bonusPercentage = '0%';
    bonusPercentage = 0;
    // singleEmployee.totalCompensation = employeeObject.annualSalary;
    alert('No bonus for you!')

  } else if(employeeObject.reviewRating === 3){
      singleEmployee.bonusPercentage = '4%';
      //4% base annual income as bonus
      bonusPercentage = .04;
      //bonusCalculation = employeeObject.annualSalary*.04;
      //singleEmployee.totalCompensation = employeeObject.annualSalary + bonusCalculation;

  } else if(employeeObject.reviewRating === 4){
      singleEmployee.bonusPercentage = '6%';
      bonusPercentage = .06;
      //bonusCalculation = employeeObject.annualSalary*.06;
      //singleEmployee.totalCompensation = employeeObject.annualSalary + bonusCalculation;
      //6% base annual income as bonus

  } else if(employeeObject.reviewRating === 5){
      singleEmployee.bonusPercentage = '10%';
      bonusPercentage = .10;
      //bonusCalculation = employeeObject.annualSalary*.1;
      //singleEmployee.totalCompensation = employeeObject.annualSalary + bonusCalculation;
      //10% base annual income as bonus
  };
  //check
  if(employeeObject.annualSalary > '65000'){
    //console.log('bonusPercentage before annualSalary check:', bonusPercentage);
    bonusPercentage -= .01;
    //console.log('bonusPercentage after annualSalary check:', bonusPercentage);
  };
  //check employee number length. If 4 add 5% bonus.
  if(employeeObject.employeeNumber.length === 4){
    //console.log('bonusPercentage before employeeNumber', bonusPercentage);
    bonusPercentage += .05;
    //console.log('bonusPercentage after employeeNumber', bonusPercentage);
  };

  // check if bonus percentage is greater than 13, if so set it to 13.
  if(bonusPercentage > .13){
    bonusPercentage = .13;
  }
  //check if bonus percentage is less than 0, if so set it to 0.
  if(bonusPercentage < 0){
    bonusPercentage = 0;
  }
  //console.log('bonusPercentage after all the checks:', bonusPercentage);
  //calculate bonusCalculation after all checks and stuff
  bonusCalculation = Number(employeeObject.annualSalary) * bonusPercentage;
  //console.log('bonusCalculation before math.round:', bonusCalculation);
  bonusCalculation = Math.round(bonusCalculation);
  //console.log('bonusCalculation after math.round:', bonusCalculation);
  singleEmployee.totalBonus = bonusCalculation;
  // calculate totalCompensation
  singleEmployee.totalCompensation = Number(employeeObject.annualSalary) + bonusCalculation;

  return singleEmployee;
};// end ratingToBonus


let employeeArrayReturn = [];
//function to push employees into array
function employeeBonusArray(employeeArray){
  let result = $('#singleEmp');
  result.empty();
  for(let employee of employeeArray){
    employeeArrayReturn.push(ratingToBonus(employee));
    result.append( `<li> ${employee.name} ${employee.totalBonus} ${employee.annualSalary} ${employee.totalCompensation}</li>`);
  };
  return employeeArrayReturn;
}
console.log(employeeBonusArray(employees));
console.log('trial run', ratingToBonus(employees[0]));
console.log('trial run', ratingToBonus(employees[3]));
console.log('trial run', ratingToBonus(employees[1]));
console.log('trial run', ratingToBonus(employees[2]));
console.log('trial run', ratingToBonus(employees[4]));









// getBonus(employees[0])

//console.log( employees );

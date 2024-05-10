/*  ~ CONDITION ~  */

// if-else

var arbitraryNumber1 = 15;
if (arbitraryNumber1 % 2 == 0) {
  console.log('15 is even number');
} else {
  console.log('15 is odd number');
}

var arbitraryNumber2 = 26;
if (arbitraryNumber2 % 2 == 0) {
  console.log('26 is even number');
} else {
  console.log('26 is odd number');
}

var ageGroom = 21;
if (ageGroom > 20) {
  console.log('Groom is eligible for marriage');
} else {
  console.log('Groom is not eligible for marriage');
}


var ageBride = 15;
if (ageBride > 18) {
  console.log('Bride is eligible for marriage');
} else {
  console.log('Bride is not eligible for marriage');
}

var ageMan = 21;
var jobHolderMan = true;
var salaryMan = 5000;
var handsomeMan = true;
var ownHomeMan = false;
var singleMan = true;


if (jobHolderMan && salaryMan > 4500 && handsomeMan && ownHomeMan && singleMan) {
  console.log('Man can be eligible groom');
} else {
  console.log('Man is not eligible groom');
}

if (jobHolderMan && salaryMan > 4500 && handsomeMan && singleMan) {
  console.log('Man can be eligible groom');
} else {
  console.log('Man is not eligible groom');
}


var tourPlan = ['dubai', 'nepal', 'dhaka', 'digha', 'mirik'];

if (tourPlan[1] == 'dubai') {
  console.log('Dubai tour is planned');
} else if (tourPlan[2] == 'mirik') {
  console.log('plan for Mirik');
} else {
  console.log('plan for Digha');
}

if (tourPlan.indexOf('doha') == -1) {
  console.log('we will tour to Qatar');
} else {
  console.log("we can't go anywhere");
}
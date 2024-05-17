/*  ~ CONDITION ~  */

// if-else

{
  // if data true, then it will return from body, if false it will directly go to else statement //
  data;
  if (data) {

  } else {

  }
}


{
  console.log(5 > 6);
  console.log(5 < 6);
  console.log(5 == 6);
  console.log(5 != 6);
  console.log(5 >= 6);
  console.log(5 <= 6);
}


{
  const iPhone = 1000;
  const fund = 999;

  if (fund > iPhone) {
    console.log('You can purchase');
  }
  else {
    console.log('Lack of fund');
  };

  if (fund > iPhone == true) {
    console.log('You can purchase');
  }
  else {
    console.log('Lack of fund');
  };
}


{
  const iPhone = 1000;
  const fund = 1999;

  if (fund > iPhone == true) {
    console.log('You can purchase');
  }
  else {
    console.log('Lack of fund');
  };
}


{
  const jobHolder = true;
  const savedMoney = 5000000;
  const ownHomeKolkata = false;
  const homeDistrict = false;

  if (jobHolder == true && savedMoney >= 400000 || ownHomeKolkata == true && homeDistrict == true) {
    console.log("Marriage is allowed");
  }
  else {
    console.log("Proposal is rejected");
  }
}

{
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
}


{
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
}


{
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
}


/*  ~ IF, ELSE IF, ELSE ~  */

{
  var mode = 'green';
  let color;

  if (mode === "dark") {
    color = 'black';
  }
  else if (mode === 'blue') {
    color = 'blue';
  }
  else if (mode === 'gray') {
    color = 'gray';
  }
  else {
    color = 'white';
  }
  console.log(color);

}

console.log(mode);

// block statement  {}  (curly barces) er modhye somponno kora hoy.
/* block scope: Ekta block_er modhye declared data_gulo sei block_er modhye accessible.
  amra chaileo sei block_gulo'r value_gulo baire theke access korte parbo naa. 
  Sometimes reference error dekhay. */

/* var data_type diley access kora jabe. var global scope. 
let and const ei-duto block scope */


/*  ~ TERNARY OPERATOR ~  */

/* condition? true output : false output ; */

{
  let age = 16;
  let result = age >= 18 ? "adult" : "not adult";

  console.log(result);
}

/*  ~ SWITCH STATEMENT ~  */

const action = 'say hello!';
switch (action) {
  case "say hello!":
    const msg = "hello!";
    console.log(msg);
    break;
  case "say hi!":
    const yes = "hi!";
    console.log(yes);
    break;
  default:
    console.log("empty action received");
}


{
  const data = 4;

  switch (data) {
    case 1:
      console.log('it is 2');
      break;
    case 2:
      console.log('it is 3');
      break;
    case 3:
      console.log("it is also false");
      break;

  }

}

/*  ~ take input in JavaScript as prompt ~  */

{
  let number = prompt("enter a number");

  if (ageGroom > 20) {
    console.log('Groom is eligible for marriage');
  } else {
    console.log('Groom is not eligible for marriage');
  }

}




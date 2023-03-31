
var city = prompt('Enter City Name', 'Karachi');
city = city.slice(0, 1).toUpperCase() + city.slice(1).toLowerCase();


if (city == 'Karachi') {
    alert(city + ' City is of light');
}


var gender = prompt('Enter Your Gender', 'Male');
gender = gender.slice(0, 1).toUpperCase() + gender.slice(1).toLowerCase();

if (gender == 'Male') {
    alert('Good Morning Sir');
}
else
    if (gender == 'Female') {
        alert('Good Morning Madam');
    }
    else {
        alert('The given Gender does not exist');
    }


var signalColor = prompt('Enter Traffic Signal Color', 'Green');
signalColor = signalColor.slice(0, 1).toUpperCase() + signalColor.slice(1).toLowerCase();
if (signalColor == 'Red') {
    alert('Must Stop');
}

else
    if (signalColor == 'Yellow') {
        alert('Ready to move');
    }

    else
        if (signalColor == 'Green') {
            alert('Move Now');
        }
        else {
            alert('Sorry The Color Does Not Exist in Traffic siganl Color');
        }

var reaminFuel = +prompt('Enter Remaining Fuel in liters', '0.4');


if (reaminFuel < 0.25) {
    alert('Please Refill Fuel in Your Car');
}


var ab = 4;

if (++ab == 5) {
    alert('The Given Condition for Variable is True');
}
var bc = 83;

if (bc++ == 83) {
    alert('The Given Condition is Flase');
}
else {
    alert('The Given Condition is False');
}


var ac = 12;

if (ac++ == 13){
    alert('Condition 1 is True');
}


else if(ac===13){
    alert('Condition  2  is True');
}
else if(++c<14){
    alert('Condition 3 is True');
}
else if(c===14){
    alert('Condition 4 is True')
}


var materialCost=20000;
var labourCost=2000;

var totalCost=materialCost + labourCost;

if(totalCost===materialCost+labourCost){
    alert('The Cost Equals');
}

else{
    alert('The Cost Does Not Equals');

}



var Math=+prompt('Enter Your Maths Marks',50);
var Physics=+prompt('Enter Your Physics Marks',90);
var Computer=+prompt('Enter Your Computer Marks',70)


var ObMarks=Math+Physics+Computer;
var percent=(ObMarks)/300 * 100;

document.write('<h1> Mark Sheet </h1>')
document.write('Total Marks 300' + '<br />');
document.write('Obatain Marks' + ObMarks +'<br />');
document.write('Percentage '+ percent +' <br />');

if(percent>=80 && percent<=100){
    document.write('Grade A-one'+'<br />');
    document.write('Remarks Excellent');
}

else
if(percent>=70 && percent<80){
    document.write('Grade A'+'<br />');
    document.write('Remarks Good ');
}
else
if(percent>=60 && percent<70){
    document.write('Grade B'+'<br />');
    document.write('You Need To Improve ');
}

else
if(percent<60 && percent>=0){
    document.write('Grade Fail'+'<br />');
    document.write('Sorry ');
}



// Secret Number Game Program 

var secretGame=+prompt('Enter a NUmber',5);
var StoreNum=4;

if(secretGame===StoreNum){
    alert('Bingo Correct Answer')
}

else if(secretGame+1===StoreNum){
    alert('Close Enough to The Correct Answer');
}

else{
    alert('Sorry You Have Lost The Game');
}


var Divisibe=+prompt('Enter The Number',30);


if(Divisibe%3===0){
    alert('The Number is Divisible by 3');
}
else{
    alert('The Number is Not Divisible by 3');
}


var Number2=+prompt('Enter The Number',3);

if(Number2%2===0){
    alert('Even Number');
}
else{
    alert('Odd Number');
}


var Temprature=+prompt("Enter Your Temprature in Degre",40);
 if(Temprature>=40){
    alert('Its Too Hot Outside');
 }
 else
 if(Temprature>30){
    alert('The Whether Today is Normal');
 }


 else if(Temprature>20){
    alert('The Whether Today is Cool');
 }
 else if(Temprature>10){
    alert('OMG gThe Whether Today is so Cool');
 }



 var val11=+prompt('Enter The First Value',5);
 var Operator=prompt('Enter The Operator','-');
var val22=+prompt('Enter The Second Value',3);

if(Operator=='+'){
    alert('The addition of '+ val11+' and '+ val22 + ' is ' + (val11+val22)  );
}
else
if(Operator=='-'){
    alert('The Subtraction of '+ val11+' and '+ val22 + ' is ' + (val11-val22)  );
} 

else
if(Operator=='*'){
    alert('The Multlipication of '+ val11+' and '+ val22 + ' is ' + (val11*val22)  );
} 

else
if(Operator=='/'){
    alert('The Division of '+ val11+' and '+ val22 + ' is ' + (val11/val22)  );
} 

else
if(Operator=='%'){
    alert('The Percentage  of '+ val11+' by '+ val22 + ' is ' + (val11/val22*100)+'%'  );
} 
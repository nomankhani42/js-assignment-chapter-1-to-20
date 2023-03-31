
var a,b;
a=+prompt('Enter The First Value',6);
b=+prompt('Enter The Second Value');

if(a>b){
    document.write(a+' is Greater Than ' + b);
}
else
if(a<b){
    document.write(b+' is Greater Than ' + a);
}

else{
    document.write('Both Values Are Equal')
}


var number=+prompt('Enter The Number To Check It');


if(number>0){
    alert('Number is Positive');

}

else if(number==0){
    alert('Number is Zero ');
    
}
else{
    alert('Number is Negative');
}

var Vowel=prompt('Enter a Vowel letter to Check it');
Vowel=Vowel.slice(0,1).toLowerCase();


if(Vowel=='a' || Vowel=='e' || Vowel=='i' || Vowel=='o' || Vowel=='u'){
    alert(Vowel + ' is Vowel');
}
else{
    alert(Vowel + ' is not a Vowel');
}

var enterpass=prompt('Enter Your Password','abc123.1');
var Password='AFRIDINO1';

if(enterpass===Password){
    alert('You Enter The Correct Password');

}
else{
    alert('You Did not Entered The Correct Password');
}

var hour=13;

if(hour<18){
    alert('Good Day');
}

else{
    alert('Good Evening');
}


var time=prompt('Enter The Time for Example 1600 is 4Pm',400);

if(time>=0000 && time<1200){
    alert('Good Mornig');
}
else if(time>=1200 && time<1700){
    alert('Good After Noon');
}

else if(time>=1700 && time<2100){
    alert('Good Evening');
}
else if(time>=2100 && time<2359){
    alert('Good Night');
}

else{
    alert('Refresh and Enter The Right Time');
}
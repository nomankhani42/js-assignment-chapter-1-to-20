// Multidimensional Array 

var arr=[
    ['Noman','Salman','Faizan','Huzaifa'],
    ['Khan','Agha','Abid','Wahab'],
    
];

var arr2=[
    [0,1,2,3],
    [1,0,1,2],
    [2,1,0,1]
];

for(var i=0;i<arr2.length;i++){
    for(var j=0;j<arr2.length;j++){
        document.write(arr2[i][j] +' ');
    }
    document.write('<br />');
}

document.write('<br />');
document.write('<br />');
document.write('<br />');

for(var n=1;n<=10;n++){
    document.write(n +'<br />')
}

document.write('<br />');
document.write('<br />');
document.write('<br />');
var table=+prompt('Enter The Table No to Show Its Table',7);
var tableLength=+prompt('Enter The Length of Table',15);

for(var indexTable=1;indexTable<=tableLength;indexTable++){
    document.write(table +' x '+ indexTable +' = '+table*indexTable +'<br />');
}
document.write('<br />');
document.write('<br />');
document.write('<br />');
var fruits=['Apple','Banana','Mango','Orange','Strawbery'];

for(var c=0;c<fruits.length;c++){
    document.write(fruits[c]+ '<br />');

    // document.write('<br />'+' The Element at Index('+c+') is'+fruits[i]);
}

var fruits1=['Apple','Banana','Mango','Orange','Strawbery'];
for(var m=0;m<fruits1.length;m++){
    document.write('<br />'+' The Element at Index('+m+') is'+fruits1[m]);
    
    
    
}

document.write('<br />');
document.write('<br />');
document.write('Counting');
for(var Counting=1;Counting<=10;Counting++){
    document.write(Counting + ',')
}

document.write('<br />');
document.write('<br />');
document.write('Revised Counting');

for(var RevisedCounting=10;RevisedCounting>=1;RevisedCounting--){
    document.write(RevisedCounting + ',')
}

document.write('<br />');
document.write('<br />');
document.write('Even Number Counting');
document.write('<br />');
document.write('<br />');
document.write('<br />');

for(var evenNum=1;evenNum<=20;evenNum++){
    if(evenNum % 2 == 0){
        document.write(evenNum+' ')
    }
}

document.write('Even Number Counting');
document.write('<br />');
document.write('<br />');
document.write('<br />');

for(var OddNum=1;OddNum<=20;OddNum++){
    if(OddNum % 2 != 0){
        document.write(OddNum+' ')
    }
}
document.write('<br />');
document.write('<br />');
document.write('<br />');

for(var series=1;series<=20;series++){
    if(series % 2 == 0){
        document.write(series+'k ')
    }
}

document.write('<br />');
document.write('<br />');
document.write('<br />');
var A=['cake','apple pie','cookie','chips','patties'];
Input1=prompt('What do You Want to Order','cake');

flagValue=false;

for(ad=0;ad<A.length;ad++){

    if(A[ad]==Input1){
        alert(A[ad] + ' is available at index '+ ad +' in our Backery');
        flagValue=true;
    }


}

if(!flagValue){
    alert(Input1 +' is not Available In Our Bakery');
}
document.write('<br />');
document.write('<br />');


var $ab;
for($ab=1;$ab<=20;$ab++){
    document.write($ab*5 +' , ');
}
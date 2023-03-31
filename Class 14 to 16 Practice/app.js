var arr = [];
arr[0] = 'Noman';
arr[1] = 'Ali';
arr[2] = 'Faizan';

console.log(arr);

var arr1 = ['Mango', 'Orange', 'Banana', 'Apple', 'PineApple', 'WaterMelon'];

console.log(arr1);

var arr2 = [15, 30, 340, 30];
console.log(arr2);


var arr3 = [true, false, false, true, false];
console.log(arr3);

var arr4 = [true, 'Faizan', '14', false];

console.log(arr4);

var Qualification = ['', 'SSc', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M.phil', 'PhD'];

for (var i = 1; i < Qualification.length; i++) {
    document.write(i + ') ' + Qualification[i] + '<br />');
}
document.write('<br />');
document.write('<br />');
document.write('<br />');
var names = ['Micheal', 'John', 'Tonny'];
obtainMarks = [320, 230, 480];
for (var i = 0; i < obtainMarks.length; i++) {
    document.write('The Score of ' + names[i] + ' is ' + obtainMarks[i] + '  Percentage ' + (obtainMarks[i] / 500 * 100) +' % <br />')
}



var colorNames=['Orange','Blue','Green','Yellow'];

console.log(colorNames);

colorNames.pop();
console.log(colorNames);

colorNames.push('Purple','Yellow');

console.log(colorNames);
colorNames.shift();
console.log(colorNames);
colorNames.unshift('BlueViolet','Orange')
console.log(colorNames);

colorNames.splice(1,2,'Cyan','black');
console.log(colorNames);


var studentSCores=[320,230,480,120];
console.log(studentSCores);
studentSCores.sort();
console.log(studentSCores);

var city=['Karachi','Isb','Lahore','Quetta','Peshawar'];
console.log(city);

var selectCity=city.slice(2,4);
console.log(selectCity);

var arr5=['This','is','my','cat'];
console.log(arr5);

var b=arr5.join('-');
console.log(b);


document.write('<br />');

var arr6=['Keyboard','Mouse ','Printer','Monitor'];

for(var ak=0;ak<arr6.length;ak++){
    
    document.write('out ;'+'<br />'+arr6[ak] +'<br/>');

}


document.write('<br />');
document.write('<br />');
document.write('<br />');
var arr7=['Keyboard','Mouse ','Printer','Monitor'];

for(var aw=arr7.length-1;aw>=0;aw--){

    document.write('out ;'+'<br />'+arr7[aw] +'<br/>');

}





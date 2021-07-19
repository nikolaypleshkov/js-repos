/*
var arr;
arr = [10,4,5,6,7,8,1];

document.write('Arrays:<br>');

for(let i = 0; i < arr.length; i++){
    document.write('#'+i+": "+arr[i]+"<br>");
}

document.write('Index: 1 -- > ' + arr[0]);

document.write('<br>Min element in array at index ');
arrMin = arr[0];
indexAt = 0;
for(let i = 1; i < arr.length; i++){
    if(arr[i] < arrMin){
       arrMin = arr[i];
       indexAt = i;
    }
    
}
document.write(indexAt+': '+arrMin);
*/

var MyLibrary = {};
MyLibrary.DecodeString = function(){
    document.write('Test');
}

var $ = MyLibrary;

$.DecodeString();
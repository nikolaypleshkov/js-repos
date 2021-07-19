//Sync 
/*
function otherFucnt(){
    console.log('another function');
    console.log('something');
}
*/


console.log('Start');
//Async
setTimeout(() =>{
    console.log('We are in timeout');
}, 2000);

const items = [1,2,3,4,5];

items.forEach(item => {
    console.log(item);
});
//otherFucnt();
console.log('End');
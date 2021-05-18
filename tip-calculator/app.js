var people = document.getElementById('peopleamt').value;
const calculate = document.getElementById('calculate');
var tip = document.getElementById('tip');

calculate.addEventListener('click', function(){
    var bill = document.getElementById('billamt').value;
    var service = document.getElementById('serviceQual').value;

    if(bill === " " || service == 0  || people === " "){
        alert("Please fill the fields!");
        return;
    }
    if(people === " " || people <= 1){
        people = 1;
        document.getElementById("each").style.display = "none";
    } else {
      document.getElementById("each").style.display = "block";
    }

    var totalEach = (bill * service) / people;
    totalEach = totalEach.toFixed(2);

   
    tip.innerHTML = totalEach;
    console.log("works");
});


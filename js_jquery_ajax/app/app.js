// $(function(){ 
//     $('#log').click(function(){  
//         var txt = $('#code').val();
//        console.log(txt);
//         $('#result').text(txt);
//     });
// });
const M = [1,2,3,4,5];
/*
$(function(){
    $('#log').click(function(){
        console.log('working'); 
       
        M.forEach(number => {
            console.log('working');
            console.log(number);
            $('#result').after('<br>>_',number);
        });
    });
});
*/

const randomFnames = ['Nikolay','Mario', 'Stella', 'Dimitar', 'Elena', 'Marko','Maria','Martin','Christopher','Josiph','Adolf'];
const randomLnames = ['Pleshkov','Nasranko', 'Dinev', 'Dimitrov', 'Pampov', 'Bakarov','Hitler','Stalin','Noris'];

function getRandomName(arr){
    const index = arr[Math.floor(Math.random() * arr.length)];
    return index;
}

function result(){
    let fname = getRandomName(randomFnames);
    let lname = getRandomName(randomLnames);
    if(fname.substring(fname.length - 1) === 'a' && lname.substring(lname.length - 1) != 'a'){
        lname += 'a';
    }
    else if(fname.substring(fname.length - 1) != 'a' && lname.substring(lname.length - 1) == 'a'){
        lname.slice(0, lname.length - 1);
    }

    let fullname = fname + ' ' + lname
    if(fullname === 'Marko Nasranko'){
        alert('yessssssssssssss');
    }
    else if(fullname === 'Adolf Hitler'){
        alert('OPASNOST');
    }
    else if(fullname === 'Mario Dimitrov' || fullname === 'Nikolay Dimitrov'){
        fullname += ' '+'Pleshkov'
    }
    return fullname;
}


$(function(){
    $('#log').click(function(){
        $('#result').text('Random Name: ')
    let Person = {};
    Person.getName = $(function(){
        setTimeout(() => {
            $('#result').after('<br>>_', result());
        }, 500);
    });
    });
});

// var Person = {};
// Person.getName =  function(){
//     setTimeout(() => {
//         result();
//     },2000);
// }

// var $ = Person;
// $.getName();

// $(function(){
//     $('#log').click(function(){
        
//     });
// })




// $(function(){
//     $('#log').click(function(){
//         var txt = $('#code').val();
//         const substr = txt.substring(txt.length - 2);
//         $('#result').after('<br>>_', swap(substr));
//     });
// });

// function swap(word){
//     const wordArr = Array.from(word);
//     let temp = wordArr[0];
//     wordArr[0] = wordArr[1];
//     wordArr[1] = temp;
    
//     let strWord = wordArr.join(" ");
//     let split = ' ';

//     for(let i = 0; i < strWord.length; i++){
//         split += strWord.charAt(i)+ ' ';
//     }

//     return split;
// }

const M = [1,5,9,3,5,2,7];



M.forEach(element => {
    $('#uns').before('<br>'+element)
});

var result = quickSort(M, 0, M.length - 1);

result.forEach(element2 => {
    $('#sort').before('<br>'+element2)
});




function partition(M, left, rigth) {
    var pivot = M[Math.floor((rigth + left) / 2)];

    var i = left;
    var j = rigth;

    while(i <= j){
        while(M[i] < pivot)
          i++;
        while(M[j] > pivot)
          j--;
        
        if(i <= j){
            var temp = M[i];
            M[i] = M[j];
            M[j] = temp;
            i++;
            j--;
        }  
    }

    return i;
}

function quickSort(M, left, rigth) {
    var index;
    if(M.length > 1){
        index = partition(M, left, rigth);
        if(left < index - 1){
            quickSort(M, left, index - 1);
        }
        if(index < rigth){
            quickSort(M, index, rigth);
        }
    }
    return M;
}

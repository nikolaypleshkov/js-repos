const items = [

    {
        nameTag: 'Windbreaker',
        price: 349.99,
        value: 0
    },

    {
        nameTag: 'Sport shorts',
        price: 24.99,
        value: 0
    },

    {
        nameTag: 'Nike SB',
        price: 69.99,
        value: 0
    }
]

$('#title').text(items[0].nameTag);
$('#price').text(items[0].price);

$('#title2').text(items[1].nameTag);
$('#price2').text(items[1].price);
console.log(items);

let value = 0;
let value1 = 0;
let value2 = 0;
let itemsPrice = [];

function clicked(){
$(function(){
        value++;
        value2++;
        console.log(value);
        let price = parseFloat($('#price').text());
        itemsPrice.push(price);
        console.log(itemsPrice);
        getTotal();
        updateCart();
  
});
}

function clicked2(){
    $(function(){
            value++;
            value1++;
            console.log(value);
            let price = parseFloat($('#price2').text());
            itemsPrice.push(price);
            console.log(itemsPrice);
            getTotal();
            updateCart();
      
    });
    }

    async function updateCart (){
        $(function(){
            $('#cart').text(value);
            console.log(value);
        });
    }

   

function isClicked(){
    clicked();
}
function isClicked2(){
    clicked2();
}
function getTotal(){
    var total = itemsPrice.reduce(function(a, b){return a + b;}, 0.0);
    return Math.round(total * 100) / 100;
}

$(function(){
    $('#calculate').click(function(){
      console.log(getTotal());
      getItemsIndex();
    });
});

function getItemsIndex(){
    let noItems = '<p style="margin-left: 5%;"><b>No Items</b></p>'
    items[0].value = value2;
    items[1].value = value1;
    $(function(){
        if(items[0].value === 0 && items[1].value === 0){
            $('#body').after(noItems);
        } 
       else if(items[0].value != 0 && items[1].value === 0){
        $('#body').after('<p style="margin-left: 5%;">Item: <span id="getTitle">'+items[0].nameTag+'</span> || Price: $<span>'+items[0].price+'</span> || Value: <span>'+items[0].value+'</span></p>')
       }
       else {
        $('#body').after('<p style="margin-left: 5%;">Item: <span id="getTitle">'+items[1].nameTag+'</span> || Price: $<span>'+items[1].price+'</span> || Value: <span>'+items[1].value+'</span></p>')
       }
});
}




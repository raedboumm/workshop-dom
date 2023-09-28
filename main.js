var list=document.querySelector('.list')
var total=document.querySelector('.total')
var quantity=document.querySelector('.quantity')
var listCard=document.querySelector('.listCard')
let body = document.querySelector('body');

var products = [
    {
        id: 1,
        name: 'PRODUCT NAME 1',
        image: 'img.jpeg',
        price: 120000
    },
    {
        id: 2,
        name: 'PRODUCT NAME 2',
        image: 'img1.png',
        price: 120000
    },
    {
        id: 3,
        name: 'PRODUCT NAME 3',
        image: 'img3.jpeg',
        price: 220000
    },
    {
        id: 4,
        name: 'PRODUCT NAME 4',
        image: 'img2.jpeg',
        price: 123000
    },
    {
        id: 5,
        name: 'PRODUCT NAME 5',
        image: 'img4.jpeg',
        price: 320000
    },
    {
        id: 6,
        name: 'PRODUCT NAME 6',
        image: 'img6.jpeg',
        price: 120000
    }
];
let listcards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}$</div>
            <button onclick="add(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function add(key){
    if(listcards[key] == null){
        // copy product form list to list card
        listcards[key] = JSON.parse(JSON.stringify(products[key]));
        listcards[key].quantity = 1;
    }
    reloadcard();
}


function reloadcard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listcards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <button  id="btn" onclick="pop(event)" >	&#10084 </button>
                <div>${value.price.toLocaleString()}$</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})" >+</button>
                    <button onclick="remove(${key})" id="remove">remove</button> 
                    
                </div>`;
                listCard.appendChild(newDiv);//needhelp remove
        }
    })
    total.innerText = totalPrice.toLocaleString()+'$';
    quantity.innerText = count;
}

//remove function
function remove(key){

        delete listcards[key];
        console.log(listCard);
        reloadcard()
}
function pop (event){
        event.target.style.color = 'red'
        console.log(event.target);

    }
        
    
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listcards[key];
    }else{
        listcards[key].quantity = quantity;
        listcards[key].price = quantity * products[key].price;
    }
    reloadcard();
}

    
let shoppingCart = [];                    //creates array for shopping cart
let appleButton = document.querySelector('#add-apple');            //gets apple button
let cartList = document.querySelector('#cart-items');             //gets cart ul
let kiwiButton = document.querySelector('#add-kiwi');
let blackberryButton = document.querySelector('#add-blackberries'); 


appleButton.addEventListener ('click', () =>{
    shoppingCart.push("apple");         //pushes object to front of list
    let li = document.createElement("li");  //creates blank list item
    li.textContent = "Apple";    //names the list item
    cartList.appendChild(li);
});

kiwiButton.addEventListener('click', () =>{
    shoppingCart.push("Kiwi");
    let li = document.createElement("li");
    li.textContent = "Kiwi";
    cartList.appendChild(li);
});

blackberryButton.addEventListener('click', () =>{
    shoppingCart.push("Blackberries");
    let li = document.createElement("li");
    li.textContent = "Blackberries";
    cartList.appendChild(li);
});
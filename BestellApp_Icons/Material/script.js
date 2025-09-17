function generateMenuName(){
    let navbar = document.getElementById("navbar")
    navbar.innerHTML= ""

    for(let key in menu){
        navbar.innerHTML += `<a href="#">${key}</a>`
    }
    generateMenuDetails()
}

function generateMenuDetails(){
    let detailMenu = document.getElementById("detailMenu")
    detailMenu.innerHTML =""
    for(let key in menu){
        detailMenu.innerHTML +=`<p>${key}</p>`
        let items = menu[key]

        for(let i = 0; i < items.length; i++){
            let item = items[i]
            let safeName = item.name.replace(/'/g, "\\'");
            detailMenu.innerHTML +=`<p>${item.name}</p> 
                                    <p>${item.price.toFixed(2)}€ <button onclick="increaseBtn('${safeName}', ${item.price})">+</button></p>`;
        }
    }
}

function increaseBtn(name, price) {
 

        if (cart[name]) {
        cart[name].quantity += 1;
    } else {
        cart[name] = {
            price: price,
            quantity: 1
        };
    }

    updateCartDisplay();

}

function updateCartDisplay() {
    let addOrder = document.getElementById("addOrder");
    let totalPrice = 0;
    addOrder.innerHTML = "";

    for (let name in cart) {
        let item = cart[name];
        let itemTotal = item.price * item.quantity;
        totalPrice += itemTotal;

        addOrder.innerHTML += `
            <p>
                ${name} x${item.quantity} – ${itemTotal.toFixed(2)} €
                <button onclick="adjustQuantity('${name.replace(/'/g, "\\'")}', -1)">-</button>
                <button onclick="adjustQuantity('${name.replace(/'/g, "\\'")}', 1)">+</button>
            </p>
        `;
    }

    document.getElementById("totalPrice").innerText = totalPrice.toFixed(2);
}


function adjustQuantity(name, change) {
    if (cart[name]) {
        cart[name].quantity += change;

        if (cart[name].quantity <= 0) {
            delete cart[name];
        }

        updateCartDisplay();
    }
}

function submitOrder() {
    if (Object.keys(cart).length === 0) {
        alert("Warenkorb ist leer.");
        return;
    }

    let orderSummary = "Bestellung:\n";
    for (let name in cart) {
        let item = cart[name];
        let itemTotal = item.price * item.quantity;
        orderSummary += `• ${name} x ${item.quantity} – ${itemTotal.toFixed(2)} €\n`;
    }

    orderSummary += `\nGesamt: ${document.getElementById("totalPrice").innerText} €`;

    alert(orderSummary);
    clearCart();
}

function clearCart() {
    cart = {};
    updateCartDisplay();
}
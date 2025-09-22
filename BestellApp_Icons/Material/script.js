function generateMenuName() {  // holt sich die ID und zeigt Kategorie Namen an 
    let navbar = document.getElementById("navbar");
    navbar.innerHTML = "";

    for (let key in menu) {
        navbar.innerHTML += `<a href="#" onclick="showCategory('${key}')">${key}</a>`;
    }
    showCategory("Pizza");
}

function showCategory(categoryKey) { // zeigt Details an zb pizza salami mit preis und bestellbutton
    let detailMenu = document.getElementById("detailMenu");
    detailMenu.innerHTML = "";

    let items = menu[categoryKey];

    detailMenu.innerHTML += `<h2 class="dishname">${categoryKey}</h2>`;

    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        detailMenu.innerHTML += detailMenu.innerHTML = getMenuItemTemplate(item.name, item.description, item.price);;
    }
}

function increaseBtn(name, price) { //Für „+“-Buttons im Menü (neuen Artikel in den Warenkorb legen).

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

function changeCartItem(name, change) { // ändert die Menge eines Artikels im Warenkorb oder entfern ihn abbruch wenn artikel nicht im warenkorb
    if (!cart[name]) return;

    if (change === 0) {
        delete cart[name];
    } else {
        cart[name].quantity += change;
        if (cart[name].quantity <= 0) {
            delete cart[name];
        }
    }

    updateCartDisplay();
}

function submitOrder() { // bestell abschick funktion 
    let addOrder = document.getElementById("addOrder");
    let totalPriceElem = document.getElementById("totalPrice");

    let mobileCartItems = document.getElementById("mobileCartItems");
    let mobileTotalPriceElem = document.getElementById("mobileTotalPrice");
    let mobileTotalDisplayElem = document.getElementById("mobileTotalDisplay");

    if (Object.keys(cart).length === 0) {
        addOrder.innerHTML = "<p>Warenkorb ist leer.</p>";
        mobileCartItems.innerHTML = "<p>Warenkorb ist leer.</p>";
        totalPriceElem.innerText = "0.00";
        mobileTotalPriceElem.innerText = "0.00";
        mobileTotalDisplayElem.innerText = "0.00";
        return;
    }

    let orderSummary = "<h3>Bestellung erfolgreich!</h3><ul>";

    addOrder.innerHTML = orderSummary;
    mobileCartItems.innerHTML = orderSummary;

    cart = {};
    totalPriceElem.innerText = "0.00";
    mobileTotalPriceElem.innerText = "0.00";
    mobileTotalDisplayElem.innerText = "0.00";

}

function clearCart() { // leert warenkorb
    cart = {};
    updateCartDisplay();
}

function toggleMobileCart() {// warenkorb für mobile wird ein bzw ausgeblendet
    let dialog = document.getElementById("mobileCartDialog");
    dialog.classList.toggle("active");
}

function updateCartDisplay() {
    let addOrder = document.getElementById("addOrder");
    let mobileCartItems = document.getElementById("mobileCartItems");
    let totalPrice = 0;
    addOrder.innerHTML = "";
    mobileCartItems.innerHTML = "";

    for (let name in cart) {
        let item = cart[name];
        let itemTotal = item.price * item.quantity;
        totalPrice += itemTotal;
        let safeName = name.replace(/'/g, "\\'");

        addOrder.innerHTML += `
            <p>
                ${name} x ${item.quantity} – ${itemTotal.toFixed(2)} €
                <button onclick="changeCartItem('${safeName}', -1)">-</button>
                <button onclick="changeCartItem('${safeName}', 1)">+</button>
                <button onclick="changeCartItem('${safeName}', 0)">🗑️</button>
            </p>
        `;

        mobileCartItems.innerHTML += `
            <p>
                ${name} x ${item.quantity} – ${itemTotal.toFixed(2)} €
                <button onclick="changeCartItem('${safeName}', -1)">-</button>
                <button onclick="changeCartItem('${safeName}', 1)">+</button>
                <button onclick="changeCartItem('${safeName}', 0)">🗑️</button>
            </p>
        `;
    }

    document.getElementById("totalPrice").innerText = totalPrice.toFixed(2);
    document.getElementById("mobileTotalPrice").innerText = totalPrice.toFixed(2);
    document.getElementById("mobileTotalDisplay").innerText = totalPrice.toFixed(2);
}

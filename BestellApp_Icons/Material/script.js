function generateNavbar() {
    let navbar = document.getElementById("navbar");
    navbar.innerHTML = "";

    for (let key in menu) {
        navbar.innerHTML += `<a href="#">${key}</a>`;
    }

    generateMenu();
}

function generateMenu() {
    let detailMenu = document.getElementById("detailMenu");
    detailMenu.innerHTML = "";

    for (let key in menu) {
        detailMenu.innerHTML += `<h2>${key}</h2>`;

        let items = menu[key];
        for (let i = 0; i < items.length; i++) {
            let item = items[i];
            let inputId = `input_${key}_${i}`;

            detailMenu.innerHTML += `
                <p>${item.name} - ${item.price}
                    <button onclick="increase('${inputId}')">+</button>
                    <input id="${inputId}" type="number" value="0" min="0" readonly>
                    <button onclick="decrease('${inputId}')">-</button>
                </p>
            `;
        }
    }
}

function increase(quantityInputId) {
    let input = document.getElementById(quantityInputId);
    input.value = parseInt(input.value) + 1;
}

function decrease(quantityInputId) {
    let input = document.getElementById(quantityInputId);
    let current = parseInt(input.value);
    if (current > 0) {
        input.value = current - 1;
    }

}


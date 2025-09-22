function getMenuItemTemplate(name, description, price) {
    let safeName = name.replace(/'/g, "\\'");
    return `
        <p><strong>${name}</strong></p> 
        <p>${description}</p>
        <div>
            <div class="priceBtn">
                <p class="price">${price.toFixed(2)}€ </p>
                <p><button onclick="increaseBtn('${safeName}', ${price})">+</button></p>
            </div>
        </div>
    `;
}
const list = document.querySelector('ul');
const buttonShowAll = document.querySelector('.show-all');
const buttondiscount = document.querySelector('.desconto10');
const buttonsumAll = document.querySelector('.sum')
const buttonFilter = document.querySelector('.filter-vegan')


function formatCurrency(value) {
    const newValue = value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return newValue;
}


function showAll() {
    let myLi = '';
    menuOptions.forEach((product) => {
        myLi += `
            <li>
                <img src="${product.src}">
                <p>${product.name}</p>
                <p class="item-price"> ${formatCurrency(product.price)}</p>
                </p>
            </li>
        `;
    });
    list.innerHTML = myLi;
}

function desconto() {
    let myLidiscount = '';
    const subtractTenPerCent = menuOptions.map((discount) => {
        discount.price = discount.price - discount.price / 10
        myLidiscount += `
    <li>
        <img src="${discount.src}">
        <p>${discount.name}</p>
        <p class="item-price">${formatCurrency(discount.price)}</p>
    </li>
`;
        return discount

    });
    list.innerHTML = myLidiscount;
}


function sumTotal() {
    let myTotal = '';
    const totalPrice = menuOptions.reduce((acc, curr) => acc + curr.price, 0);
    myTotal += `
<li>
<p class="item-price">O total é R$ ${formatCurrency(totalPrice)}.</p>
</li>
</li>
`;
    list.innerHTML = myTotal
}

function filterAllItems() {
    const veganItems = menuOptions.filter(item => item.vegan);
    let myLiFiltered = '';
    veganItems.forEach((product) => {
        myLiFiltered += `
            <li>
                <img src="${product.src}">
                <p>${product.name}</p>
                <p> ${formatCurrency(product.price)}</p>
            </li>
        `;
    });
    list.innerHTML = myLiFiltered;
}

buttonFilter.addEventListener('click', filterAllItems)
buttonsumAll.addEventListener('click', sumTotal)
buttondiscount.addEventListener('click', desconto);
buttonShowAll.addEventListener('click', showAll);




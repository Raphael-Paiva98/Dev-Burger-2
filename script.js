const list = document.querySelector('ul');
const buttonShowAll = document.querySelector('.show-all');

function showAll() {
    let myLi = '';
    menuOptions.forEach((product) => {
        myLi += `
            <li>
                <img src="${product.src}">
                <p>${product.name}</p>
                <p class="item-price">R$ ${product.price}</p>
            </li>
        `;
    });
    list.innerHTML = myLi;
}

buttonShowAll.addEventListener('click', showAll);
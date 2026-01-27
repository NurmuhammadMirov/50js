const app = document.querySelector('#app');

const items = [
    {id: '🍔', name: 'Big Slurp', price: 299},
    {id: '🍟', name: 'Super Burger', price: 399},
    {id: '🥤', name: 'Jumbo Fries', price: 199},
];

items.forEach(item => {
    app.innerHTML += `
        <li>
            ${item.id} ${item.name} - ${(item.price / 100).toFixed(2)}
        </li>
    `;
})
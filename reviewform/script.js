const products = [
    { id: '1', name: 'Shadrack' },
    { id: '2', name: 'Ekavana' },
    { id: '3', name: 'Erhiaganoma' }
];

const productSelect = document.getElementById('productName');

products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
});

document.getElementById('reviewForm').addEventListener('submit', function() {
    let reviewCount = localStorage.getItem('reviewCount') || 0;
    reviewCount++;
    localStorage.setItem('reviewCount', reviewCount);
});

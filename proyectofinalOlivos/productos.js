function addToCart(productName, productImage, productPrice) {
    let cart = localStorage.getItem('cart');
    cart = cart ? JSON.parse(cart) : [];

    // Siempre añade el producto como una nueva entrada.
    // La lógica de agrupación y cantidad se manejará en carrito.html
    const product = {
        name: productName,
        image: productImage,
        price: parseFloat(productPrice.replace("$", ""))
    };

    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.href = 'carrito.html';
}

function calculateTotalPrice() {
    // Esta función ya no se usará directamente para el total del carrito en carrito.html
    // Ahora, la lógica de suma de precios considerando cantidades se hará directamente en
    // la función `updateCartSummary` de carrito.html
    // Sin embargo, si necesitas un cálculo simple del total de todos los ítems individuales
    // (sin agrupar por cantidad), esta función sigue siendo válida.
    let cart = localStorage.getItem('cart');
    if (!cart) {
        return 0;
    }
    cart = JSON.parse(cart);
    const totalPrice = cart.reduce((total, product) => total + product.price, 0);
    return totalPrice;
}
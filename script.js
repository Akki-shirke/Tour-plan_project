// Function to save package details and redirect to booking page
function bookPackage(name, price) {
    localStorage.setItem('packageName', name);
    localStorage.setItem('packagePrice', price);
    window.location.href = 'booking.html';
}

// Display booking info on booking page
window.onload = function() {
    const packageName = localStorage.getItem('packageName');
    const packagePrice = localStorage.getItem('packagePrice');

    if (packageName && packagePrice) {
        document.getElementById('selected-package').textContent = 'Package: ' + packageName;
        document.getElementById('package-price').textContent = 'Price: $' + packagePrice;
    }
}
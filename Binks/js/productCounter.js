function IncreaceProducts() {
    var value = parseInt(document.getElementById('productCount').innerHTML, 10);
    value = isNaN(value) ? 0 : value;
    if (value === 9) {
        return;
    }
    value++;    
    document.getElementById('productCount').innerHTML = value;
} 
function DecreaseProducts() {
    var value = parseInt(document.getElementById('productCount').innerHTML, 10);
    value = isNaN(value) ? 0 : value;
    if (value === 0) {
        return;
    }
    value--;    
    document.getElementById('productCount').innerHTML = value;
}


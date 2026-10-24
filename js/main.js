function calculateQuote() {
    const pages = parseInt(document.getElementById('pages').value) || 0;
    const copies = parseInt(document.getElementById('copies').value) || 0;
    const size = document.getElementById('size').value;
    const finish = document.getElementById('finish').value;

    if (pages <= 0 || copies <= 0) {
        alert("Please enter valid page counts and quantity.");
        return;
    }

    // Working baseline rates (adjust base values according to exact vendor rates)
    let baseRatePerPage = 0.025; 
    let baseCoverCost = 1.20;

    if (size === '6x9') {
        baseRatePerPage *= 1.2;
        baseCoverCost *= 1.25;
    }

    if (finish === 'uv') {
        baseCoverCost += 0.50;
    } else if (finish === 'matte') {
        baseCoverCost += 0.20;
    }

    // Cost calculation
    let unitCost = (pages * baseRatePerPage) + baseCoverCost;
    
    // Quantity discount tier implementation
    if (copies >= 500) {
        unitCost *= 0.75;
    } else if (copies >= 100) {
        unitCost *= 0.85;
    }

    let totalCost = unitCost * copies;

    document.getElementById('unitCost').innerText = '$' + unitCost.toFixed(2);
    document.getElementById('totalCost').innerText = '$' + totalCost.toFixed(2);
}
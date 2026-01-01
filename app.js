const categories = [
    { name: "لبس", percent: 10 },
    { name: "عناية ونضافة", percent: 5 },
    { name: "الجيم", percent: 8 },
    { name: "ترفيه ومصاريف", percent: 6 },
    { name: "أستثمارات", percent: 50 },
    { name: "العشور", percent: 10 },
    { name: "أمي", percent: 3 },
    { name: "نت أرضي", percent: 3 },
    { name: "طوارئ", percent: 4 },
    { name: "نت محمول", percent: 1 },
];

const amountInput = document.getElementById('amount');
const calcBtn = document.getElementById('calc');
const tableBody = document.querySelector('#resultTable tbody');
const totalAmtEl = document.getElementById('totalAmt');
const sumPercEl = document.getElementById('sumPerc');
const noteEl = document.getElementById('note');


function renderTable(amount) {
    tableBody.innerHTML = '';
    let sumPercent = 0;
    let sumValues = 0;

    categories.forEach(cat => {
        const value = (cat.percent / 100) * amount;
        sumPercent += cat.percent;
        sumValues += value;

        const tdName = document.createElement('td');
        const tr = document.createElement('tr');
        const tdPerc = document.createElement('td');
        const tdVal = document.createElement('td');

        tdPerc.textContent = (Math.round(cat.percent * 100) / 100) + '%';
        tdVal.textContent = value.toFixed(2) + ' Eg';
        tdName.textContent = cat.name;

        tr.appendChild(tdPerc);
        tr.appendChild(tdVal);
        tr.appendChild(tdName);
        tableBody.appendChild(tr);
    });

    totalAmtEl.textContent = amount.toFixed(2) + ' Eg';
    sumPercEl.textContent = (Math.round(sumPercent * 100) / 100) + '%';
    noteEl.innerHTML = `<strong>المجموع المحسوب:</strong> ${sumValues.toFixed(2)} Eg — <strong>Total calculated:</strong> ${sumValues.toFixed(2)} Eg`;
}

calcBtn.addEventListener('click', () => {
    const val = parseFloat(amountInput.value);
    if (isNaN(val) || val < 0) {
        alert('ادخل مبلغ صحيح / Enter a valid amount');
        return;
    }
    renderTable(val);
});

// init example
amountInput.value = 0;

renderTable(0);



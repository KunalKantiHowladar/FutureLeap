document.getElementById('dataForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const year = Number(document.getElementById('year').value);
    const resultDiv = document.getElementById('result');
    const loadingDiv = document.getElementById('loading');
    resultDiv.textContent = '';
    resultDiv.style.display = 'none';
    if (isNaN(year)) {
        resultDiv.textContent = 'Please enter a valid year.';
        resultDiv.style.display = '';
        return;
    }
    loadingDiv.style.display = 'block';
    loadingDiv.innerHTML = `
        <div class="processing-animation">
            <span class="dot"></span><span class="dot"></span><span class="dot"></span>
        </div>
        <span style="font-size:1.5em;">🛰️</span><br>
        <b style="font-size:1.13em;">Processing your request using:</b>
        <ul style="text-align:left; max-width:320px; margin:12px auto 0 auto; color:#0ea5e9; font-size:1.08em;">
            <li>AI &amp; ML algorithms</li>
            <li>Satellite data analysis</li>
            <li>Global database search</li>
            <li>Predictive modeling</li>
            <li>Advanced computation</li>
        </ul>
        <span style="font-size:1.05em; color:#6366f1; font-weight:500;">Please wait while we find the next year...</span>
    `;
    setTimeout(() => {
        loadingDiv.style.display = 'none';
        resultDiv.innerHTML = `<span style="font-size:1.3em;">🎉</span> Next year is: <b>${year + 1}</b>`;
        resultDiv.style.display = '';
    }, 2500);
});

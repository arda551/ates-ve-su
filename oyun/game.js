document.addEventListener('DOMContentLoaded', function() {
    const fire = document.getElementById('fire'); // Ateş karakterini seç
    const water = document.getElementById('water'); // Su karakterini seç

    // Karakterleri hareket ettir
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowUp') {
            fire.style.top = (parseInt(fire.style.top) || 0) - 10 + 'px'; // Ateşi yukarı hareket ettir
        } else if (e.key === 'ArrowDown') {
            water.style.top = (parseInt(water.style.top) || 0) + 10 + 'px'; // Suyu aşağı hareket ettir
        }
    });
});

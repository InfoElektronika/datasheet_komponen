document.getElementById('search-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {  // Cek jika tombol yang ditekan adalah 'Enter'
        searchComponent();  // Panggil fungsi pencarian
    }
});


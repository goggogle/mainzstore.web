/*? no js js needed from me */
document.getElementById('searchButton').addEventListener('click', function() {
    const searchQuery = document.getElementById('searchInput').value;
    if (searchQuery) {
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
    }
});

// Menambahkan event listener untuk menekan 'Enter' agar bisa melakukan pencarian
document.getElementById('searchInput').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('searchButton').click();
    }
});

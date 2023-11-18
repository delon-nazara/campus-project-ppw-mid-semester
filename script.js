// Fungsi untuk scroll ke atas
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth', // Memberikan efek smooth scrolling
    });
}

// Fungsi untuk menampilkan tombol scroll ke atas saat telah melakukan scroll sejauh 20px dari atas halaman
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    var scrollButton = document.getElementById('scrollBtn');
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
}

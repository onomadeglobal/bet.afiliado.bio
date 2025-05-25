document.addEventListener("DOMContentLoaded", function() {
    window.onload = function() {
        const loadingScreen = document.getElementById('loading-screen');
        const content = document.getElementById('content');
        
        loadingScreen.style.display = 'none';
        content.style.display = 'block';
    };
});

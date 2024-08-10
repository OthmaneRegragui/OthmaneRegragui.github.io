document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('nav ul li, aside ul li');
    const content = document.getElementById('content');
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');
    function loadContent(page) {
        fetch(`./assets/pages/${page}.html`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                content.innerHTML = data;
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
                content.innerHTML = `<p>Sorry, the content could not be loaded.</p>`;
            });
    }
    loadContent("home")
    menuItems.forEach(item => {
        item.addEventListener('click', function () {
            menuItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
            
            const page = this.getAttribute('data-section');
            loadContent(page);

            if (window.innerWidth <= 768) {
                mainNav.classList.remove('show');
            }
        });
    });

    menuToggle.addEventListener('click', function () {
        mainNav.classList.toggle('show');
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            mainNav.classList.remove('show');
        }
    });
});

    function openURL(url){
        window.open(url, '_blank');
    }

const currentLocation = location.href;
const menuItems = document.querySelectorAll('.navbar-nav a');
for (let i = 0; i < menuItems.length; i++) {
    if (menuItems[i].href === currentLocation) {
        menuItems[i].classList.add('active');
    }
}
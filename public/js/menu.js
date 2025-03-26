
    // MENÚ
    const menuBtn = document.getElementById('menuBtn');
    const dropdownMenu = document.getElementById('dropdownMenu');

    menuBtn.addEventListener('click', () => {
        dropdownMenu.classList.toggle('menu-visible');
        dropdownMenu.classList.toggle('menu-hidden');
    });

    // Cerrar menú al hacer click fuera
    document.addEventListener('click', (e) => {
        if (!menuBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
            dropdownMenu.classList.add('menu-hidden');
            dropdownMenu.classList.remove('menu-visible');
        }
    });
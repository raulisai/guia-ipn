
    // MENÚ
    const menuBtn = document.getElementById('menuBtn');
    const dropdownMenu = document.getElementById('dropdownMenu');

    menuBtn.addEventListener('click', () => {
        dropdownMenu.classList.toggle('menu-hidden');
        dropdownMenu.classList.toggle('menu-visible');
    });

    // Cerrar menú al hacer click fuera
    document.addEventListener('click', (e) => {
        if (!menuBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
            dropdownMenu.classList.add('menu-hidden');
            dropdownMenu.classList.remove('menu-visible');
        }
    });
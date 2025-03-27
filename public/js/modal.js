
    // MODAL
      // Función para abrir el modal
      function openModal(content) {
        const modal = document.getElementById('modal');
        const modalContent = document.getElementById('modalContent');
        
        modalContent.textContent = `Has seleccionado: ${content}`;
        modal.classList.remove('hidden', 'modal-out');
        modal.classList.add('modal');
    }

    // Función para cerrar el modal
    function closeModal() {
        const modal = document.getElementById('modal');
        modal.classList.add('modal-out');
        
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 200); // Duración de la animación
    }

    // Modificar la función toggleCard
    function toggleCard(element) {
        document.querySelectorAll('.card').forEach(card => {
            card.classList.remove('selected');
        });

        enviarRespuesta('hello', 1)
        console.log('enviarRespuesta')
        
        element.classList.add('selected');
        const content = element.querySelector('p').textContent;
        openModal(content);
    }

    // Cerrar modal al hacer click fuera
    document.getElementById('modal').addEventListener('click', (e) => {
        if (e.target === document.getElementById('modal')) {
            closeModal();
        }
    });

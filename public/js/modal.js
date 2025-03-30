
    // MODAL
      // Función para abrir el modal
      function openModal(content,respuestaUser) {
        const modal = document.getElementById('modal');
        const modalContent = document.getElementById('modalContent');
        const problemDescription = document.getElementById('problemDescription');
        const explanation = document.getElementById('explanation');
        const solutionSteps = document.getElementById('solutionSteps');
        const formulas = document.getElementById('formulas');
        const example = document.getElementById('example');


        console.log('content:', content);
        console.log('respuestaUser:', respuestaUser);

        // Parse the JSON if needed
        const data = typeof content === 'string' ? JSON.parse(content) : content;

        // Populate the elements with the data
        problemDescription.textContent = data.shortDescripcionDelProblema || '';
        explanation.textContent = data.explicacionRespuesta || '';

        // Create bullet points for the solution steps
        solutionSteps.innerHTML = ''; // Clear existing content
        if (data.pasoParResolverElProblema && Array.isArray(data.pasoParResolverElProblema)) {
            const ul = document.createElement('ul');
            data.pasoParResolverElProblema.forEach(step => {
                const li = document.createElement('li');
                li.textContent = step;
                ul.appendChild(li);
            });
            solutionSteps.appendChild(ul);
        }

        formulas.textContent = data.formulasOrecordatorios || '';
        example.textContent = data.ejemploSimiliar || '';



        
        modalContent.textContent = `Has seleccionado: ${respuestaUser}`;
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
    async function toggleCard(element) {
        document.querySelectorAll('.card').forEach(card => {
            card.classList.remove('selected');
        });
        element.classList.add('selected');
        const respuestaUser = element.querySelector('p').textContent;
        const question = document.getElementById('question').textContent;
        try {
            // Esperar a que enviarRespuesta devuelva el resultado
            const explicacion = await enviarRespuesta(question, respuestaUser);
            openModal(explicacion, respuestaUser);
        } catch (error) {
            console.error('Error al obtener la explicación:', error);
            openModal('Hubo un error al obtener la explicación.');
        }
    }

    // Cerrar modal al hacer click fuera
    document.getElementById('modal').addEventListener('click', (e) => {
        if (e.target === document.getElementById('modal')) {
            closeModal();
        }
    });

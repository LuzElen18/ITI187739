document.addEventListener('DOMContentLoaded', function() {
    const tareaInput = document.getElementById('tareaInput');
    const agregarBtn = document.getElementById('agregarBtn');
    const listaTareas = document.getElementById('listaTareas');
    const eliminarFinalizadasBtn = document.getElementById('eliminarFinalizadasBtn');
    
    function agregarTarea() {
        const texto = tareaInput.value.trim();
        if (texto === '') {
            alert('Aun no haz escrito nada :( ');
            return;
        }
        
        const li = document.createElement('li');
        
        const span = document.createElement('span');
        span.textContent = texto;
        
        const okBtn = document.createElement('button');
        okBtn.textContent = 'acabe mi tarea';
        okBtn.className = 'acabe mi tarea-btn';
        
        okBtn.addEventListener('click', function() {
            span.classList.toggle('completada');
        });
        
        li.appendChild(span);
        li.appendChild(okBtn);
        listaTareas.appendChild(li);
        
        tareaInput.value = '';
    }
    

    function eliminarTareasFinalizadas() {
        const tareas = document.querySelectorAll('#listaTareas li');
        tareas.forEach(tarea => {
            if (tarea.querySelector('span').classList.contains('completada')) {
                tarea.remove();
            }
        });
    }
    

    agregarBtn.addEventListener('click', agregarTarea);
    
    tareaInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            agregarTarea();
        }
    });
    
    eliminarFinalizadasBtn.addEventListener('click', eliminarTareasFinalizadas);
});
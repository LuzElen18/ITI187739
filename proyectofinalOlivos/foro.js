document.addEventListener('DOMContentLoaded', function() {
    // Toggle para las preguntas frecuentes
    const faqItems = document.querySelectorAll('.faq-item h3');
    
    faqItems.forEach(item => {
        item.addEventListener('click', function() {
            const faqItem = this.parentElement;
            faqItem.classList.toggle('active');
            
            // Cerrar los demás items
            if (faqItem.classList.contains('active')) {
                document.querySelectorAll('.faq-item').forEach(otherItem => {
                    if (otherItem !== faqItem && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                    }
                });
            }
        });
    });

    // Manejo del formulario de comentarios
    const commentForm = document.getElementById('comment-form');
    
    if (commentForm) {
        commentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const comentario = document.getElementById('comentario').value;
            
            // Validación básica
            if (!nombre || !email || !comentario) {
                alert('Por favor completa todos los campos');
                return;
            }
            
            // Aquí podrías agregar código para enviar el formulario a un servidor
            console.log('Comentario enviado:', { nombre, email, comentario });
            
            // Mostrar mensaje de éxito y resetear el formulario
            alert('¡Gracias por tu comentario!');
            commentForm.reset();
        });
    }

    // Menú móvil
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const menu = document.querySelector('.menu');
    
    if (mobileMenuBtn && menu) {
        mobileMenuBtn.addEventListener('click', function() {
            menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
        });
        
        // Asegurarse de que el menú se cierre al hacer clic en un enlace
        const menuLinks = document.querySelectorAll('.menu a');
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    menu.style.display = 'none';
                }
            });
        });
    }
    
    // Ajustar el menú en resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            menu.style.display = 'flex';
        } else {
            menu.style.display = 'none';
        }
    });
});
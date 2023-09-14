const contenedor = document.getElementById("contenedor");

document.addEventListener('click', (event) => {
    if (event.target.matches('#btn-delete')) {
        const card = event.target.closest('.card');
        const idArticle = card.dataset.id;

        const confirmation = confirm('¿Estás seguro de que deseas eliminar este post?');
        
        if (confirmation) {
            fetch(`/delete/${idArticle}`, {
                method: 'DELETE',
            })
            .then(res => {
                if (res.status === 200) {
                    card.remove(); // Elimina la tarjeta (card) del post del DOM
                } else if (res.status === 404) {
                    alert('Post no encontrado');
                } else {
                    alert('Error en el servidor');
                }
            })
            .catch(err => {
                console.error(err);
            });
        }
    }
});

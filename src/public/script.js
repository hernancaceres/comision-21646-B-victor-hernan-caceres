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



/*
document.addEventListener('click', (event) => {
    if (event.target.matches('#btn-delete')) {
        console.log("Botón de eliminación clicado");
        const card = event.target.closest('.card');
        const idArticle = card.dataset.id;
        console.log("ID del elemento a eliminar:", idArticle);
            fetch(`/delete/${idArticle}`, {
                method: 'DELETE'
            }).then(res => {
                console.log("Respuesta del servidor:", res.status);
                if (res.ok) {
                    card.remove(); // Elimina la tarjeta (card) del post del DOM
                    console.log("Elemento eliminado con éxito");
                    location.reload();
                }
            }).catch(err => {
                console.error(err);
            });
        
    }
});






document.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-btn')) {
        const postId = event.target.dataset.id;

        const confirmation = confirm('¿Estás seguro de que deseas eliminar este post?');

        if (confirmation) {
            fetch(`delete/${postId}`, {
                method: 'DELETE',
            })
                .then(response => {
                    if (response.status === 200) {
                        // Si la solicitud DELETE se realiza correctamente, elimina el elemento del DOM
                        event.target.closest('.card').remove();
                    } else if (response.status === 404) {
                        alert('Post no encontrado');
                    } else {
                        alert('Error en el servidor');
                    }
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }
});


//funciona pero da error al elimina


function deletePost(postId) {
    const confirmation = confirm('¿Estás seguro de que deseas eliminar este post?');
    
    if (confirmation) {
        fetch(`/delete/${postId}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (response.status === 200) {
                // Redirige al usuario de vuelta a la página principal después de eliminar el post
                window.location.href = '/';
            } else if (response.status === 404) {
                alert('Post no encontrado');
            } else {
                alert('Error en el servidor');
            }
        })
        .catch(error => {
            console.error(error);
        });
    }
}*/

document.addEventListener("DOMContentLoaded", function () {
    // Obtener referencias a los formularios
    const señoraForm = document.getElementById('señoraForm');
    const productoForm = document.getElementById('productoForm');
    const puestoForm = document.getElementById('puestoForm');

    // Obtener las listas donde se mostrarán los registros
    const señorasList = document.getElementById('señorasList');
    const productosList = document.getElementById('productosList');
    const puestosList = document.getElementById('puestosList');

    // URL base de la API
    const API_URL = "http://127.0.0.1:8080/api"; // Ajustar el puerto y la URL si es necesario

    // ---------------- Señoras ----------------

    // Crear nueva señora
    señoraForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const señoraData = {
            nombre: document.getElementById('señoraNombre').value,
            celular: document.getElementById('señoraCelular').value,
            cedula: document.getElementById('señoraDocumento').value,
            id_puesto: document.getElementById('señoraPuesto').value
            
        };

        fetch(`${API_URL}/senyora`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(señoraData)
        })
        .then(response => response.json())
        .then(() => {
            alert("Señora registrada exitosamente");
            loadSeñoras();
        });
    });

    // Cargar señoras registradas
    function loadSeñoras() {
        fetch(`${API_URL}/senyora`)
            .then(response => response.json())
            .then(data => {
                señorasList.innerHTML = '';
                data.forEach(señora => {
                    señorasList.innerHTML += `
                        <tr>
                            <td>${señora.nombre}</td>
                            <td>${señora.celular}</td>
                            <td>${señora.cedula}</td>
                            <td>${señora.id_puesto}</td>
                            <td class="text-center">
                                <button class="btn btn-warning" onclick="editSeñora(${señora.id})">Editar</button>
                                <button class="btn btn-danger" onclick="deleteSeñora(${señora.id})">Eliminar</button>
                            </td>
                        </tr>
                    `;
                });
            });
    }

    // Eliminar señora
// Eliminar señora
function deleteSeñora(id) {
    fetch(`${API_URL}/senyora/${id}`, { // Cambiado señora.id por id
        method: "DELETE"
    }).then(() => {
        alert("Señora eliminada");
        loadSeñoras();
    });
}


    // ---------------- Productos ----------------

    // Crear nuevo producto
    productoForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const productoData = {
            nombre_producto: document.getElementById('productoNombre').value,
            precio: document.getElementById('productoPrecio').value,
            id_puesto: document.getElementById('productoPuesto').value
        };

        fetch(`${API_URL}/producto`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productoData)
        })
        .then(response => response.json())
        .then(() => {
            alert("Producto registrado exitosamente");
            loadProductos();
        });
    });

    // Cargar productos registrados
    function loadProductos() {
        fetch(`${API_URL}/producto`)
            .then(response => response.json())
            .then(data => {
                productosList.innerHTML = '';
                data.forEach(producto => {
                    productosList.innerHTML += `
                        <tr>
                            <td>${producto.nombre_producto}</td>
                            <td>${producto.precio}</td>
                            <td>${producto.id_puesto}</td>
                            <td class="text-center">
                                <button class="btn btn-warning" onclick="editProducto(${producto.id_producto})">Editar</button>
                                <button class="btn btn-danger" onclick="deleteProducto(${producto.id_producto})">Eliminar</button>
                            </td>
                        </tr>
                    `;
                });
            });
    }

    // Eliminar producto
    function deleteProducto(id) {
        fetch(`${API_URL}/producto/${id}`, {
            method: "DELETE"
        }).then(() => {
            alert("Producto eliminado");
            loadProductos();
        });
    }

    // ---------------- Puestos ----------------

    // Crear nuevo puesto
    puestoForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const puestoData = {
            ubicacion: document.getElementById('puestoUbicacion').value
        };

        fetch(`${API_URL}/puesto`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(puestoData)
        })
        .then(response => response.json())
        .then(() => {
            alert("Puesto registrado exitosamente");
            loadPuestos();
        });
    });

    // Cargar puestos registrados
    function loadPuestos() {
        fetch(`${API_URL}/puesto`)
            .then(response => response.json())
            .then(data => {
                puestosList.innerHTML = '';
                data.forEach(puesto => {
                    puestosList.innerHTML += `
                        <tr>
                            <td>${puesto.ubicacion}</td>
                            <td class="text-center">
                                <button class="btn btn-warning" onclick="editPuesto(${puesto.id})">Editar</button>
                                <button class="btn btn-danger" onclick="deletePuesto(${puesto.id})">Eliminar</button>
                            </td>
                        </tr>
                    `;
                });
            });
    }

    // Eliminar puesto
    function deletePuesto(id) {
        fetch(`${API_URL}/puesto/${id}`, {
            method: "DELETE"
        }).then(() => {
            alert("Puesto eliminado");
            loadPuestos();
        });
    }

    // Cargar los datos iniciales
    loadSeñoras();
    loadProductos();
    loadPuestos();
});

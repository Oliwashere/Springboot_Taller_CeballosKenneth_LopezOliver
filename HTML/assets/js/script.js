// Gestión de Señoras
document.getElementById('señoraForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let nombre = document.getElementById('señoraNombre').value.trim();
    let celular = document.getElementById('señoraCelular').value.trim();
    let documento = document.getElementById('señoraDocumento').value.trim();
    let puesto = document.getElementById('señoraPuesto').value.trim();

    if (!nombre || !celular || !documento || !puesto) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    let señora = {
        nombre: nombre,
        cedula: documento,
        celular: celular,
        id_puesto: puesto
    };

    fetch('http://localhost:8080/api/senyora', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(señora)
    })
    .then(response => response.json())
    .then(data => {
        alert("Señora añadida correctamente");
        loadSeñoras(); // Para recargar la lista de señoras
        document.getElementById('señoraForm').reset();
    })
    .catch(error => console.error('Error:', error));
});

function loadSeñoras() {
    fetch('http://localhost:8080/api/senyora')
    .then(response => response.json())
    .then(data => {
        let señoraList = document.getElementById('señorasList');
        señoraList.innerHTML = ''; // Limpiar la lista

        data.forEach(señora => {
            let row = document.createElement('tr');
            row.innerHTML = `
                <td>${señora.nombre}</td>
                <td>${señora.celular}</td>
                <td>${señora.cedula}</td>
                <td>${señora.id_puesto}</td>
                <td class="text-center">
                    <button class="btn btn-sm btn-warning" onclick="editSeñora(${señora.id_senyora})">Editar</button> 
                    <button class="btn btn-sm btn-danger" onclick="deleteSeñora(${señora.id_senyora})">Eliminar</button>
                </td>
            `;
            señoraList.appendChild(row);
        });
    })
    .catch(error => console.error('Error:', error));
}

function editSeñora(id_senyora) {
    fetch(`http://localhost:8080/api/senyora/${id_senyora}`)
    .then(response => response.json())
    .then(data => {
        document.getElementById('señoraNombre').value = data.nombre;
        document.getElementById('señoraCelular').value = data.celular;
        document.getElementById('señoraDocumento').value = data.cedula;
        document.getElementById('señoraPuesto').value = data.id_puesto;

        deleteSeñora(id_senyora); // Eliminar primero para después agregar el nuevo
    })
    .catch(error => console.error('Error:', error));
}

function deleteSeñora(id_senyora) {
    if (confirm("¿Estás seguro de que deseas eliminar esta señora?")) {
        fetch(`http://localhost:8080/api/senyora/${id_senyora}`, {
            method: 'DELETE'
        })
        .then(() => {
            alert("Señora eliminada correctamente");
            loadSeñoras();
        })
        .catch(error => console.error('Error:', error));
    }
}

// Gestión de Productos

function loadProductos() {
    fetch('http://localhost:8080/api/producto')
    .then(response => response.json())
    .then(data => {
        let productoList = document.getElementById('productosList');
        productoList.innerHTML = ''; // Limpiar la lista

        data.forEach(producto => {
            let row = document.createElement('tr');
            row.innerHTML = `
                <td>${producto.nombre_producto}</td>
                <td>$${producto.precio}</td>
                <td>${producto.id_puesto}</td>
                <td class="text-center">
                    <button class="btn btn-sm btn-warning" onclick="editProducto(${producto.id_producto})">Editar</button> 
                    <button class="btn btn-sm btn-danger" onclick="deleteProducto(${producto.id_producto})">Eliminar</button>
                </td>
            `;
            productoList.appendChild(row);
        });
    })
    .catch(error => console.error('Error:', error));
}

document.getElementById('productoForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let nombre = document.getElementById('productoNombre').value.trim();
    let precio = document.getElementById('productoPrecio').value.trim();
    let puesto = document.getElementById('productoPuesto').value.trim();

    if (!nombre || !precio || !puesto) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    let producto = {
        nombre_producto: nombre,
        precio: precio,
        id_puesto: puesto
    };

    fetch('http://localhost:8080/api/producto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(producto)
    })
    .then(response => response.json())
    .then(data => {
        alert("Producto añadido correctamente");
        loadProductos();
        document.getElementById('productoForm').reset();
    })
    .catch(error => console.error('Error:', error));
});

function editProducto(id_producto) {
    fetch(`http://localhost:8080/api/producto/${id_producto}`)
    .then(response => response.json())
    .then(data => {
        document.getElementById('productoNombre').value = data.nombre_producto;
        document.getElementById('productoPrecio').value = data.precio;
        document.getElementById('productoPuesto').value = data.id_puesto;

        deleteProducto(id_producto); // Eliminar primero para editar
    })
    .catch(error => console.error('Error:', error));
}

function deleteProducto(id_producto) {
    if (confirm("¿Estás seguro de que deseas eliminar este producto?")) {
        fetch(`http://localhost:8080/api/producto/${id_producto}`, {
            method: 'DELETE'
        })
        .then(() => {
            alert("Producto eliminado correctamente");
            loadProductos();
        })
        .catch(error => console.error('Error:', error));
    }
}


// Gestión de Puestos
document.getElementById('puestoForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let ubicacion = document.getElementById('puestoUbicacion').value.trim();

    if (!ubicacion) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    let puesto = {
        ubicacion: ubicacion
    };

    fetch('http://localhost:8080/api/puesto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(puesto)
    })
    .then(response => response.json())
    .then(data => {
        alert("Puesto añadido correctamente");
        loadPuestos();
        document.getElementById('puestoForm').reset();
    })
    .catch(error => console.error('Error:', error));
});

function loadPuestos() {
    fetch('http://localhost:8080/api/puesto')
    .then(response => response.json())
    .then(data => {
        let puestoList = document.getElementById('puestosList');
        puestoList.innerHTML = ''; // Limpiar la lista

        data.forEach(puesto => {
            let row = document.createElement('tr');
            row.innerHTML = `
                <td>${puesto.ubicacion}</td>
                <td class="text-center">
                    <button class="btn btn-sm btn-warning" onclick="editPuesto(${puesto.id_puesto})">Editar</button> 
                    <button class="btn btn-sm btn-danger" onclick="deletePuesto(${puesto.id_puesto})">Eliminar</button>
                </td>
            `;
            puestoList.appendChild(row);
        });
    })
    .catch(error => console.error('Error:', error));
}

function editPuesto(id_puesto) {
    fetch(`http://localhost:8080/api/puesto/${id_puesto}`)
    .then(response => response.json())
    .then(data => {
        document.getElementById('puestoUbicacion').value = data.ubicacion;
        deletePuesto(id_puesto);
    })
    .catch(error => console.error('Error:', error));
}

function deletePuesto(id_puesto) {
    if (confirm("¿Estás seguro de que deseas eliminar este puesto?")) {
        fetch(`http://localhost:8080/api/puesto/${id_puesto}`, {
            method: 'DELETE'
        })
        .then(() => {
            alert("Puesto eliminado correctamente");
            loadPuestos();
        })
        .catch(error => console.error('Error:', error));
    }
}

function showSection(sectionId) {
    document.getElementById('señoraSection').style.display = 'none';
    document.getElementById('productoSection').style.display = 'none';
    document.getElementById('puestoSection').style.display = 'none';
    document.getElementById(sectionId + 'Section').style.display = 'block';
}

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

    let row = document.createElement('tr');
    row.innerHTML = `
        <td>${nombre}</td>
        <td>${celular}</td>
        <td>${documento}</td>
        <td>${puesto}</td>
        <td class="text-center">
            <button class="btn btn-sm btn-warning" onclick="editSeñora(this)">Editar</button> 
            <button class="btn btn-sm btn-danger" onclick="deleteSeñora(this)">Eliminar</button>
        </td>
    `;
    document.getElementById('señorasList').appendChild(row);
    document.getElementById('señoraForm').reset();
});

function editSeñora(button) {
    let row = button.closest('tr');
    document.getElementById('señoraNombre').value = row.cells[0].textContent;
    document.getElementById('señoraCelular').value = row.cells[1].textContent;
    document.getElementById('señoraDocumento').value = row.cells[2].textContent;
    document.getElementById('señoraPuesto').value = row.cells[3].textContent;
    row.remove();
}

function deleteSeñora(button) {
    if (confirm("¿Estás seguro de que deseas eliminar esta señora?")) {
        button.closest('tr').remove();
    }
}

// Gestión de Productos
document.getElementById('productoForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let nombre = document.getElementById('productoNombre').value.trim();
    let precio = document.getElementById('productoPrecio').value.trim();
    let puesto = document.getElementById('productoPuesto').value.trim();

    if (!nombre || !precio || !puesto) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    let row = document.createElement('tr');
    row.innerHTML = `
        <td>${nombre}</td>
        <td>$${precio}</td>
        <td>${puesto}</td>
        <td class="text-center">
            <button class="btn btn-sm btn-warning" onclick="editProducto(this)">Editar</button> 
            <button class="btn btn-sm btn-danger" onclick="deleteProducto(this)">Eliminar</button>
        </td>
    `;
    document.getElementById('productosList').appendChild(row);
    document.getElementById('productoForm').reset();
});

function editProducto(button) {
    let row = button.closest('tr');
    document.getElementById('productoNombre').value = row.cells[0].textContent;
    document.getElementById('productoPrecio').value = row.cells[1].textContent.replace('$', '');
    document.getElementById('productoPuesto').value = row.cells[2].textContent;
    row.remove();
}

function deleteProducto(button) {
    if (confirm("¿Estás seguro de que deseas eliminar este producto?")) {
        button.closest('tr').remove();
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

    let row = document.createElement('tr');
    row.innerHTML = `
        <td>${ubicacion}</td>
        <td class="text-center">
            <button class="btn btn-sm btn-warning" onclick="editPuesto(this)">Editar</button> 
            <button class="btn btn-sm btn-danger" onclick="deletePuesto(this)">Eliminar</button>
        </td>
    `;
    document.getElementById('puestosList').appendChild(row);
    document.getElementById('puestoForm').reset();
});

function editPuesto(button) {
    let row = button.closest('tr');
    document.getElementById('puestoUbicacion').value = row.cells[0].textContent;
    row.remove();
}

function deletePuesto(button) {
    if (confirm("¿Estás seguro de que deseas eliminar este puesto?")) {
        button.closest('tr').remove();
    }
}

// Función para mostrar la sección adecuada
function showSection(sectionId) {
    document.getElementById('señoraSection').style.display = 'none';
    document.getElementById('productoSection').style.display = 'none';
    document.getElementById('puestoSection').style.display = 'none';
    document.getElementById(sectionId + 'Section').style.display = 'block';
}

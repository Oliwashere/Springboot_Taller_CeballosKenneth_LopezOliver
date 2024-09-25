const apiUrl = '/api/personas';

document.addEventListener('DOMContentLoaded', () => {
    fetchPersons();
    document.getElementById('searchInput').addEventListener('input', filterPersons);
    document.getElementById('personForm').addEventListener('submit', addPerson);
});

async function fetchPersons() {
    const response = await fetch(apiUrl);
    const persons = await response.json();
    renderPersons(persons);
}

async function addPerson(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);
    const email = document.getElementById('email').value;

    const newPerson = { name, age, email };
    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPerson)
    });
    const createdPerson = await response.json();
    clearForm();
    fetchPersons(); // Refrescar la lista de personas
}

function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('email').value = '';
}

function renderPersons(persons) {
    const personTableBody = document.getElementById('personTableBody');
    personTableBody.innerHTML = '';

    persons.forEach(person => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${person.id}</td>
            <td>${person.name}</td>
            <td>${person.age}</td>
            <td>${person.email}</td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="deletePerson(${person.id})">Eliminar</button>
            </td>
        `;
        personTableBody.appendChild(row);
    });
}

async function deletePerson(id) {
    await fetch(`${apiUrl}/${id}`, { method: 'DELETE' });
    fetchPersons(); // Refrescar la lista de personas
}

function filterPersons() {
    const searchValue = document.getElementById('searchInput').value.toLowerCase();
    const personTableBody = document.getElementById('personTableBody');
    const rows = personTableBody.getElementsByTagName('tr');

    for (let row of rows) {
        const nameCell = row.getElementsByTagName('td')[1].textContent.toLowerCase();
        const emailCell = row.getElementsByTagName('td')[3].textContent.toLowerCase();
        if (nameCell.includes(searchValue) || emailCell.includes(searchValue)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    }
}

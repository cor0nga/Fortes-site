document.addEventListener("DOMContentLoaded", function() {
    carregarAtendimentos();
});

function carregarAtendimentos() {
    const atendimentos = JSON.parse(localStorage.getItem("atendimentos")) || [];
    const tbody = document.getElementById("atendimentos-table").querySelector("tbody");
    tbody.innerHTML = "";

    atendimentos.forEach(atendimento => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${atendimento.id}</td>
            <td>${atendimento.titulo}</td>
            <td>${atendimento.projeto}</td>
            <td>${atendimento.categoria}</td>
            <td>${atendimento.status}</td>
        `;

        tbody.appendChild(row);
    });
}
document.addEventListener("DOMContentLoaded", function() {
    carregarAtendimentos();
});

function criarAtendimento() {
    const titulo = document.getElementById("titulo").value;
    const projeto = document.getElementById("projeto").value;
    const categoria = document.getElementById("categoria").value;
    const texto = document.getElementById("texto-assunto").value;

    const atendimento = {
        id: new Date().getTime(),
        titulo: titulo,
        projeto: projeto,
        categoria: categoria,
        texto: texto,
        status: "Pendente"
    };

    let atendimentos = JSON.parse(localStorage.getItem("atendimentos")) || [];
    atendimentos.push(atendimento);
    localStorage.setItem("atendimentos", JSON.stringify(atendimentos));
    document.getElementById("new-atendimento-form").reset();
}

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
            <td>
                <button onclick="excluirAtendimento(${atendimento.id})">Excluir</button>
                <button onclick="concluirAtendimento(${atendimento.id})">Concluir</button>
            </td>
        `;

        tbody.appendChild(row);
    });
}

function editarAtendimento(id) {
    const atendimentos = JSON.parse(localStorage.getItem("atendimentos")) || [];
    const atendimento = atendimentos.find(atendimento => atendimento.id === id);

    document.getElementById("titulo").value = atendimento.titulo;
    document.getElementById("projeto").value = atendimento.projeto;
    document.getElementById("categoria").value = atendimento.categoria;
    document.getElementById("texto").value = atendimento.texto;

    excluirAtendimento(id);
}

function excluirAtendimento(id) {
    let atendimentos = JSON.parse(localStorage.getItem("atendimentos")) || [];
    atendimentos = atendimentos.filter(atendimento => atendimento.id !== id);
    localStorage.setItem("atendimentos", JSON.stringify(atendimentos));
    carregarAtendimentos();
}

function concluirAtendimento(id) {
    let atendimentos = JSON.parse(localStorage.getItem("atendimentos")) || [];
    atendimentos = atendimentos.map(atendimento => {
        if (atendimento.id === id) {
            atendimento.status = "Concluído";
        }
        return atendimento;
    });
    localStorage.setItem("atendimentos", JSON.stringify(atendimentos));
    carregarAtendimentos();
}

function voltar(){
    history.go(-2)
}

function logar(){
    //pegar var ou let no caso
    let login = window.document.getElementById("login").value
    let senha = window.document.getElementById("senha").value

    if(login == "Administrador" && senha == "adm123"){

        window.location.href = './adm/index.html'

    }else if(login == "Donatario01" && senha == "dona123"){

        window.location.href = './donatario/index.html'

    }else{
        
        alert("Usuário ou senha invalido")
        //apagar campos
        document.getElementById("login").value=''
        document.getElementById("senha").value=''
  
    }
}



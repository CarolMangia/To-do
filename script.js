document.querySelector('#pressione').onclick = function(){
    if(document.querySelector('#novatarefa input').value.length == 0){
        alert("Por favor escreva uma nova tarefa")
    }
    else{
        document.querySelector('#tarefas').innerHTML += `
            <div class="tarefa">
                <span id="nometarefa">
                    ${document.querySelector('#novatarefa input').value}
                </span>
                <button class="deletar">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        var segtarefas = document.querySelectorAll(".deletar");
        for(var i=0; i<segtarefas.length; i++){
            segtarefas[i].onclick = function(){
                this.parentNode.remove();
            }
        }

        var tarefas = document.querySelectorAll(".tarefa");
        for(var i=0; i<tarefas.length; i++){
            tarefas[i].onclick = function(){
                this.classList.toggle('completo');
            }
        }

        document.querySelector("#novatarefa input").value = "";
    }
    function cadastrar(){
      
        document.getElementById('tudo').style.display="block";
  
      }
        function exibir(){
        
          document.getElementById('tudo').style.display="none";
          
  
        }

        function adicionar()
        {
            
          var conteudo= document.getElementById('texto').value; 
          if(conteudo!="") { var cont=1;
          var novoElemento= document.createTextNode(conteudo);
          var Novadiv= document.createElement('div');
          Novadiv.style.position='relative';
          Novadiv.style.backgroundColor='black';
          Novadiv.style.borderRadius='5px';
          Novadiv.style.color='white';
          Novadiv.style.border='solid 2px';
          Novadiv.style.borderColor='purple'; 
        }
     }
  



        function user(){

            var ad = document.getElementById("ad");
            var login = document.getElementById("login").value;
            var nome = document.getElementById("nome").value;
            var senha = document.getElementById("senha").value;
            var verificar = document.getElementById("confirmarsenha").value;
            var email = document.getElementById("email").value;

            user.innerHTML= "Nome: "+ nome +'<br>'+ '<hr>'+
            "Login: "+ login +'<br>'+ '<hr>'+
            "Senha: "+ senha +'<br>'+'<hr>'+
           "Email: "+ email ;
        
        }
}
const inputTarefa = document.getElementById("Nova Tarefa");
const botaoAdicionar = document.getElementById("Adicionar");
const listarTarefa = document.getElementById("Listar Tarefa");

//função adicionar tarefa
function adicionarTarefa(){
    const tarefaTexto = inputTarefa.ariaValueMax.trim(); //Valor Input
    if (tarefaTexto != ""){//Verifica se Campo está vazio
        const li = document.createElement("li");}//Criar um Novo Item 
        li.textContent = TarefaTexto   //atribui texto ao item

        //Botão para remover itens
        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "Remover";
        botaoRemover.classlist.add("remover"); //adiciona classe botaoRemover

        //Adicion botaoRemover ao Item
        li.appendChild(botaoRemover);

        //Adicionar Item na Lista
        listarTarefa.appendChild(li);

        //Limpar Campo Entrada
        inputTarefa.value = " ";
        inputTarefa.focus();
        
//Evento adicionar Tarefa (botão)
botaoAdicionar.adEventListener("click", adicionarTarefa);

//Função Remover Tarefa 
function removerTarefa(event){
    if (event.targer.tafName == "Button"){
        event.target.parentElement.remove(); //Remover Item Lista
    }
}
} 

//Evento Remover Tarefa ao Clicar em Botao Remover
listarTarefa.addEventListener("click", removerTarefa)


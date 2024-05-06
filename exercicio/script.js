const Fila =  (_LocaSaida) =>{
    let LocaSaida = _LocaSaida;
    let dados = [];
    const tamanho = () => dados.length;
    const estaVazia = () => dados.length < 1;
    const enfileirar = valor => {
        dados.push(valor);
        imprimir();
    }
    const desinfilerar = () =>{
        dados.splice(0,1);
        imprimir();
    }
    const imprimir = () => {
        console.log(dados);
        dado_saida = "";
        for(let i = 0; i < tamanho (); i++){
            dado_saida += dados [i].id + "("+dados[i].itens+")";
        }
        document.getElementById(LocaSaida).innerHTML = dado_saida;
    }
    return {
        enfileirar, desinfilerar
    }
}
const f1 = Fila('saidaFilaGeral');

const Cliente = (_id,_itens) =>{
    return {
        id: _id,
        itens : _itens
}
const chamarCx1 = ()=> {
    
}
    }
    const gerarItens=()=>Math.floor(Math.random() * (15-3) +  2 );
    const tamanhoInicialFila=15; 
(function(){ 
    for(let i=1; i <= tamanhoInicialFila; i++){
        f1.enfileirar(Cliente("P"+i,gerarItens()));
    }

})();
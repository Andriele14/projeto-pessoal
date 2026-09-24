let dinheiroRecebido = 300;
let gastos = 60;
let meta = 140

let  dinheiroRestante = dinheiroRecebido - gastos;

console.log("=== ORGANIZANDO O MEU DINHEIRO ===");

console.log("Dinheiro recebido: R$ " + dinheiroRecebido);
console.log("Total de gastos: R$ " + gastos);
console.log("Dinheiro restante: R$ " + dinheiroRestante);

if (dinheiroRestante >= meta) {
 console.log("Parabéns! Você conseguiu atingir sua meta.");
} else {
    console.log("Você ainda não conseguiu atingir sua meta");
}

if (gastos > dinheiroRecebido) {
    console.log("Muito bem! Seus gastos estão dentro do seu orçamento");
} else {
    console.log("Cuidado! Seus gastos são maiores que o dinheiro recebido");
}
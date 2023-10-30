// Capturar os elementos HTML pelos seus IDs
const tituloElement = document.getElementById('titulo');
const linkElement = document.getElementById('link');
const listaNaoOrdenadaElement = document.querySelector('ul');
const listaOrdenadaElement = document.getElementById('lista-ordenada');

// Adicionar conteúdo textual aos elementos h1 e a
tituloElement.innerText = 'Título da Página';
linkElement.innerText = 'Link para o Prozeducacao';

// Adicionar três itens simples na lista não ordenada
const itensNaoOrdenados = ['Item 1', 'Item 2', 'Item 3'];
itensNaoOrdenados.forEach(item => {
    const listItem = document.createElement('li');
    listItem.innerText = item;
    listaNaoOrdenadaElement.appendChild(listItem);
});

// Adicionar três itens com links para outros sites na lista ordenada
const itensOrdenados = [
    { texto: 'Google', url: 'https://www.google.com' },
    { texto: 'Facebook', url: 'https://www.facebook.com' },
    { texto: 'Twitter', url: 'https://www.twitter.com' }
];

itensOrdenados.forEach(item => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = item.url;
    link.innerText = item.texto;
    listItem.appendChild(link);
    listaOrdenadaElement.appendChild(listItem);
});

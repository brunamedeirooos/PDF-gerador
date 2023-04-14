//selecionando o botão
const btnGenerate = document.querySelector("#generate-pdf");

//adicionando evento de click no botao que executará uma função
btnGenerate.addEventListener("click", () => {

    //selecionando o conteudo que será extraido do html para virar arquivo - baseado no meu id content
    const content = document.querySelector("#content")

    //configuração do arquivo final
    const options = {
        margin: [10, 10, 10, 10],
        filename: "arquivo.pdf",
        html2canvas: {scale: 2},
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait"}

    }

    //gerar e baixar o pdf
    html2pdf().set(options).from(content).save();

} )
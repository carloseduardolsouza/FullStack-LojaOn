const getProducts = async (produto) => {
    if(produto) {
        const response = await fetch(`http://localhost:3311/sherProducts/${produto}`);
        return response.json(); 
    } else {
        const response = await fetch(`http://localhost:3311/getProducts`);
        return response.json();
    }
}

const getProductsId = async (id) => {
    const response = await fetch(`http://localhost:3311/getProducts/${id}`);
    return response.json();
}

const NovoProduto = async (dados , imageReq) => {
    try {
        const filePadrao = new Blob(['file_padrão'], { type: 'text/plain' });
        const formData = new FormData();
        formData.append('dados', JSON.stringify(dados));
        if(imageReq == undefined) {
            formData.append(`image` , filePadrao)
        } else {
        imageReq.forEach((image) => {
            formData.append(`image`, image); // Adiciona cada imagem com uma chave diferente
        });
        }

        const response = await fetch('http://localhost:3311/cadastrarProduto', {
            method: 'POST',
            body: formData
        });
        
        if (!response.ok) {
            throw new Error('Erro ao tentar adicionar novo cliente');
        }

        return response;
    } catch (error) {
        // Aqui você pode tratar o erro da forma desejada
        console.error('Erro ao tentar fazer a requisição:', error.message);
        // Por exemplo, você pode exibir uma mensagem de erro para o usuário
        alert('A API PROVAVELMENTE ESTA INATIVA, ATIVE E TENTE NOVAMENTE');
    }
}

export default {
    getProducts,
    getProductsId,
    NovoProduto
};

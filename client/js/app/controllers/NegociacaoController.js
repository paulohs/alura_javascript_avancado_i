class NegociacaoController
{
    constructor()
    {
        let $ = document.querySelector.bind(document);
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
    }


    _criarNegociacao(data, quantidade, valor)
    {
        return new Negociacao(
            data,
            quantidade,
            valor
        );
    }

    adiciona(event)
    {
        event.preventDefault();

        let negociacao = this._criarNegociacao(new Date(
            ...this._inputData.value.split('-')
                .map((item, indice) => item - indice % 2)), 
            this._inputQuantidade.value,
            this._inputValor.value);

        console.log(negociacao);

        _limparFormulario();
    }

    _limparFormulario()
    {
        this._inputData.value = "";
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;

        this._inputData.focus();
    }
}
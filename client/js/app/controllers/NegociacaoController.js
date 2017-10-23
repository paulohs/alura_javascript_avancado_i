class NegociacaoController
{
    constructor()
    {
        let $ = document.querySelector.bind(document);
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");

        this._listaNegociacoes = new ListaNegociacoes();
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

        let negociacao = this._criarNegociacao(DataHelper.textoParaData(this._inputData.value), 
            this._inputQuantidade.value,
            this._inputValor.value);
        console.log(DataHelper.dataParaTexto(negociacao.data));

        this._listaNegociacoes.adicionar(negociacao);
        console.log(this._listaNegociacoes.negociacoes);

        this.limparFormulario();
    }

    limparFormulario()
    {
        this._inputData.value = "";
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;

        this._inputData.focus();
    }
}
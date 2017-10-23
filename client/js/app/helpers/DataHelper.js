class DataHelper
{
    constructor()
    {
        throw new Error('DataHelper não pode ser instânciada');
    }

    static textoParaData(texto)
    {
        if (!/^\d{4}-\d{2}-\d{2}$/.test(texto))
            throw new Error('A data deve ser informada no formato yyyy-mm-dd');

        return new Date(...texto.split('-')
            .map((item, indice) => item - indice % 2))
    }

    static dataParaTexto(data)
    {
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
    }
}
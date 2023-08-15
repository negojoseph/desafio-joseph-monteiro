class CaixaDaLanchonete {
    constructor() {
        this.cardapio = {
            cafe: {
                descricao: 'Café',
                valor: 3.00
            },
            chantily: {
                descricao: 'Chantily (extra do Café)',
                valor: 1.50
            },
            suco: {
                descricao: 'Suco Natrual',
                valor: 6.20
            },
            sanduiche: {
                descricao: 'Sanduíche',
                valor: 6.50
            },
            queijo: {
                descricao: 'Queijo (extra do sanduíche)',
                valor: 2.00
            },
            salgado: {
                descricao: 'Salgado',
                valor: 7.25
            },
            combo1: {
                descricao: '1 Suco e 1 Sanduíche',
                valor: 9.50
            },
            combo2: {
                descricao: '1 café e 1 sanduíche',
                valor: 7.50
            },
        },
            this.formasDePagamento = ['dinheiro', 'debito', 'credito']
    }

    calcularValorDaCompra(metodoDePagamento, itens) {
        let itemPrincipal = []
        let pedido = []
        let quantidade = 0
        let codigo = ''
        let valorTotalDoItem = 0
        let valorTotal = 0

        if (this.formasDePagamento.includes(metodoDePagamento) === false) {
            return 'Forma de pagamento inválida!'
        }
        if (itens.length === 0) {
            return 'Não há itens no carrinho de compra!'
        }

        for (let item of itens) {
            pedido = item.split(',')
            quantidade = Number(pedido[1])
            codigo = pedido[0]
            if (this.cardapio[codigo] === undefined) {
                return 'Item inválido!'
            } else {
                itemPrincipal.push(codigo)
            }
            if (quantidade === 0) {
                return 'Quantidade inválida!'
            }
            if (codigo === 'chantily' && !(itemPrincipal.includes('cafe'))) {
                return 'Item extra não pode ser pedido sem o principal'
            }
            if (codigo === 'queijo' && !(itemPrincipal.includes('sanduiche'))) {
                return 'Item extra não pode ser pedido sem o principal'
            }

            valorTotalDoItem = this.cardapio[codigo].valor * quantidade
            valorTotal += valorTotalDoItem
        }

        if (metodoDePagamento === 'dinheiro') {
            valorTotal *= 0.95
        }
        if (metodoDePagamento === 'credito') {
            valorTotal *= 1.03
        }
        return `R$ ${valorTotal.toFixed(2).replace('.', ',')}`;
    }

}

export { CaixaDaLanchonete };

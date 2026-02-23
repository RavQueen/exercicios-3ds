function validarPedido(pedido) {
    if(pedido.total <= 0){
        return false
    } else if(pedido.cliente == undefined || pedido.cliente == null) {
        return false
    } else if(pedido.itens.length <= 0) {
        return false
    } else {
        return true
    }
}

module.exports = validarPedido
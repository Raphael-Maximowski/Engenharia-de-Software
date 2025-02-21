let pedidos = [
    { id: 1, cliente: 'Pedro', endereco: 'Rua 11', status: 'entregue' },
    { id: 2, cliente: 'Jose', endereco: 'Rua 12', status: 'pendente' },
    { id: 3, cliente: 'Paulo', endereco: 'Rua 13', status: 'entregue' },
    { id: 4, cliente: 'Roberto', endereco: 'Rua 14', status: 'entregue' },
    { id: 5, cliente: 'Alfredo', endereco: 'Rua 15', status: 'entregue' }
]

const updatePedido = (pedidoId) => {
    const index = pedidos.findIndex((item) => item.id === pedidoId)
    if (index !== -1) {
        pedidos[index].status = 'entregue'

        console.log("Atualizado: ", pedidos[index])
    }
}

setTimeout(() => {
    updatePedido(2)
}, 3000)

const listUsers = new Promise((success, rejected) => {
    const successState = true
    if (successState) {
        success(console.log("Pedidos: ", pedidos))
    } else {
        rejected(console.log("Erro ao Buscar Pedidos"))
    }
}, 2000)

listUsers.then(() => {
    console.log("Usuarios já Listados!")
}).catch(() => {
    console.log("Nenhum usuario recebido")
})
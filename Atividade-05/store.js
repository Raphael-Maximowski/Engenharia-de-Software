
let totalCredit = 200
let totalInCheckout = 0
const shoppingCartItems = []
const products = [
    { name: 'Camiseta', value: 100, id: 1 },
    { name: 'Tenis', value: 70, id: 2 },
    { name: 'Calça', value: 100, id: 3 },
    { name: 'Boné', value: 30, id: 4 }
]


const insertItemInShoppingCart = (productId) => {
    const itemToAddIndex = products.findIndex((i) => i.id === productId)
    itemToAddIndex !== -1 && (shoppingCartItems.push(products[itemToAddIndex]))
}

const removeItemFromShoppingCart = (productId) => {
    const itemToRemoveIndex = shoppingCartItems.findIndex((i) => i.id === productId)
    itemToRemoveIndex !== -1 && (shoppingCartItems.splice(itemToRemoveIndex, 1))
}

const checkIfUserHaveCredit = () => {
    totalInCheckout = 0
    shoppingCartItems.forEach((i) => {
        totalInCheckout += i.value
    })

    if (totalInCheckout > totalCredit) {
        console.log("Saldo Insuficiente para compra! Retire alguns Itens!")
        return false
    }

    console.log("\nSaldo Liberado\n")
    return true
}

const showItemsInShoppingCart = () => {
    let totalAcumulated = 0
    console.log("Itens No Carrinho: \n")
    shoppingCartItems.forEach((item) => {
        console.log(`Item: ${item.name} - Valor: R$${item.value}`)
        totalAcumulated += item.value
    })

    console.log(`\nTotal: R$${totalAcumulated}`)
}

const buyItems = async () => {
    if (!await checkIfUserHaveCredit()) return

    totalCredit -= totalInCheckout
    console.log("Compra Realizada!")
    console.log(`Crédito Final: R$${totalCredit}`)

}

insertItemInShoppingCart(1)
insertItemInShoppingCart(2)
insertItemInShoppingCart(3)
insertItemInShoppingCart(4)

showItemsInShoppingCart()

buyItems()

removeItemFromShoppingCart(1)

buyItems()
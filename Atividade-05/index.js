const userInputElement = document.getElementById('user')
const passwordInputElement = document.getElementById('password')
const loginButtonElement = document.getElementById('loginButton')
const statusMessageElement = document.getElementById('statusMessage')
const visibilityButton = document.getElementById('visibilityButton')
let showPassword = false

const passwordPattern = 12345
let tryChancesAvaliable = 3

loginButtonElement.addEventListener('click', (e) => {
    e.preventDefault()
    validateUserPassword()
})

visibilityButton.addEventListener('click', (e) => {
    e.preventDefault()
    handlePasswordVisibility()
})

const handlePasswordVisibility = () => {
    showPassword = !showPassword
    showPassword ? passwordInputElement.type = 'auto' : passwordInputElement.type = 'password'
}

const validateUserPassword = () => {
    if (!passwordInputElement.value || !userInputElement.value) {
        statusMessageElement.textContent = `Todos os campos são obrigatórios`
        return
    }

    if (tryChancesAvaliable === 0) {
        statusMessageElement.textContent = 'Acesso Bloqueado'
        return
    }

    if (passwordInputElement.value != passwordPattern) {
        tryChancesAvaliable--
        statusMessageElement.textContent = `Senha incorreta. Tente novamente.! \nTentativas Restantes: ${tryChancesAvaliable}`
        return
    }

    statusMessageElement.textContent = `Seja bem vindo ${userInputElement.value}! `
}
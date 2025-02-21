
const incrementButton = document.getElementById('increment-button')
const clickCounterText = document.getElementById('click-counter-text')
const userNameInput = document.getElementById('user-name-input')
let clickCounter = 0

const incrementClick = () => {
    if (!userNameInput.value) {
        clickCounterText.textContent = 'Preencha o seu nome para usar o contador!'
        clickCounterText.style.color = 'red'
        return
    }

    clickCounter++
    clickCounterText.textContent = `Usuario ${userNameInput.value}: Clicou ${clickCounter} vezes`
    clickCounterText.style.color = 'white'
}

const setButtonCustomColor = (event) => {
    if (event === 'mouseover') {
        incrementButton.style.backgroundColor = 'white'
        incrementButton.style.color = '#212529'
        return
    }

    incrementButton.style.backgroundColor = '#212529'
    incrementButton.style.color = 'white'
}

const registerName = () => {
    clickCounter = 0

    if (!userNameInput.value) {
        console.log("Nenhum nome inserido!")
        return
    }
    console.log("Nome Inserido: ", userNameInput.value)
}

incrementButton && (
    incrementButton.addEventListener('click', () => {
        incrementClick()
    }),
        incrementButton.addEventListener('mouseover', () => {
            setButtonCustomColor('mouseover')
        }),
        incrementButton.addEventListener('mouseleave', () => {
            setButtonCustomColor('mouseleave')
        })
)

userNameInput && (
    userNameInput.addEventListener('input', () => {
        registerName()
    }),
        userNameInput.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                incrementClick();
            }
        })
)

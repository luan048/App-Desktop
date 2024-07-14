//Function Senha Visivel

function visibilityPassword() {
    const inputPassword = document.getElementById('inputPassword')
    const eye = document.getElementById('eye-slash')

    if (inputPassword.type === 'password') {
        inputPassword.type = 'text'
        eye.classList.remove('fa-eye-slash')
        eye.classList.add('fa-eye')
    }

    else {
        inputPassword.type = 'password'
        eye.classList.remove('fa-eye')
        eye.classList.add('fa-eye-slash')
    }
}

// Fim senha invisivel

// Message Sucessfully

function messageSucessfully() {
    const messageSucessfully = document.getElementById('messageSucessfully')
    const inputName = document.querySelector('.inputName').value.trim()
    const inputPassword = document.querySelector('.inputPassword').value.trim()

    if (inputName !== '' && inputPassword !== '') {
        messageSucessfully.classList.add('show')

        setTimeout(() => {
            messageSucessfully.classList.remove('show')
        }, 1400)
    }
}

// Fim Message Sucessfully
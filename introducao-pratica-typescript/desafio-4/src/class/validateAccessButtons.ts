function aproveButtonsValidate() {
    let login = '';
    let password = '';
    let apiKey = '';
    let loginField = document.getElementById('login') as HTMLInputElement;
    let passwordField = document.getElementById('password') as HTMLInputElement;
    let apiKeyField = document.getElementById('api-key') as HTMLInputElement;
    let loginButton = document.getElementById('login-button') as HTMLButtonElement;
    let tokenButton = document.getElementById('approve-token') as HTMLButtonElement;

    loginField.addEventListener('change', () => {
        login = loginField.value;
        if(login != '' && password != '' && tokenButton.disabled === false) loginButton.disabled = false;
        else loginButton.disabled = true;
    });
    passwordField.addEventListener('change', () => {
        password = passwordField.value;
        if(login != '' && password != '' && tokenButton.disabled == false) loginButton.disabled = false;
        else loginButton.disabled = true;
    });
    apiKeyField.addEventListener('change', () => {
        apiKey = apiKeyField.value;
        if(apiKey == '') {
            tokenButton.disabled = true
        } else {
            tokenButton.disabled = false
        }
    });
}

export class ValidateAccessButtons {
    static approveAccessButtons() {
        aproveButtonsValidate();
    }
}
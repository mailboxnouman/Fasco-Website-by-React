const handleInputChange = () => {
    const emailInput = document.getElementById('emailInput');
    const passwordInput = document.getElementById('passwordInput');

    const handleInput = (input) => {
        const label = input.nextElementSibling;
        if (input.value.trim() !== '' || input === document.activeElement) {
            label.style.top = '-5px';
        } else {
            label.style.top = '50%';
        }
    };

    emailInput.addEventListener('input', () => {
        handleInput(emailInput);
    });

    passwordInput.addEventListener('input', () => {
        handleInput(passwordInput);
    });

    emailInput.addEventListener('focus', () => {
        handleInput(emailInput);
    });

    emailInput.addEventListener('blur', () => {
        handleInput(emailInput);
    });

    passwordInput.addEventListener('focus', () => {
        handleInput(passwordInput);
    });

    passwordInput.addEventListener('blur', () => {
        handleInput(passwordInput);
    });
};

export default handleInputChange;

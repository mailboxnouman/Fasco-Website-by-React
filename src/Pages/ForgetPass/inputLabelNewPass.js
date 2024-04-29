const handleInputChange = () => {
    const confirmPasswordInput = document.getElementById('ConfirmPasswordInput');

    const handleInput = (input) => {
        const label = input.nextElementSibling;
        if (input.value.trim() !== '' || input === document.activeElement) {
            label.style.top = '-5px';

        } else {
            label.style.top = '50%';
        }
    };

    confirmPasswordInput.addEventListener('input', () => {
        handleInput(confirmPasswordInput);
    });


    confirmPasswordInput.addEventListener('focus', () => {
        handleInput(confirmPasswordInput);
    });
    

    confirmPasswordInput.addEventListener('blur', () => {
        handleInput(confirmPasswordInput);
    });


};

export default handleInputChange;

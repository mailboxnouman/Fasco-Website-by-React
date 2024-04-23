const handleInputChange = () => {
    const emailInput = document.getElementById('emailInput');

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

   

    emailInput.addEventListener('focus', () => {
        handleInput(emailInput);
    });

    emailInput.addEventListener('blur', () => {
        handleInput(emailInput);
    });

};

export default handleInputChange;

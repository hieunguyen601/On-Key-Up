function typingInput() {
    let typingElement = document.querySelector('.inputElement').value;

    document.querySelector('.texting').innerHTML = `You typed ${typingElement}`;
}


document.getElementById('first-plus-btn').addEventListener('click', function () {
    getInput('plus', 'first-count');
    getUpdate('first-count');
    calcultae();

})
document.getElementById('first-minus-btn').addEventListener('click', function () {
    getInput('minus', 'first-count');
    getUpdate('first-count');
    calcultae();
})
document.getElementById('economy-plus-btn').addEventListener('click', function () {
    getInput('plus', 'economy-count');
    getUpdate('economy-count');
    calcultae();
})
document.getElementById('economy-minus-btn').addEventListener('click', function () {
    getInput('minus', 'economy-count');
    getUpdate('economy-count');
    calcultae();
})
function getInput(type, product) {
    const inputValue = document.getElementById(product);
    const inputValueText = inputValue.value;
    const inputNumber = parseInt(inputValueText);

    if (type == 'plus') {
        inputValue.value = inputNumber + 1;
    }
    else {
        if (inputNumber > 0) {
            inputValue.value = inputNumber - 1;
        }
    }


}
function getUpdate(product) {
    const newInput = document.getElementById(product);
    const newInputText = newInput.value;
    const newNumber = parseInt(newInputText);
    return newNumber;

}

function calcultae() {
    const fristClass = getUpdate('first-count') * 150;
    const economyClass = getUpdate('economy-count') * 100;
    const subTotal = fristClass + economyClass;
    const vat = subTotal / 10;
    const totalPrice = subTotal + vat;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('total-vat').innerText = vat;
    document.getElementById('total-price').innerText = totalPrice;

}

//booking here
document.getElementById('book-btn').addEventListener('click', function () {
    handelError('flying-from', 'error');
})
document.getElementById('book-btn').addEventListener('click', function () {
    handelError('flying-to', 'error');
})
function handelError(id) {
    const flyingFrom = document.getElementById(id).value;
    const destinationError = document.getElementById('error');
    if (flyingFrom == '') {
        console.log(flyingFrom);
        destinationError.style.display = 'block';
    }
    else {
        destinationError.style.display = 'none';

    }
}
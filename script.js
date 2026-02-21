const display = document.getElementById('display')

function addToMath(value) {
    display.value += value
}

function equalMath() {

    try {
        display.value = eval(display.value)
    } catch (error) {
        display.value = 'Error'
        return
    }

}

function deleteMath() {
    display.value = ''
}
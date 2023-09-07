const tipInput = document.getElementById('tip-input')
const inputPeople = document.getElementById('input-person')
const jsTipValue = document.querySelector('.js-tip-value')
const jsTipPerson = document.querySelector('.js-tip-person')
const btnpercent1 = document.querySelector('.btn-percent1')
const btnpercent2 = document.querySelector('.btn-percent2')
const btnpercent3 = document.querySelector('.btn-percent3')
const btnpercent4 = document.querySelector('.btn-percent4')
const btnpercent5 = document.querySelector('.btn-percent5')
const btnpercent6 = document.querySelector('.btn-percent6')
const gridInput = document.querySelector('.grid-input')
const btnReset = document.querySelector('.btn-reset')
const jsError = document.querySelector('.js-bill-error')
const jsPeopleError = document.querySelector('.js-people-error')

function style(element){
    element.style.backgroundColor = "hsl(172, 100%, 66%)"
    element.style.color = "hsl(183, 100%, 15%)"
}
function defaultStyle(element){
    element.style.backgroundColor = "hsl(183, 100%, 15%)"
    element.style.color = "hsl(185, 41%, 84%)"
}
function reset(){
    jsTipPerson.innerHTML = '$0.00'
    jsTipValue.innerHTML = '$0.00'
    tipInput.value = ''
    inputPeople.value = ''
    jsError.innerHTML = ''
    jsPeopleError.innerHTML = ''
    gridInput.classList.add("js-grid-input")
    btnpercent6.style.display = "block"

    defaultStyle(btnpercent1)
    defaultStyle(btnpercent2)
    defaultStyle(btnpercent3)
    defaultStyle(btnpercent4)
    defaultStyle(btnpercent5)
}
function calculate(button, percent){


    if(tipInput.value == '' && inputPeople.value == ''){
        jsError.innerHTML = 'Enter A Bill'
        jsPeopleError.innerHTML = 'Enter Number of Person'
        defaultStyle(button)

    } else if(inputPeople.value == ''){
        jsPeopleError.innerHTML = 'Enter Number of Person'
        defaultStyle(button)
    } else if(tipInput.value == ''){
        jsError.innerHTML = 'Enter A Bill'
        defaultStyle(button)
    } else if(/^[A-Za-z]+$/.test(tipInput.value)){
        jsError.innerHTML = 'Enter a Number'
        defaultStyle(button)
    } else if(/^[A-Za-z]+$/.test(inputPeople.value)){
        jsPeopleError.innerHTML = 'Enter a Number'
        defaultStyle(button)
    } else {
        jsError.innerHTML = ''
        jsPeopleError.innerHTML = ''
        const tipAmount = (tipInput.value / inputPeople.value) * (percent/100);
        jsTipValue.innerHTML = tipAmount.toFixed(2);

        const costPerPerson = (tipInput.value / inputPeople.value) + tipAmount;
        jsTipPerson.innerHTML = costPerPerson.toFixed(2)
    }

}


btnpercent1.addEventListener('click', (e) => {
    // e.target.classList.remove("btn")
    style(btnpercent1)

    calculate(btnpercent1, 5)
   
   
})

btnpercent2.addEventListener('click', () => {
    style(btnpercent2)
    calculate(btnpercent2, 10)

})

btnpercent3.addEventListener('click', () => {
    style(btnpercent3)
    calculate(btnpercent3, 15)

})

btnpercent4.addEventListener('click', () => {
    style(btnpercent4)
    calculate(btnpercent4, 25)

})

btnpercent5.addEventListener('click', () => {
    style(btnpercent5)
    calculate(btnpercent5, 50)

})

btnpercent6.addEventListener('click', () => {
    gridInput.classList.remove("js-grid-input")
    btnpercent6.style.display = "none"

})

gridInput.addEventListener('input', (e) => {
    let gridInputValue = Number(e.target.value)
    calculate(gridInput, gridInputValue)

})

btnReset.addEventListener('click', () => {
    reset()
})
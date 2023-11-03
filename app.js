//NEXT BUTTONS
const nextFirstPage = document.querySelector('#first-page-next-button');
const nextSecondPage = document.querySelector('#second-page-next-button');
const nextThirdPage = document.querySelector('#third-page-next-button');

//BACK BUTTONS
const backSecondPage = document.querySelector('#second-page-go-back')
const backThirdPage = document.querySelector('#third-page-go-back')
const backFourthPage = document.querySelector('#fourth-page-go-back')

//CONFIRM BUTTON
const confirmButton = document.querySelector('#confirm-button')

//PAGES
const pageOne = document.querySelector('#first-page-container')
const pageTwo = document.querySelector('#second-page-container')
const pageThree = document.querySelector('#third-page-container')
const pageFour = document.querySelector('#fourth-page-container')
const pageFive = document.querySelector('#fifth-page-container')


//STEPS
const stepOne = document.querySelector('#stepOne')
const stepTwo = document.querySelector('#stepTwo')
const stepThree = document.querySelector('#stepThree')
const stepFour = document.querySelector('#stepFour')




//FIRST PAGE BUTTON(s) LOGIC
nextFirstPage.addEventListener('click', () => {
    pageOne.classList.remove('single-page-container-active')
    pageTwo.classList.add('single-page-container-active')

    stepOne.classList.remove('number-active')
    stepTwo.classList.add('number-active')
})

//SECOND PAGE BUTTON(s) LOGIC
nextSecondPage.addEventListener('click', () => {
    pageTwo.classList.remove('single-page-container-active')
    pageThree.classList.add('single-page-container-active')

    stepTwo.classList.remove('number-active')
    stepThree.classList.add('number-active')
})

backSecondPage.addEventListener('click', () => {
    pageOne.classList.add('single-page-container-active')
    pageTwo.classList.remove('single-page-container-active')

    stepOne.classList.add('number-active')
    stepTwo.classList.remove('number-active')
})


//THIRD PAGE BUTTON(s) LOGIC
nextThirdPage.addEventListener('click', () => {
    pageThree.classList.remove('single-page-container-active')
    pageFour.classList.add('single-page-container-active')

    stepThree.classList.remove('number-active')
    stepFour.classList.add('number-active')
})

backThirdPage.addEventListener('click', () => {
    pageTwo.classList.add('single-page-container-active')
    pageThree.classList.remove('single-page-container-active')

    stepTwo.classList.add('number-active')
    stepThree.classList.remove('number-active')
})

//THIRD PAGE BUTTON(s) LOGIC
nextThirdPage.addEventListener('click', () => {
    pageThree.classList.remove('single-page-container-active')
    pageFour.classList.add('single-page-container-active')

    stepThree.classList.remove('number-active')
    stepFour.classList.add('number-active')
})

backThirdPage.addEventListener('click', () => {
    pageTwo.classList.add('single-page-container-active')
    pageThree.classList.remove('single-page-container-active')

    stepTwo.classList.add('number-active')
    stepThree.classList.remove('number-active')
})

//THIRD PAGE BUTTON(s) LOGIC
confirmButton.addEventListener('click', () => {
    pageFour.classList.remove('single-page-container-active')
    pageFive.classList.add('last-container-active')
})

backFourthPage.addEventListener('click', () => {
    pageThree.classList.add('single-page-container-active')
    pageFour.classList.remove('single-page-container-active')

    stepThree.classList.add('number-active')
    stepFour.classList.remove('number-active')
})
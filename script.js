const submitBtn = document.getElementById('submit')
const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const email = document.getElementById('email')
const password = document.getElementById('password')
const form = document.getElementById('form')



form.addEventListener('submit' , (e) => {
    e.preventDefault()

    checkInputs()

})


function checkInputs(){

    const firstNameVal = firstName.value.trim()
    const lastNameVal = lastName.value.trim()
    const emailVal = email.value.trim()
    const passwordVal = password.value.trim()



    if(firstNameVal === "" || firstNameVal === null) {
        setErrorFor(firstName, "First Name cannot be empty!")
    }else{
        setSuccessFor(firstName)
    }

    if(lastNameVal === "" || lastNameVal === null) {
        setErrorFor(lastName, "Last Name cannot be empty!")
    }else{
        setSuccessFor(lastName)
    }

    if(emailVal === "" || emailVal === null) {
        setErrorFor(email, "Email cannot be empty!")
    } else if(!isEmail(emailVal)){
        setErrorFor(email, "Email address is not valid!")
    }else{
        setSuccessFor(email)
    }

    if(passwordVal === "" || passwordVal === null){
        setErrorFor(password, "Password cannot be empty")
    }else{
        setSuccessFor(password)

    }

}




function setErrorFor(input, msg){
    const el  = input.parentElement
    const errorMsg = el.querySelector('.error-msg')
    errorMsg.innerText = msg
    el.classList = 'form__label error'
}

function setSuccessFor(input){
    const el  = input.parentElement
    el.classList = 'form__label success'
}

function isEmail(email){
    
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

}
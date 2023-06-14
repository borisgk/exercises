const form = document.getElementById("form")

form.onsubmit = () => {
    let result = validate()
    if (!result.valid) {
        console.log(result.messages)
        addErrorMessages(result.messages)
    }
    return false // form does not get submitted
}

function addErrorMessages(msg) {
    errMsg = document.createElement("div")
    errMsg.setAttribute("class", "errors")
    errMsg.setAttribute("id", "errormessage")
    errMsg.innerHTML = `<p>There are errors in the form:</p>`
    errList = document.createElement("ul")
    errList.setAttribute("class", "errlist")
    for (errorMessage of msg) {
        errItem = document.createElement("li")
        errItem.innerHTML = errorMessage
        errList.appendChild(errItem)
    }
    errMsg.appendChild(errList)
    let existingMessage = document.getElementById("errormessage")
    if (!existingMessage) {
        document.body.appendChild(errMsg)
    } else {
        document.body.replaceChild(errMsg, existingMessage)
    }

}

function validate() {
    let isValid = true
    let errors = []
    let data = {
        name: document.getElementById("name").value,
        salary: document.getElementById("salary").value,
        birthdate: document.getElementById("birthdate").value,
        phone: document.getElementById("phone").value
    }
    console.log(data)
    if (data.name.length < 2) {
        isValid = false
        errors.push("Name should be longer than 2 chars.")
    }
    if (!data.salary || data.salary < 10000 || data.salary > 16000) {
        isValid = false
        errors.push("Salary should be between 10 000 and 16 000.")
    }
    if (!data.birthdate) {
        isValid = false
        errors.push("You should enter your birthdate.")
    }
    if (data.phone.length !== 10) {
        isValid = false
        errors.push("Phone should be 10 digits long.")
    } else if (!    /^\d+$/.test(data.phone)) {
        isValid = false
        errors.push("Phone should contain digits only.")
    }
    return {"valid": isValid, "messages": errors}
}
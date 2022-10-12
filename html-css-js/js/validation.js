function validate() {

    if (this.validateText("first-name", /^[A-Z][a-z]+$/)
        && this.validateText("last-name", /^[A-Z][a-z]+$/)
        && this.validateText("email", /^\S+@\S+\.\S+$/)
        && this.validateSection()) {
        alert("Dane poprawne");
        return true;
    } else {
        alert("Dane niepoprawne");
        return false;
    }
}

function validateText(id, regex) {
    let input = document.getElementById(id);
    let value = input.value.toString().trim();

    return value !== "" && regex.test(value);
}

function check(id, regex) {
    if (this.validateText(id, regex)) {
        document.getElementById(id).classList.remove("invalid");
    } else {
        document.getElementById(id).classList.add("invalid");
    }
}

function validateSection() {
    let checkboxes = Array.from(document.querySelectorAll('input[type=checkbox]:checked'));

    return checkboxes.length > 0;
}


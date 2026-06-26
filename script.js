function validateForm() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    if (name.trim() === "") {
        alert("Please enter your name");
        return false;
    }

    if (email.trim() === "") {
        alert("Please enter your email");
        return false;
    }

    if (phone.trim() === "") {
        alert("Please enter your phone number");
        return false;
    }

    alert("Booking Submitted Successfully!");
    return true;
}
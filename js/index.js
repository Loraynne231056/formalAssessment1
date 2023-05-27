registerStudent = () => {
    let nameSurname = document.getElementById ("nameSurname").value;
    let email = document.getElementById ("email").value;
    let contactNumber = +document.getElementById ("contactNumber").value;
    let subject = document.getElementById ("subject").value; 
    let password = document.getElementById ("password").value;
    let spamBox = document.getElementById("spamBox").checked;

    console.log(nameSurname, email, contactNumber, subject, password)

    if(spamBox){
        alert("Welcome: " + nameSurname + "!" + " Thank you for your interest in " + subject + "!" + " We will contact you via the provided: " + email + ", or alternatively on the phone number: " + contactNumber + ".");
    } else{
        alert("Well, well, well... why don't you want to sign up for our newsletter... you don't seem to be that interested " + nameSurname + "! " + "If you want to sign up, you better CHECK that newsletter box!");
    }
}

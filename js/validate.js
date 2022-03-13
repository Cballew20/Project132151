function validate() {
    usernameFormat = "^[a-z A-Z0-9]+$";
    nameFormat = "^[a-z A-Z]+$";
    phonenoFormat = "^[1-9][0-9]{9}$";
    var username = document.getElementsByName('userName')[0].value;
    var password = document.getElementsByName('password')[0].value;
    var vpassword = document.getElementsByName('passwordVerify')[0].value;
    var firstname = document.getElementsByName('firstName')[0].value;
    var lastname = document.getElementsByName('lastName')[0].value;
    var email = document.getElementsByName('email')[0].value;
    var phoneNumber = document.getElementsByName('phoneNumber')[0].value;
    var newsletter = document.getElementsByName('signUpNewsletter');



    if (username == "") {
        document.getElementById('erroruserName').innerHTML = "Username cannot be empty.";
        return false;
    } 

    if (!username.match(usernameFormat)) {
        document.getElementById('erroruserName').innerHTML = 'Invalid Username.';
        return false;
    }

    if (password.length < 8  password == "") {
        document.getElementById('errorpassword').innerHTML = 'Password length should be atleast 8.';
        return false;
    }

    if (vpassword.length < 8  vpassword == "") {
        document.getElementById('errorpasswordVerify').innerHTML = 'Confirm Password length should be atleast 8.';
        return false;
    }

    if (vpassword != password) {
        document.getElementById('errorpasswordVerify').innerHTML = 'Confirm password should be same as Password.';
        return false;
    }

    if (firstname == '') {
        document.getElementById('errorfirstName').innerHTML = 'First Name can't be empty.';
        return false;
    }

    if (!firstname.match(nameFormat)) {
        document.getElementById('errorfirstName').innerHTML = 'Invalid First Name.';
        return false;
    }

    if (lastname == '') {
        document.getElementById('errorlastName').innerHTML = 'Last Name can't be empty.';
        return false;
    }

    if (!lastname.match(nameFormat)) {
        document.getElementById('errorlastName').innerHTML = 'Invalid Last Name.';
        return false;
    }

    if (email == '') {
        document.getElementById('erroremail').innerHTML = 'Email can't be empty.';
        return false;
    }

    if (email.indexOf("@", 0) < 0) {
        document.getElementById('erroremail').innerHTML = 'Invalid Email format.';
        return false;
    }

    if (email.indexOf(".", 0) < 0) {
        document.getElementById('erroremail').innerHTML = 'Invalid Email format.';
        return false;
    }



    if (phoneNumber == '') {
        document.getElementById('errorphoneNumber').innerHTML = 'Phone Number can't be empty.';
        return false;
    }

    if (!phoneNumber.match(phonenoFormat)) {
        document.getElementById('errorphoneNumber').innerHTML = 'Invalid Phone Number.';
        return false;
    }

    if ((signUpNewsletter[0].checked == false) && (signUpNewsletter[1].checked == false)) {
        document.getElementById('errorsignUpNewsletter').innerHTML = 'Invalid Phone Number.';
        return false;
    }
}
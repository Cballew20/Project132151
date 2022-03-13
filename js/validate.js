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
    var signUpNewsletter = document.getElementsByName('signUpNewsletter');


    if (!username.match(usernameFormat)) {
        document.getElementById('erroruserName').innerHTML = 'Invalid Username.';
        document.getElementById('userName').focus();
                return false;
    }
    else {
        document.getElementById('erroruserName').innerHTML = '';
    }
    if (password.length < 8 ) {
        document.getElementById('errorpassword').innerHTML = 'Password length should be atleast 8.';
        return false;
    }
    else {
        document.getElementById('errorpassword').innerHTML = '';
    }
    if (vpassword.length < 8 ) {
        document.getElementById('errorpasswordVerify').innerHTML = 'Confirm Password length should be atleast 8.';
        return false;
    }
    else {
        document.getElementById('errorpasswordVerify').innerHTML = '';
    }
    if (vpassword != password) {
        document.getElementById('errorpasswordVerify').innerHTML = 'Confirm password should be same as Password.';
        return false;
    }
    else {
        document.getElementById('errorpasswordVerify').innerHTML = '';
    }

    if (!firstname.match(nameFormat)) {
        document.getElementById('errorfirstName').innerHTML = 'Invalid First Name.';
        return false;
    }
    else {
        document.getElementById('errorfirstName').innerHTML = '';
    }

    if (!lastname.match(nameFormat)) {
        document.getElementById('errorlastName').innerHTML = 'Invalid Last Name.';
        return false;
    }
    else {
        document.getElementById('errorlastName').innerHTML = '';
    }
 if (email != '') {
        if (email.indexOf("@", 0) < 0) {
            document.getElementById('erroremail').innerHTML = 'Invalid Email format.';
            return false;
        }
        
        if (email.indexOf(".", 0) < 0) {
            document.getElementById('erroremail').innerHTML = 'Invalid Email format.';
            return false;
            }
       }
    else {
        document.getElementById('erroremail').innerHTML = '';
    }

  if (phoneNumber != '') {
        if (!phoneNumber.match(phonenoFormat)) {
            document.getElementById('errorphoneNumber').innerHTML = 'Invalid Phone Number.';
            return false;
        }
        else {
        document.getElementById('errorphoneNumber').innerHTML = '';
    }        
    }
 
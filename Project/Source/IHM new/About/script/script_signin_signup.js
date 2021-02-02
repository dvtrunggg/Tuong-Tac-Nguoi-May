/* modal appear when web onload */

$(window).on('load',function(){
	$('#modal-announce').modal('show');
});



function is_valid_num(str) {
    if(str.indexOf("0") == -1 && str.indexOf("1") == -1 && str.indexOf("2") == -1 && str.indexOf("3") == -1 && str.indexOf("4") == -1
    && str.indexOf("5") == -1 && str.indexOf("6") == -1 && str.indexOf("7") == -1 && str.indexOf("8") == -1 && str.indexOf("9") == -1) {
        return false;
    }

    return true;
}
 

// check sign in when has input 
function check_signin_input() {
    let field = document.querySelectorAll("#sign-in .field");
   
    let check_1 = false, check_2 = false;
    for (let i = 0; i < field.length; i++) {
        let input = field[i].querySelector(".input");
        let check_valid = field[i].querySelector(".check-valid");
        let email_tel = field[i].querySelector("#email-tel");
      
        input.addEventListener("focusout", function() {

            if (input != null && input.value == "") {
               input.classList.add("is-invalid");
                check_valid.innerHTML = "*Please fill out this field.";
                check_valid.classList.remove("hidden");
            }
            else if (email_tel != null && (email_tel.value.indexOf("@") == -1 && is_valid_num(email_tel.value) == false )) {
                email_tel.classList.add("is-invalid");
                check_valid.innerHTML = "*Please enter a valid email or telephone.";
                check_valid.classList.remove("hidden");
            }
            else {
                input.classList.remove("is-invalid");
                check_valid.classList.add("hidden");
                
                if (input == email_tel) {
                    check_1 = true;
                }
                else {
                    check_2 = true;
                }
            }
        })
    }
   
    // when submit
    let button = document.querySelector("#sign-in button.btn");
    console.log(button);
    button.addEventListener("click", function() {
        if (check_1 == true && check_2 == true) {
            window.location.href="../Home/home_index.html";
        }
    })
}


// check sign in no input
function check_signin_noinput() {
    let field = document.querySelectorAll("#sign-in .field");
    let button = document.querySelector("#sign-in button.btn");

    let check_1 = false, check_2 = false;
    for (let i = 0; i < field.length; i++) {
        let input = field[i].querySelector(".input");
        let check_valid = field[i].querySelector(".check-valid");
        let email_tel = field[i].querySelector("#email-tel");
      
        button.addEventListener("click", function() {
            console.log("click");
            if (input != null && input.value == "") {
                input.classList.add("is-invalid");
                check_valid.innerHTML = "*Please fill out this field.";
                check_valid.classList.remove("hidden");
            }
            else if (email_tel != null && (email_tel.value.indexOf("@") == -1 && is_valid_num(email_tel.value) == false )) {
                email_tel.classList.add("is-invalid");
                check_valid.innerHTML = "*Please enter a valid email or telephone.";
                check_valid.classList.remove("hidden");
            }
            else {
                input.classList.remove("is-invalid");
                check_valid.classList.add("hidden");
                
                if (input == email_tel) {
                    check_1 = true;
                }
                else {
                    check_2 = true;
                }
            }
        })
    }
   
    // when submit
    button.addEventListener("click", function() {
        if (check_1 == true && check_2 == true) {
            window.location.href="../Home/home_index.html";
        }
    })
}


function has_number(myString) {
    return /\d/.test(myString);
}

function has_letter(myString) {
    return /[a-zA-Z]/.test(myString);
}

/*
// check sign up when input
function check_signup_account_input() {
    let field = document.querySelectorAll("#pills-account .field");
    for (let i = 0; i < field.length; i++) {
        let input = field[i].querySelector(".input");
        let check_valid = field[i].querySelector(".check-valid");
        let first_name = field[i].querySelector("#first-name");
        let last_name = field[i].querySelector("#last-name");
        let email = field[i].querySelector("#email-signup");
        let tel =  field[i].querySelector("#tel");
        let pwd = field[i].querySelector("#pwd-signup");
        let pwd_confirm = field[i].querySelector("#pwd-confirm");
        var save_pwd;

        input.addEventListener("focusout", function() {
           
            let value = input.value;
            if (value == "") {
                input.classList.add("is-invalid");
                check_valid.innerHTML = "*Please fill out this field.";
                check_valid.classList.remove("hidden");
            }
            // check first name
            else if (first_name != null && (has_number(first_name.value) == true )) {
                input.classList.add("is-invalid");
                check_valid.innerHTML = "*Please use a-z letters only";
                check_valid.classList.remove("hidden");
            }
            else if(first_name != null && has_number(first_name.value) == false && (first_name.value.length < 2 || first_name.value.length > 10)) {
                input.classList.add("is-invalid");
                check_valid.innerHTML = "*Please use between 2 and 10 characters.";
                check_valid.classList.remove("hidden");
            }
            // check last name
            else if (last_name != null && (has_number(last_name.value) == true )) {
                input.classList.add("is-invalid");
                check_valid.innerHTML = "*Please use a-z letters only";
                check_valid.classList.remove("hidden");
            }
            else if(last_name != null && has_number(last_name.value) == false && (last_name.value.length < 2 || last_name.value.length > 10)) {
                input.classList.add("is-invalid");
                check_valid.innerHTML = "*Please use between 2 and 10 characters.";
                check_valid.classList.remove("hidden");
            }

            // check email
            else if(email != null && email.value.indexOf("@") == -1) {
                input.classList.add("is-invalid");
                check_valid.innerHTML = "*Please enter a valid email (missing an '@')";
                check_valid.classList.remove("hidden");
            }
            // check telephone 
            else if(tel != null && is_valid_num(tel.value) == false ) {
                input.classList.add("is-invalid");
                check_valid.innerHTML = "*Please enter a valid telephone (use 0-9 only).";
                check_valid.classList.remove("hidden");
            }

            // check password        
            else if (pwd != null && (has_number(pwd.value) == false || has_letter(pwd.value) == false)) {
                input.classList.add("is-invalid");
                check_valid.innerHTML = "*Password must contain letters and numbers.";
                check_valid.classList.remove("hidden");
            }
            else if (pwd != null && (has_number(pwd.value) == true && has_letter(pwd.value) == true) && pwd.value.length < 6) {
                input.classList.add("is-invalid");
                check_valid.innerHTML = "*Password must contain 6 characters.";
                check_valid.classList.remove("hidden");
                    
            }
            else if (pwd != null && (has_number(pwd.value) == true && has_letter(pwd.value) == true) && pwd.value.length >= 6) {
               save_pwd = pwd.value;
            }
            else {
                input.classList.remove("is-invalid");
                check_valid.classList.add("hidden");
            }
        })

        // check confirm password
        if (pwd_confirm != null) {
            console.log(save_pwd);
            pwd_confirm.addEventListener("focusout", function() {
                if (pwd_confirm.value != save_pwd) {
                    pwd_confirm.classList.add("is-invalid");
                    check_valid.innerHTML = "*Password is not matching.";
                    check_valid.classList.remove("hidden");
                }
            })
        }
    }
}*/


// check sign up when has input
function check_signup_input() {
    // check sign up account
    let field_account = document.querySelectorAll("#pills-account .field");

    let check_1 = false, check_2 = false, check_3 = false, check_4 = false, check_5 = false, check_6 = false;
    
    for (let i = 0; i < field_account.length; i++) {
        let input = field_account[i].querySelector(".input");
        let check_valid = field_account[i].querySelector(".check-valid");
        let first_name = field_account[i].querySelector("#first-name");
        let last_name = field_account[i].querySelector("#last-name");
        let email = field_account[i].querySelector("#email-signup");
        let tel =  field_account[i].querySelector("#tel");
        let pwd = field_account[i].querySelector("#pwd-signup");
        let pwd_confirm = field_account[i].querySelector("#pwd-confirm");
        var save_pwd;

        input.addEventListener("focusout", function() {
           
            let value = input.value;
            if (value == "") {
                input.classList.add("is-invalid");
                check_valid.innerHTML = "*Please fill out this field.";
                check_valid.classList.remove("hidden");
            }
            // check first name
            else if (first_name != null && (has_number(first_name.value) == true )) {
                input.classList.add("is-invalid");
                check_valid.innerHTML = "*Please use a-z letters only";
                check_valid.classList.remove("hidden");
            }
            else if(first_name != null && has_number(first_name.value) == false && (first_name.value.length < 1 || first_name.value.length > 10)) {
                input.classList.add("is-invalid");
                check_valid.innerHTML = "*Please use between 1 and 10 characters.";
                check_valid.classList.remove("hidden");
            }
            // check last name
            else if (last_name != null && (has_number(last_name.value) == true )) {
                input.classList.add("is-invalid");
                check_valid.innerHTML = "*Please use a-z letters only";
                check_valid.classList.remove("hidden");
            }
            else if(last_name != null && has_number(last_name.value) == false && (last_name.value.length < 1 || last_name.value.length > 10)) {
                input.classList.add("is-invalid");
                check_valid.innerHTML = "*Please use between 1 and 10 characters.";
                check_valid.classList.remove("hidden");
            }

            // check email
            else if(email != null && email.value.indexOf("@") == -1) {
                input.classList.add("is-invalid");
                check_valid.innerHTML = "*Please enter a valid email (missing an '@')";
                check_valid.classList.remove("hidden");
            }
            // check telephone 
            else if(tel != null && is_valid_num(tel.value) == false ) {
                input.classList.add("is-invalid");
                check_valid.innerHTML = "*Please enter a valid telephone (use 0-9 only).";
                check_valid.classList.remove("hidden");
            }

            // check password        
            else if (pwd != null && (has_number(pwd.value) == false || has_letter(pwd.value) == false)) {
                input.classList.add("is-invalid");
                check_valid.innerHTML = "*Password must contain letters and numbers.";
                check_valid.classList.remove("hidden");
            }
            else if (pwd != null && (has_number(pwd.value) == true && has_letter(pwd.value) == true) && pwd.value.length < 6) {
                input.classList.add("is-invalid");
                check_valid.innerHTML = "*Password must contain more than 5 characters.";
                check_valid.classList.remove("hidden");
                    
            }
            else {
                input.classList.remove("is-invalid");
                check_valid.classList.add("hidden");

                if (input == first_name)
                    check_1 = true;
                if (input == last_name)
                    check_2 = true;
                if (input == email)
                    check_3 = true;
                if (input == tel)
                    check_4 = true;
                if (input == pwd) {
                    check_5 = true;

                    save_pwd = pwd.value;  // save pwd when it matching
                }
            }
        })

        // check confirm password
        if (pwd_confirm != null) {
            console.log(save_pwd);
            pwd_confirm.addEventListener("focusout", function() {
                if (pwd_confirm.value != save_pwd) {
                    pwd_confirm.classList.add("is-invalid");
                    check_valid.innerHTML = "*Password is not matching.";
                    check_valid.classList.remove("hidden");
                    check_6 = false;
                }
                else    
                    check_6 = true; 
            })
        }
    } 

    // check sign up info
    let field_info = document.querySelectorAll("#pills-info .field");
    let check_7 = false, check_8 = false, check_9 = false, check_10 = false, check_11 = false;
    let style = document.querySelector("#style");
    let require_style = document.querySelector(".style_select .check-valid");

    for (let i = 0; i < field_info.length; i++) {
        let input = field_info[i].querySelector(".input");
        let check_valid = field_info[i].querySelector(".check-valid");
        let height = field_info[i].querySelector("#height");
        let weight = field_info[i].querySelector("#weight");
        let data = field_info[i].querySelector("#date");
        let profession = field_info[i].querySelector("#profession");
    
        input.addEventListener("focusout", function() {
            let value = input.value;
    
            if (value == "") {
                input.classList.add("is-invalid");
                check_valid.innerHTML = "*Please fill out this field.";
                check_valid.classList.remove("hidden");
            }
            else {
                input.classList.remove("is-invalid");
                check_valid.classList.add("hidden");
                
                if (input == height) 
                    check_7 = true;
                if (input == weight)
                    check_8 = true;
                if (input == data)
                    check_9 = true;
                if (input == profession)
                    check_10 = true;
            }
        })
    }

    let save_select = [];
    check_save_select_isempty = false; 

    // save value of select list
    let previous;
    $("#sign-up select[name=demo]").focus(function () {
        previous = this.value;
        
    }).change(function() {
       // console.log(previous);
        previous = this.value;
        save_select.push(previous);

        if (save_select.length > 0) {
            check_save_select_isempty = true; /// has
            check_11 = true;
            style.classList.remove("is-invalid");
            require_style.classList.add("hidden");
        }
        else { 
            if (style.value == ""){
                check_save_select_isempty = false; /// has
                check_11 = false;
            }
            else {
                check_save_select_isempty = true; /// has
                check_11 = true;
            }
        }

    });

    style.addEventListener("focusout", function() {
        if (save_select.length > 0) {
            check_save_select_isempty = true; /// has
            check_11 = true;
            style.classList.remove("is-invalid");
            require_style.classList.add("hidden");
        }
        else { 
            if (style.value == ""){
                check_save_select_isempty = false; /// has
                check_11 = false;
            }
            else {
                check_save_select_isempty = true; /// has
                check_11 = true;
            }
        }
        console.log("check", style);
        if (style.value == "" && check_save_select_isempty == false) {
            style.classList.add("is-invalid");
            require_style.innerHTML = "*Please fill out at least 1 of these 2 fields.";
            require_style.classList.remove("hidden");
            check_11 = false;
        }
        if (style.value != "" || check_save_select_isempty == true) {
            style.classList.remove("is-invalid");
            require_style.classList.add("hidden");
            check_11 = true;
            check_save_select_isempty = true;
        }

    })

    // when submit
    let button = document.querySelector("#sign-up .modal-body button");
    button.addEventListener("click", function() {
        console.log(save_select, check_save_select_isempty);
        console.log(check_save_select_isempty, check_11);
        if(check_11 == false && check_save_select_isempty == false) {
            style.classList.add("is-invalid");
            require_style.innerHTML = "*Please fill out at least 1 of these 2 fields.";
            require_style.classList.remove("hidden");
        }
        else {
            style.classList.remove("is-invalid");
            require_style.classList.add("hidden");
        }

        //console.log(check_1, check_2, check_3, check_4, check_5, check_5, check_6, check_7, check_8, check_9, check_10, check_11);
        if (check_1 == true && check_2 == true && check_3 == true && check_4 == true && check_5 == true && check_6 == true &&  
            check_7 == true && check_8 == true && check_9 == true && check_10 == true && check_11 == true && check_save_select_isempty == true) {
            window.location.href="../Home/home_index.html";
            
        }
    })
}

// check sign up when no input
function check_signup_noinput() {
    // check sign up account
    let field_account = document.querySelectorAll("#pills-account .field");
    let button = document.querySelector("#sign-up .modal-body button");

    let check_1 = false, check_2 = false, check_3 = false, check_4 = false, check_5 = false, check_6 = false;
    
    for (let i = 0; i < field_account.length; i++) {
        let input = field_account[i].querySelector(".input");
        let check_valid = field_account[i].querySelector(".check-valid");
        let first_name = field_account[i].querySelector("#first-name");
        let last_name = field_account[i].querySelector("#last-name");
        let email = field_account[i].querySelector("#email-signup");
        let tel =  field_account[i].querySelector("#tel");
        let pwd = field_account[i].querySelector("#pwd-signup");
        let pwd_confirm = field_account[i].querySelector("#pwd-confirm");
        var save_pwd;

        button.addEventListener("click", function() {
           
            let value = input.value;
            if (value == "") {
                input.classList.add("is-invalid");
                check_valid.innerHTML = "*Please fill out this field.";
                check_valid.classList.remove("hidden");
            }
            // check first name
            else if (first_name != null && (has_number(first_name.value) == true )) {
                input.classList.add("is-invalid");
                check_valid.innerHTML = "*Please use a-z letters only";
                check_valid.classList.remove("hidden");
            }
            else if(first_name != null && has_number(first_name.value) == false && (first_name.value.length < 1 || first_name.value.length > 10)) {
                input.classList.add("is-invalid");
                check_valid.innerHTML = "*Please use between 1 and 10 characters.";
                check_valid.classList.remove("hidden");
            }
            // check last name
            else if (last_name != null && (has_number(last_name.value) == true )) {
                input.classList.add("is-invalid");
                check_valid.innerHTML = "*Please use a-z letters only";
                check_valid.classList.remove("hidden");
            }
            else if(last_name != null && has_number(last_name.value) == false && (last_name.value.length < 1 || last_name.value.length > 10)) {
                input.classList.add("is-invalid");
                check_valid.innerHTML = "*Please use between 1 and 10 characters.";
                check_valid.classList.remove("hidden");
            }

            // check email
            else if(email != null && email.value.indexOf("@") == -1) {
                input.classList.add("is-invalid");
                check_valid.innerHTML = "*Please enter a valid email (missing an '@')";
                check_valid.classList.remove("hidden");
            }
            // check telephone 
            else if(tel != null && is_valid_num(tel.value) == false ) {
                input.classList.add("is-invalid");
                check_valid.innerHTML = "*Please enter a valid telephone (use 0-9 only).";
                check_valid.classList.remove("hidden");
            }

            // check password        
            else if (pwd != null && (has_number(pwd.value) == false || has_letter(pwd.value) == false)) {
                input.classList.add("is-invalid");
                check_valid.innerHTML = "*Password must contain letters and numbers.";
                check_valid.classList.remove("hidden");
            }
            else if (pwd != null && (has_number(pwd.value) == true && has_letter(pwd.value) == true) && pwd.value.length < 6) {
                input.classList.add("is-invalid");
                check_valid.innerHTML = "*Password must contain more than 5 characters.";
                check_valid.classList.remove("hidden");
                    
            }
            else {
                input.classList.remove("is-invalid");
                check_valid.classList.add("hidden");

                if (input == first_name)
                    check_1 = true;
                if (input == last_name)
                    check_2 = true;
                if (input == email)
                    check_3 = true;
                if (input == tel)
                    check_4 = true;
                if (input == pwd) {
                    check_5 = true;

                    save_pwd = pwd.value;  // save pwd when it matching
                }
            }
        })

        // check confirm password
        if (pwd_confirm != null) {
            console.log(save_pwd);
           button.addEventListener("click", function() {
                if (pwd_confirm.value != save_pwd) {
                    pwd_confirm.classList.add("is-invalid");
                    check_valid.innerHTML = "*Password is not matching.";
                    check_valid.classList.remove("hidden");
                    check_6 = false;
                }
                else    
                    check_6 = true; 
            })
        }
    } 

    // check sign up info
    let field_info = document.querySelectorAll("#pills-info .field");
    let check_7 = false, check_8 = false, check_9 = false, check_10 = false, check_11 = false;

    for (let i = 0; i < field_info.length; i++) {
        let input = field_info[i].querySelector(".input");
        let check_valid = field_info[i].querySelector(".check-valid");
        let height = field_info[i].querySelector("#height");
        let weight = field_info[i].querySelector("#weight");
        let data = field_info[i].querySelector("#date");
        let profession = field_info[i].querySelector("#profession");
        let style = field_info[i].querySelector("#style");
    
        button.addEventListener("click", function() {
            let value = input.value;
    
            if (value == "") {
                input.classList.add("is-invalid");
                check_valid.innerHTML = "*Please fill out this field.";
                check_valid.classList.remove("hidden");
            }
            else {
                input.classList.remove("is-invalid");
                check_valid.classList.add("hidden");
                
                if (input == height) 
                    check_7 = true;
                if (input == weight)
                    check_8 = true;
                if (input == data)
                    check_9 = true;
                if (input == profession)
                    check_10 = true;
                if (input == style)
                    check_11 = true;
            }
        })
    }

    // when submit
    button.addEventListener("click", function() {
        console.log(check_1, check_2, check_3, check_4, check_5, check_5, check_6, check_7, check_8, check_9, check_10, check_11);
        if (check_1 == true && check_2 == true && check_3 == true && check_4 == true && check_5 == true && check_6 == true &&  
            check_7 == true && check_8 == true && check_9 == true && check_10 == true && check_11 == true ) {
            window.location.href="../Home/home_index.html";
        }
    })
}



// to see password
$(document).ready(function() {
    $("#show_hide_password .input-group-addon").on('click', function(event) {
        event.preventDefault();
        if($('#show_hide_password input').attr("type") == "text"){
            $('#show_hide_password input').attr('type', 'password');
            $('#show_hide_password i').addClass( "fa-eye-slash" );
            $('#show_hide_password i').removeClass( "fa-eye" );
        }else if($('#show_hide_password input').attr("type") == "password"){
            $('#show_hide_password input').attr('type', 'text');
            $('#show_hide_password i').removeClass( "fa-eye-slash" );
            $('#show_hide_password i').addClass( "fa-eye" );
        }
    });
});


// to see password
$(document).ready(function() {
    $("#show_hide_password .input-group-addon").on('click', function(event) {
        event.preventDefault();
        if($('#show_hide_password input').attr("type") == "text"){
            $('#show_hide_password input').attr('type', 'password');
            $('#show_hide_password i').addClass( "fa-eye-slash" );
            $('#show_hide_password i').removeClass( "fa-eye" );
        }else if($('#show_hide_password input').attr("type") == "password"){
            $('#show_hide_password input').attr('type', 'text');
            $('#show_hide_password i').removeClass( "fa-eye-slash" );
            $('#show_hide_password i').addClass( "fa-eye" );
        }
    });
});


// check try it free when has input
function check_tryit_input() {
    let field_info = document.querySelectorAll("#try-it-free .field");
    let check_7 = false, check_8 = false, check_9 = false, check_10 = false, check_11 = false;
    let style = document.querySelector("#style_try");
    let require_style = document.querySelector(".style_select_try .check-valid");

    for (let i = 0; i < field_info.length; i++) {
        let input = field_info[i].querySelector(".input");
        let check_valid = field_info[i].querySelector(".check-valid");
        let height = field_info[i].querySelector("#height_try");
        let weight = field_info[i].querySelector("#weight_try");
        let data = field_info[i].querySelector("#date_try");
        let profession = field_info[i].querySelector("#profession_try");

        input.addEventListener("focusout", function() {
            console.log(input);
            let value = input.value;
            if (value == "" && input != style) {
                input.classList.add("is-invalid");
                check_valid.innerHTML = "*Please fill out this field.";
                check_valid.classList.remove("hidden");
            }
            else {
                input.classList.remove("is-invalid");
                check_valid.classList.add("hidden");
               
                if (input == height) 
                    check_7 = true;
                if (input == weight)
                    check_8 = true;
                if (input == data)
                    check_9 = true;
                if (input == profession)
                    check_10 = true;
                
            }
        })
    }

   
    let save_select = [];
    check_save_select_isempty = false; 

    // save value of select list
    let previous;
    $("select[name=demo]").focus(function () {
        previous = this.value;
        
    }).change(function() {
       // console.log(previous);
        previous = this.value;
        save_select.push(previous);

        if (save_select.length > 0) {
            check_save_select_isempty = true; /// has
            check_11 = true;
            style.classList.remove("is-invalid");
            require_style.classList.add("hidden");
        }
        else { 
            if (style.value == ""){
                check_save_select_isempty = false; /// has
                check_11 = false;
            }
            else {
                check_save_select_isempty = true; /// has
                check_11 = true;
            }
        }

    });

    style.addEventListener("focusout", function() {
        if (save_select.length > 0) {
            check_save_select_isempty = true; /// has
            check_11 = true;
            style.classList.remove("is-invalid");
            require_style.classList.add("hidden");
        }
        else { 
            if (style.value == ""){
                check_save_select_isempty = false; /// has
                check_11 = false;
            }
            else {
                check_save_select_isempty = true; /// has
                check_11 = true;
            }
        }
        console.log("check", style);
        if (style.value == "" && check_save_select_isempty == false) {
            style.classList.add("is-invalid");
            require_style.innerHTML = "*Please fill out at least 1 of these 2 fields.";
            require_style.classList.remove("hidden");
            check_11 = false;
        }
        if (style.value != "" || check_save_select_isempty == true) {
            style.classList.remove("is-invalid");
            require_style.classList.add("hidden");
            check_11 = true;
            check_save_select_isempty = true;
        }

    })

    // when submit
    let button = document.querySelector("#try-it-free .modal-body button");
    button.addEventListener("click", function() {

        console.log(save_select, check_save_select_isempty);
        console.log(check_save_select_isempty, check_11);
        if(check_11 == false && check_save_select_isempty == false) {
            style.classList.add("is-invalid");
            require_style.innerHTML = "*Please fill out at least 1 of these 2 fields.";
            require_style.classList.remove("hidden");
        }
        else {
            style.classList.remove("is-invalid");
            require_style.classList.add("hidden");
        }

        //console.log(check_1, check_2, check_3, check_4, check_5, check_5, check_6, check_7, check_8, check_9, check_10, check_11);
        if (check_7 == true && check_8 == true && check_9 == true && check_10 == true && check_11 == true && check_save_select_isempty == true) {
            window.location.href="../Home_try/home_try_index.html";
        }
    })

    
    
}

// check try it free when no input
function check_tryit_noinput() {
    let button = document.querySelector("#try-it-free .modal-body button");
    let field_info = document.querySelectorAll("#try-it-free .field");

    let check_7 = false, check_8 = false, check_9 = false, check_10 = false, check_11 = false;

    for (let i = 0; i < field_info.length; i++) {
        let input = field_info[i].querySelector(".input");
        let check_valid = field_info[i].querySelector(".check-valid");
        let height = field_info[i].querySelector("#height_try");
        let weight = field_info[i].querySelector("#weight_try");
        let data = field_info[i].querySelector("#date_try");
        let profession = field_info[i].querySelector("#profession_try");
        let style = field_info[i].querySelector("#style_try");
    
        button.addEventListener("click", function() {
            let value = input.value;
    
            if (value == "") {
                input.classList.add("is-invalid");
                check_valid.innerHTML = "*Please fill out this field.";
                check_valid.classList.remove("hidden");
            }
            else {
                input.classList.remove("is-invalid");
                check_valid.classList.add("hidden");
                
                if (input == height) 
                    check_7 = true;
                if (input == weight)
                    check_8 = true;
                if (input == data)
                    check_9 = true;
                if (input == profession)
                    check_10 = true;
                if (input == style)
                    check_11 = true;
            }
        })
    }

    // when submit
    button.addEventListener("click", function() {
        if (check_7 == true && check_8 == true && check_9 == true && check_10 == true && check_11 == true ) {
            window.location.href="../Home_try/home_try_index.html";
        }
    })
}


check_signin_input();
check_signin_noinput();
check_signup_input();
check_signup_noinput();
check_tryit_input();
check_tryit_noinput();


$(document).ready(function() {
    $('.multi_select').selectpicker();

})


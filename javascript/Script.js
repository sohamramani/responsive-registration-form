$(document).ready(function(){
    //email-valid
        $("#email").blur(function(){
            let email = $("#email").val();
            let emailvalidation = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (emailvalidation.test(email)){
                $("#email-valid").html("")
                return true;
            } else{
            $("#email-valid").html("Email-id is invalid");
            return false;
            }
        });

    //pass-valid
        $("#pass").blur(function(){
            let pass = $("#pass").val();
            let passvalidation = /^(?=(?:[^A-Z]*[A-Z]){2})(?=(?:[^a-z]*[a-z]){2})(?=(?:[^\d]*\d){2})(?=(?:[^\W]*\W){2})(?=(?:[^\s]*\s){0})(?=(?:[^\$]*[\$]){1})(?!.*(?:[B-D]|[X-Y]|[p-r]|[k-m]|[2-4]|~|\*))[A-Za-z\d\^$@#!%*?&]{0,}$/
            debugger;
            if (passvalidation.test(pass)){
                $("#pass-valid").html("") 
            } else{
                $("#pass-valid").html("At least two upper case letter, At least two lower case letter, At least two digit, At least two special character, At least one $ sign, Minimum 12 in length, maximum 20 in length and password not contains BCDXYZ,pqrklm,~*,234");
        }
        });

    //re-pass-valid
        $("#re-pass").blur(function(){
            let repass = $("#re-pass").val();
            let pass = $("#pass").val();
            if (repass != pass) {
            $("#re-pass-valid").html("Passwords does not match!");
            } else {
            $("#re-pass-valid").html("");
            }
        });     

    //fname-valid
        $("#fname").blur(function(){
            let fname = $("#fname").val();
            let fnamevalidation = /^[a-zA-Z]{2,12}$/
            if (fnamevalidation.test(fname)){
                $("#fname-valid").html("")
            } else{
            $("#fname-valid").html("Invalid first name");
            }
        });

    //lname-valid
        $("#lname").blur(function(){
            let lname = $("#lname").val();
            let lnamevalidation = /^[a-zA-Z]{2,12}$/;
            if (lnamevalidation.test(lname)){
                $("#lname-valid").html("")
            } else{
            $("#lname-valid").html("Invalid last name");
            }
        });

    //gender-valid
        $("#register").click(function () { 
            if ($("input[name=gender]:checked").length <= 0) {      
                $("input[name=gender]").css("outline", "1px solid red");
                $("#gender-valid").html("Please select a gender");
            }
            else {        
                $("input[name=gender]").css("outline", "none");
                $("#gender-valid").html("");
            }
        });

    //country-valid
        $("#register").click(function () {
            if($("select").val()=="selected"){
                $("#country-valid").html("Please select a country");
            } else {
                $("#country-valid").html("");
            }
        });

    //term-valid
        $("#register").click(function () {
            if(!$("#flexCheckDefault").prop("checked")){
                $("#term-valid").html("Please agree terms and conditions");
            } else {
                $("#term-valid").html("");;
            }
        });

});
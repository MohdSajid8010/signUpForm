


let formEl = document.querySelector("form");//form
let email_fieldEl = document.querySelector(".email-field");
let emailInpEl = document.getElementById("emailInp");

let createPass_fieldEl = document.querySelector(".createPass-field");//password=field
let createPassInpEl = document.getElementById("cPass");//pasword inpt

let cPassdEl = document.querySelector(".confmpass-field");//cpassword=field
let cnfrmInpPass = document.getElementById("cnfrmPass");//cpassInp

// console.log("name is:-", formEl, email_fieldEl, emailInpEl, createPass_fieldEl, createPassInpEl,cPassdEl);


let errors = document.getElementsByClassName("error");
let email_err1 = errors[0];
let pass_err2 = errors[1];
let cpass_err3 = errors[2];
// console.log("errorss are:", err1, err2, err3);

function checkEmail() {
    const email_pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailInpEl.value.match(email_pattern)) {
        // return email_fieldEl.classList.add("invalid");
        email_err1.style.display = "block";
        emailInpEl.style.borderColor = "red"
    }
    else {

        // email_fieldEl.classList.remove("invalid");
        email_err1.style.display = "none";
        emailInpEl.style.borderColor = "whitesmoke";

    }

}

function createPass() {
    const passPattern = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;
    if (!createPassInpEl.value.match(passPattern)) {
        // createPass_fieldEl.classList.add("invalid");
        pass_err2.style.display = "block";
        createPassInpEl.style.borderColor = "red";

    } else {
        // createPass_fieldEl.classList.remove("invalid");
        pass_err2.style.display = "none";
        createPassInpEl.style.borderColor = "whitesmoke";
    }
}

function confirmPass() {
    if (cnfrmInpPass.value !== createPassInpEl.value) {
        // console.log("false");
        // cPassdEl.classList.add("invalid");
        cpass_err3.style.display = "block";
        cnfrmInpPass.style.borderColor = "red"
    } else {
        // cPassdEl.classList.remove("invalid");
        cpass_err3.style.display = "none";
        cnfrmInpPass.style.borderColor = "whitesmoke";

    }
}
formEl.addEventListener("submit", (e) => {
    e.preventDefault();

    checkEmail();
    createPass();
    confirmPass();

    emailInpEl.addEventListener("keyup", checkEmail);
    createPassInpEl.addEventListener("keyup", createPass);
    cnfrmInpPass.addEventListener("keyup", confirmPass);

    cnfrmInpPass.addEventListener("keyup", ()=>{
        if (email_err1.style.display == "none" &&
        pass_err2.style.display == "none" &&
        cpass_err3.style.display == "none"
    ) {
        console.log(document.getElementsByClassName("btn")[0].firstElementChild)
        console.log(document.getElementById("submit"));

       document.getElementById("submit").style.background="#48e848";
       document.getElementById("submit").value="sumbit now";

    }
    });


    if (email_err1.style.display == "none" &&
        pass_err2.style.display == "none" &&
        cpass_err3.style.display == "none"
    ) {
        location.href = formEl.getAttribute("action");
        // location.href = "https://course.acciojob.com/"
    }
})



let eyeIconEls = document.querySelectorAll(".eyeIcon");
// console.log(eyeIconEl[0],eyeIconEl[1])

eyeIconEls.forEach((eyeIconEl) => {

    eyeIconEl.addEventListener("click", () => {

        if(eyeIconEl.classList.contains("bx-hide"))
        {
            eyeIconEl.classList.replace("bx-hide","bx-show")

        }else{
            eyeIconEl.classList.replace("bx-show" , "bx-hide");
        }
        // console.log(eyeIconEl.previousSibling.previousSibling)

        if (eyeIconEl.previousSibling.previousSibling.type === "password") {
            eyeIconEl.previousSibling.previousSibling.type = "text";
        } else {
            eyeIconEl.previousSibling.previousSibling.type = "password";
        }

        eyeIconEl.previousSibling.previousSibling.focus();
    })
})

// http://p.ip.fi/VIXB
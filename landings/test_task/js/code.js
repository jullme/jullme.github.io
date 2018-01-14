var button_first = document.getElementById('button_first');
var button_second = document.getElementById('button_second');
var button_third = document.getElementById('button_third');

var radio_button_boy = document.getElementById('boy-button');
var radio_button_girl = document.getElementById('girl-button');

var second_form  = document.getElementById('second-form');
var user_name = document.getElementById('name');
var email = document.getElementById('email');
var password = document.getElementById('password');
var acceptance = document.getElementById('acceptance');

var emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function addEvent(element, event, callback) {
    var previousEventCallBack = element["on"+event];
    element["on"+event] = function (e) {
        var output = callback(e);
        if (output === false) return false;

        if (typeof previousEventCallBack === 'function') {
            output = previousEventCallBack(e);
            if(output === false) return false;
        }
    }
};

addEvent(button_first, "click", function () {
    document.getElementById('sidebar').classList.toggle('sidebar--second-step');
    document.getElementById('heart_icon').classList.toggle('sidebar__heart-icon--second-step');
    document.getElementById('heart').classList.toggle('heart-second');
    document.getElementById('nav').classList.toggle('nav--second-step');
    document.getElementById('first-step').style.display = "none";
    document.getElementById('second-step').style.display = "flex";
});

addEvent(radio_button_boy, "click", function () {
    button_second.style.display = "inline-block";
    document.getElementById('result').innerHTML = "<span>52,4%</span><p>\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439\u0020\u2014\u0020\u0412\u0430\u0440\u0438\u0430\u043D\u0442\u0020\u0411</p>";
    document.getElementById('result').style.display = "block";
    document.getElementById('yellow-block').style.display = "block";
});

addEvent(radio_button_girl, "click", function () {
    button_second.style.display = "inline-block";
    document.getElementById('result').innerHTML = "<span>47,6%</span><p>\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439\u0020\u2014\u0020\u0412\u0430\u0440\u0438\u0430\u043D\u0442\u0020\u0410</p>";
    document.getElementById('result').style.display = "block";
    document.getElementById('yellow-block').style.display = "block";
});

addEvent(button_second, "click", function () {
    document.getElementById('second-step').style.display = "none";
    document.getElementById('third-step').style.display = "flex";
    document.getElementById('result').style.display = "none";
    document.getElementById('sidebar').classList.toggle('sidebar--third-step');
    document.getElementById('heart_icon').classList.toggle('sidebar__heart-icon--third-step');
    document.getElementById('heart').classList.toggle('heart-third');
    document.getElementById('yellow-block').style.display = "none";
});

addEvent(user_name, "input", function () {
    if (user_name.value.length !== 0) {
        user_name.className = "second-form__input valid";
        user_name.placeholder = "";
    } else {
        user_name.className = "second-form__input invalid";
        user_name.placeholder = "\u0412\u0432\u0435\u0434\u0438\u0442\u0435\u0020\u0441\u0432\u043E\u0435\u0020\u0438\u043C\u044F";
    }
    checkInputs();
});

addEvent(email, "input", function () {
    if (emailRegExp.test(email.value)) {
        email.className = "second-form__input valid";
        email.placeholder = "";
    } else {
        email.className = "second-form__input invalid";
        email.placeholder = "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439\u0020\u0444\u043E\u0440\u043C\u0430\u0442\u0020\u0065\u006D\u0061\u0069\u006C";
    }
    checkInputs();
});

addEvent(password, "input", function () {
    if (password.value.length !== 0) {
        password.className = "second-form__input valid";
        password.placeholder = "";
    } else {
        password.className = "second-form__input invalid";
        password.placeholder = "\u041F\u0440\u0438\u0434\u0443\u043C\u0430\u0439\u0442\u0435\u0020\u043D\u043E\u0432\u044B\u0439\u0020\u043F\u0430\u0440\u043E\u043B\u044C";
    }
    checkInputs();
});

addEvent(acceptance, "change", function () {
    if (acceptance.checked) {
        acceptance.className = "second-form__input valid";
    } else {
        acceptance.className = "second-form__input invalid";
    }
    checkInputs();
});


addEvent(second_form, "submit", function () {
    checkInputs();
});

function checkInputs() {
    var test_name = (user_name.value.length !== 0);
    var test_email = (emailRegExp.test(email.value));
    var test_password = (password.value.length !== 0);
    var test_acceptance = acceptance.checked;

    if (test_name && test_email && test_password && test_acceptance) {
        button_third.className = "btn btn-third valid";
    } else {
        button_third.className = "btn btn-third invalid";
        return false;
    }
};
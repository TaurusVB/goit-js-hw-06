const form = document.querySelector(".login-form");

form.addEventListener("submit", btnFormSubmit);

function btnFormSubmit(event) {
    event.preventDefault();
    
    const emailValue = event.currentTarget.elements.email.value;

    const passwordValue = event.currentTarget.elements.password.value;

    const data = {
        email: emailValue,
        password: passwordValue,
    };

    const { email, password } = data;

    if (!emailValue || !passwordValue) {
        alert("Всі поля повинні бути заповнені!");
    } else {
        console.log(`Ваш email: ${email}\nВаш пароль: ${password}`);
    }

    form.reset();
};
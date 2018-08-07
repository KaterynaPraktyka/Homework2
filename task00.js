console.log(`1 step`);
console.log(`2 step`);

setTimeout(() => {
    console.log(`3 step`);
}, 3000)

console.log(`4 step`);



console.log(`1 step`);
console.log(`2 step`);
new Promise((resolve, project) => setTimeout(() => {
    console.log(`3 step`);
    resolve();
}, 3000)).then(() => {
    console.log(`4 step`);
});


Promise.all([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 3000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(2), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 1000)),
]).then((results) => {
    console.log(results[0]);
    console.log(results[2]);
});

function login(email, pass) {
    emailInput.setdKeys(email).then(() => {
        passwordInput.sendKeys(pass).then(() => {
            loginButton.click()
        })
    });
}

async function login(email,pass) {
    await emailInput.sendKeys(email);
    await passwordlInput.sendKeys(pass);
    await loginButton.click();
}
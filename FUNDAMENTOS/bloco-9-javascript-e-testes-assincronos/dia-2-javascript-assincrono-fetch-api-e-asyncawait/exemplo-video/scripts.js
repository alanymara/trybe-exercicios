let p = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if (a == 2) {
        resolve('Sucess')
    } else {
        reject('Failed')
    }
})

p.then((message) => {
    console.log('This is in the then' + message)
}).catch((err) => {
    console.log('This is the catch' + err)
})























/* function sumNumbers() {
    let result = 1 + 1;

    if (result == 2) {
        sucessCallback();
    } else {
        errorCallback();
    }
}

function sucessCallback() {
    console.log('Yeah! Number 2!');
}

function errorCallback() {
    console.log('Oops! Something wrong.');
}

sumNumbers(); */
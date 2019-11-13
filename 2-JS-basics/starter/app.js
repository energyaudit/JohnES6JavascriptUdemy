const p1 = new Promise((resolve, reject) => { // eslint-disable-line no-unused-vars
    setTimeout(() => {
        resolve('AppDividend');
    }, 1000);
});

p1.then(values => { 
    console.log(values);
});


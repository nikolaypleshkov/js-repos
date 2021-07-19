const promise = new Promise((reslove, reject) =>{
    setTimeout(() => {
        console.log('got the user');
       // reslove({user: 'niko'});
        reject(new Error('User not found'));
    }, 2000);
});

promise.then(user => {
    console.log(user);
}).catch(err => console.log(err));
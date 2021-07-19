document.write('Start');

function loginUser(email, password){
    return new Promise((reslove, reject) =>{
        setTimeout(() => {
            document.write('We have data')
            reslove({userEmail : email});   
        }, 3000);
    });
}

function getUserVideos(email){
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            reslove( ['video1', 'video2', 'video3']);
        }, 2000);
    });
}

function getVideoTitle(video){
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            reslove(['title1', 'title2', 'title3']);
        },1000);
    })
}

// const user  = loginUser('icelol@abv.bg', 123456, user =>{
//     console.log(user);
//     getUserVideos(user.userEmail, (videos) => {
//         console.log(videos);
//         getVideoTitle(videos[0], (title) => {
//             console.log(title);
//         });
//     });
// });

// loginUser('icelol@abv.bg', 12345)
// .then(user => getUserVideos(user.email))
// .then(videos => getUserVideos(videos[0]))
// .then(titles => console.log(titles));

async function displayUser(){
    try{

    const loggedUser = await loginUser('icelol@abv.bg',12345);
    const videos = await getUserVideos(loggedUser.userEmail);
    const title = await getVideoTitle(videos[0]);
    document.write(title);

    }
    catch(e){
        console.log('Error');
    }
}

displayUser();

document.write('End');
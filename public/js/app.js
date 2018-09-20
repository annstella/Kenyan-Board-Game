document.addEventListener("DOMContentLoaded", event => {

    const app= firebase.app();
    
});

function googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)

        .then(result => {
            const user = result.user;
            document .write(`<body style="background-image=url('images/kenyan-flag.jpg');">
            <a href="grid.html" style="font-size:35px; font-style:Italic; margin-left:150px; margin-top:-200px;" >Hey ${user.displayName}!!! Let's Play!!!</a>
            </body>`);

            console.log(user)
        })
        .catch(console.log)
}
    
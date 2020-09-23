window.addEventListener("load", (e) => {
    let index = new IndexController();
    index.init();
});

class IndexController{

    init() {
        let correctUsername = "example@gmail.com";
        let correctPassword = "testtest";

        let formEl = document.getElementById("loginForm");
        console.log(formEl);
        let loginMis = document.getElementById("error-text");

        console.log(loginMis);
        let onSubmit = function(){
            var name = document.getElementById("name").value;
            var password = document.getElementById("password").value;

            if( name === correctUsername && password === correctPassword ) {
                window.location.href="begiin.html";

            }
            else{
                for (var i = 0; i < formEl.length; i++) {
                    formEl[i].className += " rodeBorder";
                    loginMis.textContent = "Login mislukt!";
                }

            }
        }
        formEl.addEventListener( "submit" , (event) => {
            event.preventDefault( );
            onSubmit();
        })
    }
}
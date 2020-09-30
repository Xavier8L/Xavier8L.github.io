window.addEventListener("load", (e) => {
    let index = new IndexController();
    index.init();
});

class IndexController{

    init() {
        let correctUsername = "Xavier";
        let correctPassword = "302864748";

        let formEl = document.getElementById("loginForm");
        console.log(formEl);
        let loginMis = document.getElementById("error-text");

        console.log(loginMis);
        let onSubmit = function() {
            const name = document.getElementById("name").value;
            const password = document.getElementById("number").value;

            if (name === correctUsername && password === correctPassword) {
                window.location.href = "Toets.html";

            } else {
                let inputs = this.document.getElementsByTagName("input");
                for (const input of inputs) {
                    input.classList.add("rodeBorder")
                }
                this.getElementById("errorText").textContent = "Login mislukt!";
            }
        }
        formEl.addEventListener( "submit" , (event) => {
            event.preventDefault( );
            onSubmit();
        })
    }
}
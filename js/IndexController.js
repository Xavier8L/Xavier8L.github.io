window.addEventListener("load", (e) => {
    let index = new IndexController();
    index.init();
});

class IndexController{

    init()
    {
        var naam1 = document.getElementById("name1").value;
        document.getElementById("naam1").innerHTML = naam1;
        console.log("1");
        console.log(naam1);
        // let formEl = document.getElementById("loginForm");

        let onsubmit =  function()
        {
            const naam1 = document.getElementById("name1").value;
            const naam2 = document.getElementById("name2").value;


            document.getElementById("naam1").innerHTML = naam1;
            console.log(naam1);
            document.getElementById("naam2").innerHTML = document.getElementById("name2").value;
            window.location.href = "index.html";


        }

        //
        // formEl.addEventListener( "submit" , (event) => {
        //     event.preventDefault( );
        //     onsubmit();
        // })



    }





}
window.onload = ()=>{

    window.onscroll = () => {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 850|| document.documentElement.scrollTop > 850) {
            document.getElementById("gotoTop").style.display = "block";
        } else {
            document.getElementById("gotoTop").style.display = "none";
        }
    
    }

    document.getElementById("gotoTop").onclick = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };
    //fleche
    document.getElementById("scroll").onclick = (e) =>{
        e.preventDefault();
        window.scrollTo({top:870, behavior: 'smooth'});
    };

    //lazy loading
    

















































































}
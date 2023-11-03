const allStar = document.querySelectorAll('.rating .star')
const ratingValue = document.querySelector('.rating input')

allStar.forEach((item, idx)=> {
	item.addEventListener('click', function () {
		let click = 0
		ratingValue.value = idx + 1

		allStar.forEach(i=> {
			i.classList.replace('bxs-star', 'bx-star')
			i.classList.remove('active')
		})
		for(let i=0; i<allStar.length; i++) {
			if(i <= idx) {
				allStar[i].classList.replace('bx-star', 'bxs-star')
				allStar[i].classList.add('active')
			} else {
				allStar[i].style.setProperty('--i', click)
				click++
			}
		}
	})
})

function add_review(){
    // var x=document.getElementById("give-review");
    var x=document.getElementById("give-review");
    var y=document.getElementById("show-review");
    if(x.style.top === "-100%"){
        x.style.top="0%";
        y.style.top="-100%";
    }
    else{
        x.style.top="-100%";
        y.style.top="0%";
    }
}

function close_show_review(){
    // var x=document.getElementById("give-review");
    var x=document.getElementById("show-review");
    x.style.top="-100%";
}

function close_give_review(){
    var x=document.getElementById("give-review");
    var y=document.getElementById("show-review");
    if(y.style.top === "-100%"){
        y.style.top="0%";
        x.style.top="-100%";
    }
    else{
        y.style.top="-100%";
        x.style.top="0%";
    }
}


function view_feedback(){
    var x=document.getElementById("show-review");
    if(x.style.top === "-100%"){
        x.style.top="0%";
    }
    else{
        x.style.top="-100%";
    }
}
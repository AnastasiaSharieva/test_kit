//burger-menu

let catalog = document.getElementById("catalog");
let imgClose = document.getElementById("close");
let imgOpen = document.getElementById("open");
let menu = document.getElementById("menu");

let open = false;


function openCatalog() {
    if (open) {
      menu.style.height = 0;
      imgOpen.style.display = "inline";
      imgClose.style.display = "none";
    } else {
      menu.style.height = "100px";
      imgOpen.style.display = "none";
      imgClose.style.display = "inline";
    }
    open = !open;
  }
  
  catalog.addEventListener("click", openCatalog);



//   <div id="burger">
// 		    	<img class="img_burger" src="./assets/close.jpg" alt="" id="close" />
// 		    	<img class="img_burger" src="./assets/burger.jpg" alt="" id="open" />
// 		    	<div id="menu">
// 		    	  <a href="" class="link-burger">Home</a>
// 		    	  <a href="" class="link-burger">Key Features</a>
// 		    	  <a href="" class="link-burger">Pricing</a>
// 		    	  <a href="" class="link-burger">Testiminial</a>
// 		    	  <a href="" class="link-burger">FAQ</a>
// 		    	</div>
// 	    	</div>










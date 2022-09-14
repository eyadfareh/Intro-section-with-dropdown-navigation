import 'normalize.css'
import './style.scss'

function activateMenu(e){
  console.log("opening menu");
  document.getElementById('side-menu').classList.add('active');
  document.getElementById('side-overlay').classList.add('active');
}
function deactivateMenu(e){
  console.log("closing menu");
  document.getElementById('side-menu').classList.remove('active');
  document.getElementById('side-overlay').classList.remove('active');
}
function expandList(e){
  var element = e.target;
  while(true){
    if(element.classList.contains("expandable")){
      break;
    }
    element = element.parentElement;
    element.classList.toggle("active");
  }
  console.log(element);
}

document.getElementById("menu-button").addEventListener('click', activateMenu);
document.getElementById("close-button").addEventListener('click', deactivateMenu);
document.getElementById("side-overlay").addEventListener('click', deactivateMenu);
var expandables = document.querySelectorAll(".expandable");
for(var i=0;i<expandables.length;i++){
  expandables[i].children[0].addEventListener("click", expandList);
}


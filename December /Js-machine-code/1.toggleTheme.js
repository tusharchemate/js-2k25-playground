<button id='toggleTheme' >
        Change Theme
</button>
      
---- js -------

let toggle = false;

const toggleTheme = document.getElementById('toggleTheme');

toggleTheme.addEventListener('click',()=> {
	
	if(toggle) {
   document.body.style.backgroundColor ='Red';

  } else {
  	   document.body.style.backgroundColor ='White';
  }
  toggle = !toggle;

});

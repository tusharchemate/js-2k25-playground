<html>
  <head>
    <title>
      Model Component
    </title>
  </head>
  <body>
   <button id="openModal" >
    Open Modal
    </button>
    <div class="modal-overlay" id=modelOverlay> 
      <div class='modal'>
        <div class='modal-title'>
          <h1>
          This is Modal Title
          </h1>
        </div>
        <div class='model-content'>
          <span> This is model content</span>
        </div>
        <div class='modal-buttons'>
          <button id='closeModal'>
            Close
          </button>
        </div>
      </div>
    </div>
  </body>
</html>
---------------- css -------------------
.modal-overlay {
  position: relative;
  top:10px;
  left:10px;
  display:none;
}

.modal {
    width: 300px;
    background: blue ;
}

----------------- js ---------------------
const openModalBtn = document.getElementById('openModal');
const closeModalBtn = document.getElementById('closeModal')

const modalOverlay = document.getElementById('modelOverlay');


 openModalBtn.addEventListener('click',()=> {
	modalOverlay.style.display ='flex';
})

 closeModalBtn.addEventListener('click',()=> {
	modalOverlay.style.display ='none';
})

  

'use strict';
const modal = document.querySelector('.modal');
const overLay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

for(let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', function () {
        modal.classList.remove('hidden');
        overLay.classList.remove('hidden');
    });
    // console.log(btnsOpenModal[i])
    
    btnCloseModal.addEventListener('click', function () {
        overLay.classList.add('hidden');
        modal.classList.add('hidden');
    });
}

const closeModal = function () {
    overLay.classList.add('hidden');
    modal.classList.add('hidden');
};

overLay.addEventListener('click', closeModal);


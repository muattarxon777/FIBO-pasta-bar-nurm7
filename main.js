const elModalOpener = document.querySelector('.sitenav-container-second-links-btn');
const elModal = document.querySelector('.helper');
const elModalDiv = document.querySelector('.helper-container');
const elModalExit = document.querySelector('.helper-container-exit');

elModalOpener.addEventListener('click', function () {
  elModal.classList.add('helper-open');
  elModalDiv.classList.add('helper-open');
});

elModalExit.addEventListener('click', function () {
  elModal.classList.add('helper-exit');
});
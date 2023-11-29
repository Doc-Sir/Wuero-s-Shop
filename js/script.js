const toggleModeButton = document.getElementById('toggleMode');
const itemsContainer = document.querySelector('.items');

toggleModeButton.addEventListener('click', toggleMode);

function toggleMode() {
  itemsContainer.classList.add('slide-animation');
  itemsContainer.classList.toggle('dark-mode');
  setTimeout(() => {
    itemsContainer.classList.remove('slide-animation');
  }, 500);
}
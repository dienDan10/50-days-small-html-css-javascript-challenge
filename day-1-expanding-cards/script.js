const imageBoxs = document.querySelectorAll('.image_box');

imageBoxs.forEach(box => {
  box.addEventListener('click', expand);
})

function expand(e) {
  imageBoxs.forEach(box => {
    box.style.flexGrow = '0';
  });
  e.target.parentElement.style.flexGrow = '1';
}
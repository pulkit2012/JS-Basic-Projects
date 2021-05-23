// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class
const bars = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')

bars.addEventListener('click', () => {
  //   const isThere = links.classList
  //   isThere.contains('show-links')
  //     ? isThere.remove('show-links')
  //     : isThere.add('show-links')
  links.classList.toggle('show-links')
})

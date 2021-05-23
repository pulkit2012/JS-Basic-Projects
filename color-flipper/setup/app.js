const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025']
const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', () => {
  // getting random number from 0 to 3 to access elements from colors array
  const random = Math.floor(Math.random() * colors.length)
  document.body.style.backgroundColor = colors[random]
  color.textContent = colors[random]
})

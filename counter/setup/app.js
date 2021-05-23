const value = document.getElementById('value')
const btns = document.querySelectorAll('.btn')
let val = 0
btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const styles = e.currentTarget.classList
    if (styles.contains('increase')) {
      val++
    } else if (styles.contains('reset')) {
      val = 0
    } else {
      val--
    }
    value.textContent = val
    if (val > 0) {
      value.style.color = 'green'
    } else if (val < 0) {
      value.style.color = 'red'
    } else {
      value.style.color = 'black'
    }
  })
})

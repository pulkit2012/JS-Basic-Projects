//using selectors inside the element

const question = document.querySelectorAll('.question')

question.forEach((parent) => {
  const btn = parent.querySelector('.question-btn')
  btn.addEventListener('click', () => {
    question.forEach((item) => {
      if (parent !== item) {
        item.classList.remove('show-text')
      }
    })
    parent.classList.toggle('show-text')
  })
})

// traversing the dom
/* const btns = document.querySelectorAll('.question-btn')
btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const parent = e.currentTarget.parentElement.parentElement
    parent.classList.toggle('show-text')
  })
})
 */

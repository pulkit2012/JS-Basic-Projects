const btns = document.querySelectorAll('.tab-btn')
const about = document.querySelector('.about')
const articles = document.querySelectorAll('.content')

about.addEventListener('click', (e) => {
  const id = e.target.dataset.id
  if (id) {
    // remove active from all btns
    btns.forEach((btn) => {
      btn.classList.remove('active')
      e.target.classList.add('active')
    })
    articles.forEach((article) => {
      article.classList.remove('active')
    })
    const element = document.getElementById(id)
    element.classList.add('active')
  }
})

//We can do this way also
/* btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const id = e.currentTarget.dataset.id
    const element = document.getElementById(id)
    const all = document.querySelectorAll('.content')
    all.forEach((element) => {
      element.classList.remove('active')
    })
    btns.forEach((btn) => {
      btn.classList.remove('active')
    })
    if (!element.classList.contains('active')) {
      element.classList.add('active')
      btn.classList.add('active')
    }
  })
})
 */

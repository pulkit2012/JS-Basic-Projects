const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]
const giveaway = document.querySelector('.giveaway')
const deadline = document.querySelector('.deadline')
const items = document.querySelectorAll('.deadline-format h4')

let tempDate = new Date()
let tempYear = tempDate.getFullYear()
let tempMonth = tempDate.getMonth()
let tempDay = tempDate.getDate()
const date = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0)

giveaway.textContent = `giveaway ends on ${
  weekdays[date.getDay()]
} , ${date.getDate()} ${
  months[date.getMonth()]
} ${date.getFullYear()} , ${date.getHours()}:${date.getMinutes()} ${
  date.getHours() > 12 ? 'pm' : 'am'
}`

function format(item) {
  return item > 10 ? item : `0${item}`
}

function getRemainingTime() {
  const newDate = new Date()
  const remaining = date.getTime() - newDate.getTime()
  const rdays = Math.floor(remaining / (24 * 60 * 60 * 1000))
  const rhours = Math.floor(
    (remaining % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
  )
  const rminutes = Math.floor((remaining % (60 * 60 * 1000)) / (60 * 1000))
  const rseconds = Math.floor((remaining % (60 * 1000)) / 1000)
  const values = [rdays, rhours, rminutes, rseconds]

  items.forEach((item, index) => {
    item.innerHTML = format(values[index])
  })
  if (remaining < 0) {
    clearInterval(countdown)
    deadline.innerHTML = `<h4 class="expired">
          Sorry, this giveaway has expired
        </h4>`
  }
}
let countdown = setInterval(getRemainingTime, 1000)
getRemainingTime()

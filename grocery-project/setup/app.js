// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert')
const form = document.querySelector('.grocery-form')
const grocery = document.getElementById('grocery')
const submitBtn = document.querySelector('.submit-btn')
const container = document.querySelector('.grocery-container')
const list = document.querySelector('.grocery-list')
const clearBtn = document.querySelector('.clear-btn')

// edit option
let editElement
let editFlag = false
let editId = ''
// ****** EVENT LISTENERS **********
form.addEventListener('submit', addItem)
clearBtn.addEventListener('click', clearItems)
// load items
window.addEventListener('DOMContentLoaded', setupItems)
// ****** FUNCTIONS **********
function addItem(e) {
  e.preventDefault()
  const id = new Date().getTime().toString()
  const value = grocery.value
  if (value && !editFlag) {
    createListItem(id, value)
    //display alert
    displayAlert('item added successfully', 'success')
    //show items
    container.classList.add('show-container')
    //added to local storage
    addToLocalStorage(id, value)
    //set back to default state
    setBackToDefault()
  } else if (value && editFlag) {
    editElement.innerHTML = value
    displayAlert('Value Added', 'success')
    //edit local storage
    editLocalStorage(editId, value)
    setBackToDefault()
  } else {
    displayAlert('Please enter the value', 'danger')
  }
}

function displayAlert(text, class1) {
  alert.textContent = text
  alert.classList.add(`alert-${class1}`)

  setTimeout(() => {
    alert.textContent = ''
    alert.classList.remove(`alert-${class1}`)
  }, 2000)
}
// clear items
function clearItems() {
  const items = document.querySelectorAll('.grocery-item')
  if (items.length > 0) {
    items.forEach((item) => {
      list.removeChild(item)
    })
  }
  container.classList.remove('show-container')
  displayAlert('List emptied', 'danger')
  setBackToDefault()
  localStorage.removeItem('list')
}
//delete function
function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement
  const id = element.dataset.id
  list.removeChild(element)
  if (list.children.length === 0) {
    container.classList.remove('show-container')
  }
  displayAlert('item emoved', 'danger')
  setBackToDefault()
  //remove from local storage
  removeFromLocalStorage(id)
}
//edit function
function editItem(e) {
  const element = e.currentTarget.parentElement.parentElement
  //set edit item
  editElement = e.currentTarget.parentElement.previousElementSibling
  grocery.value = editElement.innerHTML
  editFlag = true
  editId = element.dataset.id
  submitBtn.textContent = 'edit'
}
//set back to default
function setBackToDefault() {
  grocery.value = ''
  editFlag = false
  editId = ''
  submitBtn.textContent = 'submit'
}

// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value) {
  const grocery = { id, value } // in ES6 we can use {id: id,value:value}
  let items = getLocalStorage()
  console.log(items)
  items.push(grocery)
  localStorage.setItem('list', JSON.stringify(items))
}
function removeFromLocalStorage(id) {
  let items = getLocalStorage()
  items = items.filter((item) => {
    if (item.id !== id) {
      return item
    }
  })
  localStorage.setItem('list', JSON.stringify(items))
}
function editLocalStorage(editId, value) {
  let items = getLocalStorage()
  items = items.map((item) => {
    if (item.id === editId) {
      item.value = value
    }
    return item
  })
  localStorage.setItem('list', JSON.stringify(items))
}
function getLocalStorage() {
  return localStorage.getItem('list')
    ? JSON.parse(localStorage.getItem('list'))
    : []
}

// localstorage API
// setItem
// getItem
// removeItem
// save as strings

// ****** SETUP ITEMS **********

function setupItems() {
  let items = getLocalStorage()
  if (items.length > 0) {
    items.forEach((item) => {
      createListItem(item.id, item.value)
    })
    container.classList.add('show-container')
  }
}

function createListItem(id, value) {
  const element = document.createElement('article')
  element.classList.add('grocery-item')
  const data = document.createAttribute('data-id')
  data.value = id
  element.setAttributeNode(data)
  element.innerHTML = `<p class="title">${value}</p>
            <div class="btn-container">
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>`
  const deleteBtn = element.querySelector('.delete-btn')
  const editBtn = element.querySelector('.edit-btn')
  deleteBtn.addEventListener('click', deleteItem)
  editBtn.addEventListener('click', editItem)
  //append child
  list.appendChild(element)
}

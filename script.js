const form = document.querySelector('.item-lister__form'),
  formInput = document.querySelector(".form__input"),
  sendBtn = document.querySelector('.btn'),
  listGroup = document.querySelector('.list-group');

form.addEventListener('submit', (event) => {
  event.preventDefault()
  if (formInput.value === '') {
    alert('iltimos malumot kiriting')
  } else {
    const li = document.createElement('li')
    li.className = "list-group-item"
    li.textContent = formInput.value

    const listGroupContainer = document.createElement('div')
    const listControlsEdit = document.createElement('div')
    const editedInput = document.createElement('input')
    const editedBtn = document.createElement('button')
    const listControls = document.createElement('div')
    const editBtn = document.createElement('button')
    const removeBtn = document.createElement('button')
    const pencil = document.createElement('i')
    const editIcon = document.createElement('i')
    const removeIcon = document.createElement('i')

 

    listGroupContainer.className = "list-group_controls"
    listControlsEdit.className = "list-controls_edit"
    listControls.className = "list-controls"

    pencil.className = "fa-solid fa-pencil"
    editIcon.className = "fa-solid fa-pen-nib"
    removeIcon.className = "fa-sharp fa-solid fa-trash"

    editedInput.setAttribute("type", "text")
    editedInput.className = "edited-input"

    editedBtn.setAttribute('type', 'button')
    editedBtn.className = "edited-btn controls-btn"

    editBtn.setAttribute('type', 'button')
    editBtn.className = "edit-btn controls-btn"

    removeBtn.setAttribute('type', 'button')
    removeBtn.className = "remove-btn controls-btn"

    editedBtn.append(pencil)
    editBtn.append(editIcon)
    removeBtn.append(removeIcon)

    listControlsEdit.append(editedInput, editedBtn)

    listControls.append(editBtn, removeBtn)

    listGroupContainer.append(listControlsEdit, listControls)

    li.append(listGroupContainer)

    removeBtn.addEventListener('click', () => {
      li.remove()
    })

    let togle = false

    editBtn.addEventListener('click', () => {
      togle = !togle
      if(togle) {
        listControlsEdit.style.display="block"
      }else {
        listControlsEdit.style.display="none"
      }
      editedInput.value = li.innerText
      editedBtn.addEventListener('click', () => {
        if(editedInput.value === '') {
          alert("iltimos malumot kiriting")
        }else {
          li.innerText = editedInput.value
          li.append(listGroupContainer)
          listControlsEdit.style.display="none"
        }
      })
    })

    listGroup.appendChild(li)
    formInput.value = ''
  }
})
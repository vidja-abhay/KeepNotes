const ItemsArray = localStorage.getItem('Items') ? JSON.parse(localStorage.getItem('Items')) : []

console.log(ItemsArray);

document.querySelector('#add').addEventListener('click', () => {
  const item = document.querySelector('#desc')
  Createtodo(item);
})

function Displaytodo() {
  let items = ''
  for (let i = 0; i < ItemsArray.length; i++) {
    items += 
      `
      <div class="notes">
        <div class="info">
            <h3>Notes ${i+1}</h3>
            <p id="para">${ItemsArray[i]}</p>
        </div>

        <div class="delete">
            <button type="button" class="btn-delete">Delete</button>
        </div>
      </div>
      `
  }
  document.querySelector('.notes-list').innerHTML = items;
  activatedeleteListner();
  // activateEditListner();
}

function activatedeleteListner() {
  let deleteBtn = document.querySelectorAll('.btn-delete')
  deleteBtn.forEach((value, i) => {
    console.log(i);
    console.log(value)
    value.addEventListener('click', () => { deletetodo(i) })
  })
}

function deletetodo(i) {
  ItemsArray.splice(i, 1)
  localStorage.setItem("Items", JSON.stringify(ItemsArray));
  location.reload();
}

function Createtodo(item) {
  ItemsArray.push(item.value)
  localStorage.setItem("Items", JSON.stringify(ItemsArray));
  location.reload();
}

window.onload = () => {
  Displaytodo();
}
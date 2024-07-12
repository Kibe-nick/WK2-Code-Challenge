// Array to store shopping list items
let shoppingItems = [];

// render the shopping list
function renderShoppingList() {
  const shoppingListElem = document.getElementById('shoppingList');
  shoppingListElem.innerHTML = '';

  shoppingItems.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = item.name;
    if (item.purchased) {
      li.classList.add('purchased');
    }
    li.addEventListener('click', () => {
      togglePurchasedStatus(index);
    });
    shoppingListElem.appendChild(li);
  });
}

//  add a new item to the shopping list
function addItem() {
  const itemInput = document.getElementById('itemInput');
  const itemName = itemInput.value.trim();
  if (itemName === '') return;

  shoppingItems.push({ name: itemName, purchased: false });
  renderShoppingList();
  itemInput.value = '';
}

// Function to mark all items as purchased
function markAllPurchased() {
    shoppingItems.forEach(item => {
      item.purchased = true;
    });
    renderShoppingList();
  }

// toggle the purchased status of an item
function togglePurchasedStatus(index) {
  shoppingItems[index].purchased = !shoppingItems[index].purchased;
  renderShoppingList();
}

// Function to clear the shopping list
function clearList() {
  shoppingItems = [];
  renderShoppingList();
}

// Event listeners
document.getElementById('addItemBtn').addEventListener('click', addItem);
document.getElementById('clearListBtn').addEventListener('click', clearList);
document.getElementById('markPurchasedBtn').addEventListener('click', markAllPurchased);
 
// Initial render
renderShoppingList();

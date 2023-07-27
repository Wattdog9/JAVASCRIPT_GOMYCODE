const items = document.querySelectorAll('.item');
const totalElement = document.getElementById('total-price');

let totalPrice = 0;

items.forEach(item => {
  const quantityElement = item.querySelector('.quantity');
  const incrementButton = item.querySelector('.increment');
  const decrementButton = item.querySelector('.decrement');
  const deleteButton = item.querySelector('.delete');
  const likeButton = item.querySelector('.like');

  let quantity = parseInt(quantityElement.textContent);
  const price = 10; // Change this to the actual price of the item

  updateTotal(price * quantity);

  incrementButton.addEventListener('click', () => {
    quantity++;
    quantityElement.textContent = quantity;
    updateTotal(price);
  });

  decrementButton.addEventListener('click', () => {
    if (quantity > 1) {
      quantity--;
      quantityElement.textContent = quantity;
      updateTotal(-price);
    }
  });

  deleteButton.addEventListener('click', () => {
    const itemTotal = price * quantity;
    item.remove();
    updateTotal(-itemTotal);
  });

  likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('liked');
  });
});

function updateTotal(price) {
  totalPrice += price;
  totalElement.textContent = totalPrice;
}

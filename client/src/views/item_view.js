const ItemView = function (element){
  this.element = element;
}

ItemView.prototype.render = function (item) {

  const itemDiv = document.createElement('div');
  itemDiv.classList.add('item-div');

  const itemWish = document.createElement('h3');
  itemWish.classList.add('item-wish');
  itemWish.textContent = item.bucket_item;
  itemDiv.appendChild(itemWish);

  const itemLocation = document.createElement('p');
  itemLocation.classList.add('item-location');
  itemLocation.textContent = item.location;
  itemDiv.appendChild(itemLocation);

  const itemImage = document.createElement('img');
  itemImage.classList.add('item-image');
  itemImage.src = item.image_url;
  itemDiv.appendChild(itemImage);

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete-btn');
  deleteButton.value = item._id;

  itemDiv.appendChild(deleteButton);
  deleteButton.addEventListener('click', (evt) => {
    PubSub.publish('ItemView:delete-click', evt.target.value);
  });


const updateButton = document.createElement('input');
updateButton.type = 'checkbox';
  // const updateButton = document.createElement('button');
  updateButton.classList.add('item-update');
  if (item.completed === true){
    item.completed = false
    updateButton.checked = true
  }else {
    item.completed = true
    updateButton.checked = false
  }
  updateButton.value = item._id;
  console.log(updateButton.value)
  itemDiv.appendChild(updateButton);

  updateButton.addEventListener('click', (evt) => {
    PubSub.publish('ItemView:update-click', item);
  });

  this.element.appendChild(itemDiv)
}

module.exports = ItemView

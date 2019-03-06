const ItemView = function (element){
  this.element = element;
}

ItemView.prototype.render = function (item) {


  console.log(this.element);
  console.log('from item view',  item);
  const itemDiv = document.createElement('div');
  itemDiv.classList.add('item-div');
  this.element.appendChild(itemDiv)

  const itemWish = document.createElement('h3');
  itemWish.classList.add('item-wish');
  itemWish.textContent = item.bucket_item;
  itemDiv.appendChild(itemWish);

  const itemLocation = document.createElement('p');
  itemLocation.classList.add('item-location');
  itemLocation.textContent = item.location;
  itemDiv.appendChild(itemLocation);

  const itemImage = document.createElement('p');
  itemImage.classList.add('item-image');
  itemImage.textContent = item.image_url;
  itemDiv.appendChild(itemImage);

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('item-delete');
  deleteButton.value = item._id;
  deleteButton.textContent = `Delete ${item.bucket_item}`
  itemDiv.appendChild(deleteButton);
  deleteButton.addEventListener('click', (evt) => {
    PubSub.publish('ItemView:delete-click', evt.target.value);
  });
};
module.exports = ItemView

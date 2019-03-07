PubSub = require("../helpers/pub_sub.js");
RequestHelper = require("../helpers/request_helper.js")

const BucketList = function (url) {
  this.url = url;
  this.request = new RequestHelper(this.url);
};

BucketList.prototype.bindEvents = function () {
  PubSub.subscribe('ItemView:delete-click', (evt) => {
    this.deleteItem(evt.detail);
  });

  PubSub.subscribe('ItemView:update-click', (evt) => {
    this.editItem(evt.detail);
  });

  PubSub.subscribe("FormView: submit", (evt) => {
    this.saveItem(evt.detail);
  });
};

BucketList.prototype.getData = function () {
this.request.get()
.then((items) => {
  PubSub.publish("BucketList:items-loaded", items)
})
.catch(console.error);

}

BucketList.prototype.saveItem = function (docObject) {
this.request.post(docObject)
.then((items) => {
  PubSub.publish("BucketList:items-loaded", items)
})
.catch(console.error)

};

BucketList.prototype.editItem = function (docObject) {
  console.log(docObject)
  this.request.put(docObject._id, docObject)
  .then((items) => {
    PubSub.publish("BucketList:items-loaded", items)
  })
  .catch(console.error)
  };

BucketList.prototype.deleteItem = function (listId) {
this.request.delete(listId)
.then((items) => {
  PubSub.publish("BucketList:items-loaded", items)
})
.catch(console.error)
};

module.exports = BucketList;

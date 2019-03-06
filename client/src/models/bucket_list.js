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
  // PubSub.subscribe("ResultView: tick", (evt) => {
  //   this.editItem(evt.detail);
  // });
  PubSub.subscribe("FormView: submit", (evt) => {
    console.log(evt.detail);
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
console.log("pre post");
this.request.post(docObject)
.then((items) => {
  console.log("in saveItem");
  console.log(docObject);
  PubSub.publish("BucketList:items-loaded", items)
})
.catch(console.error)

};

// BucketList.prototype.editItem = function () {
//
// };

BucketList.prototype.deleteItem = function (listId) {
this.request.delete(listId)
.then((items) => {
  PubSub.publish("BucketList:items-loaded", items)
})
.catch(console.error)
};




module.exports = BucketList;

PubSub = require("../helpers/pub_sub.js")
ItemView = require("./item_view.js")

const ResultView = function(element){
this.element = element;
}

ResultView.prototype.bindEvents = function () {
PubSub.subscribe("BucketList:items-loaded",(items)=>{
const itemsAry =  items.detail;
this.element.innerHTML = '';
this.render(itemsAry)
});

}

ResultView.prototype.render = function (itemsAry) {
  itemsAry.forEach((item)=>{
    const itemView = new ItemView(this.element)
    itemView.render(item)
  });
};

module.exports = ResultView;

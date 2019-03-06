PubSub = require("../helpers/pub_sub.js")

const FormView = function(form){
  this.form = form;
}

FormView.prototype.bindEvents = function () {
  this.form.addEventListener('submit',(evt) => {
    evt.preventDefault();
    PubSub.publish("FormView: submit", {
      "bucket_item":evt.target.item_bucketlist.value,
      "location":evt.target.item_location.value,
      "image_url":evt.target.item_image.value
    });
  
  });
};



module.exports = FormView;

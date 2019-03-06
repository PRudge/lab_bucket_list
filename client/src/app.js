const FormView = require('./views/form_view.js')
const ResultView = require('./views/result_view.js');
const BucketList = require('./models/bucket_list.js');

document.addEventListener('DOMContentLoaded', () => {
  const formElement = document.querySelector("form#item-input");
  const formView = new FormView(formElement);
  formView.bindEvents();

  const  resultElement = document.querySelector("#bucketlist-results");
  const resultView = new ResultView(resultElement);
  resultView.bindEvents();

  const url = "http://localhost:3000/api/bucketlist";
  const bucketList = new BucketList(url);
  bucketList.bindEvents();
  bucketList.getData();
});

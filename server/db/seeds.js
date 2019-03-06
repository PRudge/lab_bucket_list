use bucketlist;
db.dropDatabase();

db.bucketlist.insertMany([
 {
   bucket_item: "Visit Big Benl",
   location: "London",
   image_url: "test"
 },
 {
   bucket_item: "Jump Off Forth Road Bridge",
   location: "Queensferry",
   image_url: "test"
 },
 {
   bucket_item: "Roll Cheese Down a Hill",
   location: "Cheddar Gorge",
   image_url: "test"
 }
]);

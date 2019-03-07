use bucketlist;
db.dropDatabase();

db.items.insertMany([
 {
   bucket_item: "Visit Big Ben",
   location: "London",
   image_url: '/images/london.jpg',
   completed: false
 },
 {
   bucket_item: "Stonehenge",
   location: "England",
   image_url: "/images/stonehenge.jpg",
   completed: false
 },
 {
   bucket_item: "Camino de Santiago",
   location: "Spain",
   image_url: "/images/caminodesantiago.jpg",
   completed: false
 }
]);

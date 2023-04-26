use hotel;
db.dropDatabase();

db.bookings.insertMany([
  {
    guest_name: "Stuart",
    guest_email_address: "blabla@bla.com",
    checked_in: true
  },
  {
    guest_name: "Guillaune",
    guest_email_address: "albalb@alb.com",
    checked_in: false
  },
  {
    guest_name: "Little Egret",
    guest_email_address: "Seamill@gmail.com",
    checked_in: false
  }
]);

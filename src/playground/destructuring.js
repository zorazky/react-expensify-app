const book = {
  title: 'Ego in the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
};

const { name: publisherName = "Self-Published" } = book.publisher;

//console.log(publisherName);


const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [street, city, state, zip] = address;

console.log(`You are in ${city} ${state}.`)


const item = ['coffee (hot)', '$2','$3','$4'];


const [coffee, , medium, big] = item;

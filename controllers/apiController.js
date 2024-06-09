const {readDatabase, writeDatabase}= require('../config/db.js');



const getItems  = ('/items', (req, res) => {
    const db = readDatabase();
    res.json(db);
  });

const getSingleItem = ('/items/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const db = readDatabase();
    const item = db.find(i => i.id === id);
    if (item) {
      res.json(item);
    } else {
      res.status(404).send('Item not found');
    }
  });


const updateItem = ('/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedItem = req.body;
    const db = readDatabase();
    const itemIndex = db.findIndex(i => i.id === id);
    if (itemIndex !== -1) {
      db[itemIndex] = updatedItem;
      writeDatabase(db);
      res.json(updatedItem);
    } else {
      res.status(404).send('Item not found');
    }
  });


const addItem = ('/items', (req, res) => {
    const {name, id} = req.body;
    const db = readDatabase();
    db.push({name, id}); 
    writeDatabase(db);
    res.status(201).json({name, id});
});

const deleteItem = ('/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const db = readDatabase();
    const itemIndex = db.findIndex(i => i.id === id);
    if (itemIndex !== -1) {
      let newData = db.filter((item)=>id!==item.id); 
      writeDatabase(newData);
      res.send("deleted successfully!!");
    } else {
      res.status(404).send('Item not found');
    }
  });

module.exports = {
    getItems, getSingleItem, updateItem, addItem, deleteItem
}
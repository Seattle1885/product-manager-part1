const ProductController = require('../controllers/products.controller');

module.exports = (app) => {
    //Index route
    app.get('/api/product', ProductController.index);
    // Create route to creat a product
    app.post('/api/product/create',ProductController.create);
    // Id route to get a single product
    app.get('/api/product/:id',ProductController.show);
    //Id route to update product
    app.put('/api/update/:id', ProductController.update);
    //id route to destroy product
    app.delete('/api/delete/:id', ProductController.delete);
}
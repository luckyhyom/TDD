const ProductService = require('../product_service');
const StubProductClient = require('./stub_product_client');
describe('productService - DI', () => {
    let service;
    beforeEach(() => {
        service = new ProductService(new StubProductClient());
    })

    it('', async () => {
        expect(await service.fetchAvailableItems()).toEqual([{"available": true, "item": "nike"}]);
    })
})
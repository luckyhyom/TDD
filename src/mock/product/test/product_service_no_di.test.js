const ProductService = require('../product_service_no_di.js');
const ProductClient = require('../product_client.js');

/**
 * jest.mock은 모듈명을 인자로 받아서 모의 함수를 만든다. (jest.fn이라고 생각해서 헷갈렸었음)
 * 
 * new를 쓰지 않으면 mock 메소드가 로그에 찍히고, new를 쓰면 목킹된 클래스가 로그에 찍힌다.
 */
jest.mock('../product_client.js');
describe('Product Service', () => {
    const fetchItems = jest.fn(async () => [
        { item: 'nike', available: true},
        { item: 'adidas', available: false},
    ]);

    // ProductClient를 모의 구현한다.
    ProductClient.mockImplementation(() => {
        return {
            fetchItems,
        }
    });

    let service;
    beforeEach(() => {
        service = new ProductService();        
    });

    it('should be available', async () => {
        const items = await service.fetchAvailableItems();
        expect(items).toEqual({ item: 'nike', available: true});
    });
});

/**
 * ProductClient를 관찰 할 수 있다. 이게 무슨 소용이지? 설계한다는건가.
 * 
 * 
 * 
 */
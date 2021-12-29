const ProductClient = require('./product_client');
class ProductService {
  constructor() {
    this.productClient = new ProductClient();
  }

  fetchAvailableItems() {
    return this.productClient
      .fetchItems()
      .then((items) => items.filter((item) => item.available));
  }
}

module.exports = ProductService;

// available 속성이 있는지 확인해야함.

/**
 * 메소드의 구현 사항이 변경될 수 있으므로, 결과값만 받는 메소드가 필요하다.?
 * 1. available을 필터링 하는 메소드를 각각의 product가 가지고 있을 것인지, 서비스에 구현 할 것인지.
 * 2. 적어도 클라이언트가 데이터를 객체로 만들어서 보내줘야 하지 않을까?
 * 3. 근데.. 독립적이어야함. 클라이언트 없이도 그냥 available을 체크하는지 확인할수있어야함. (그래서 2번이 필요함)
 * 4. item을 체크하는지 확인하려면 목함수가 들어가서 어쩌구 해야되잖아
 * 
 * 1. 내부로 숨기고, 새로운 메소드를 만든다?
 */
// fetchAvailableItems() {
//   return this.productClient
//     .fetchItems()
//     .then((items) => items.filter((item) => item.available));
// }
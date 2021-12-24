const fetchProduct = require('../src/async');

describe('FetchProduct', () => {

    /**
     * 비동기 함수이기 때문에 then이 호출 되기도 전에 다음으로 넘어가서 pass가 된다.
     * done() -> 왜 시간이 오래걸릴까
     * return
     * await
     */

    it.skip('async - done', (done) => {
        fetchProduct().then((item) => {
            expect(item).toEqual({item: 'Milk', price: 2020 });
            done();
        });
    });

    it('async - return', () => {
        return fetchProduct().then((item) => {
            expect(item).toEqual({item: 'Milk', price: 200 });
        });
    });

    it('async - await', async () => {
        const prodoct = await fetchProduct();
        expect(prodoct).toEqual({item: 'Milk', price: 2200 });
    });

    it('async - resolves', () => {
        return expect(fetchProduct()).resolves.toEqual({item: 'Milk', price: 200 });
    });

    it('async - rejects', () => {
        return expect(fetchProduct('error')).rejects.toBe('network error');
    });
});
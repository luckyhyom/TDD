const check = require('../check.js');

/**
 * 콜백 함수가 안에서 어떻게 동작하는지, 내부함수를 굳이 확인해야하나?
 * 
 * 함수를 인자로 주면 안에서 어떻게 동작해야하는지 정의하는 용도로.. 쓸 수 있는 것 같기도?
 * 인자로 들어가는 함수도 따로 테스트코드가 있겠지만?
 * 예를 들어 불쾌지수를 구할때 온도 습도를 어떻게 써야하는지 정의할 때?.. 물론 각 온도 습도의 구현 사항은 알 필요가 없어야 한다.
 */

describe('check', () => {
    let mockSuccess;
    let mockFail;

    beforeEach(() => {
        // 매번 초기화 해야함
        mockSuccess = jest.fn();
        mockFail = jest.fn();
    });
    it('should be called with yes', () => {
        check(() => true, mockSuccess, mockFail);

        // expect(mockSuccess.mock.calls.length).toBe(1);
        expect(mockSuccess).toHaveBeenCalledTimes(1);

        // 첫번째로 호출된 mockSuccess의 첫번째 인자 확인
        // expect(mockSuccess.mock.calls[0][0]).toBe('yes');
        expect(mockSuccess).toHaveBeenCalledWith('yes')

        // expect(mockFail.mock.calls.length).toBe(0);
        expect(mockFail).toHaveBeenCalledTimes(0);
    });
    it('should be called with no', () => {
        check(() => false, mockSuccess, mockFail);
        expect(mockFail).toHaveBeenCalledTimes(1);
        expect(mockFail).toHaveBeenCalledWith('no');
        expect(mockSuccess).toHaveBeenCalledTimes(0);
    });
});
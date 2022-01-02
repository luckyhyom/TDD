const UserService = require('../user_service');
const StubUserClient = require('./stub_user_client');

describe('', () => {
    let service;
    let client;
    beforeEach(() => {
        client = new StubUserClient();
        service = new UserService(client);
    })
    it('로그인 상태를 가지고 있다.', async () => {
        expect(service.isLogedIn).toBeFalsy();
        await service.login('id', 'password');
        expect(service.isLogedIn).toBeTruthy();
        // expect(client).toBeCalledTimes(1);
    });
});

/**
 * 실제 구현된 테스트 객체인 Stub은 결과값은 반환하지만, 모의객체가 아니므로 실행 과정을 테스트 할 수는 없다(spy).
 */
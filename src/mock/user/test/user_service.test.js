const UserService = require('../user_service');
const UserClient = require('../user_client');

jest.mock('../user_client.js');
describe('', () => {
    const login = jest.fn(async () => {
        return { data: true }
    })
    UserClient.mockImplementation(() => {
        return {
            login
        }
    })

    let service;
    beforeEach(() => {
        service = new UserService(new UserClient());
    })
    it('로그인 상태를 가지고 있다.', async () => {
        expect(service.isLogedIn).toBeFalsy();
        await service.login('id', 'password');
        expect(login).toBeCalledTimes(1);
    });
    
    it('로그인 상태라면 login 메소드를 호출하지 않는다.', async () => {
        await service.login('id', 'password');
        expect(service.isLogedIn).toBeTruthy();
        expect(login).toBeCalledTimes(1);

        await service.login('id', 'password');
        await service.login('id', 'password');
        await service.login('id', 'password');
        await service.login('id', 'password');
        expect(login).toBeCalledTimes(1);
    });
})
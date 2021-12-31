const UserService = require('../user_service');
const UserClient = require('../user_client');

jest.mock('../user_client');
describe('', () => {
    beforeAll(() => {
        UserClient.mockImplementation(() => {
            return {
                login: jest.fn(async () => {
                    return {
                        data: true
                    }
                })
            }
        })
    })

    let service;
    beforeEach(() => {
        service = new UserService();
    })
    it('로그인 상태를 가지고 있다.', async () => {
        expect(service.isLogedIn).toBeFalsy();
        service.login('id', 'password');
        // expect(UserClient.mock.login).toBeCalledTimes(1);
    });
})
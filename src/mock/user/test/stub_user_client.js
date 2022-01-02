class StubUserClient {
    async login(id, password) {
        return true;
    }
}

module.exports = StubUserClient;
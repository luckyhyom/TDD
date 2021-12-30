class StubProductClient {

  async fetchItems() {
    return [
      { item: 'nike', available: true },
      { item: 'adidas', available: false },
    ]
  }
}

module.exports = StubProductClient;

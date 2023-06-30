function MockResponse() {
  this.status = jest.fn(() => this);
  this.json = jest.fn(() => this);
  this.send = jest.fn(() => this);
  this.restore = () => {};
}

module.exports = {
  MockResponse,
};

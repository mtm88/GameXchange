const gameListMock = require('./../mocks/gamelist.json');

function fetchOffersList() {
  return gameListMock.gamelist;
}

module.exports = {
  fetchOffersList,
};

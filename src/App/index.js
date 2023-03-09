/* exported App */
class App {
  constructor() {}

  get book() {
    if (!this._book) this._book = SpreadsheetApp.getActive();
    return this._book;
  }

  /**
   *
   * @param {Array.<Array.<any>>} array
   * @returns {Array.<object>}
   */
  toCollection(array) {
    return array.slice(1).map(
      (_, rowIndex) =>
        array[0].reduce((rowCollection, header, columnIndex) => {
          const h = String(header).toLowerCase() || `__col${String(columnIndex).padStart('0', 2)}`;
          rowCollection[h] = {
            __row: rowIndex + 2,
            __col: columnIndex + 1,
            __val: array[rowIndex + 1][columnIndex],
          };
          return rowCollection;
        }, {}),
      [],
    );
  }
}

import { sortList } from '../utils/utilityAnalysis/sortList';

describe('sortList', () => {
  test('should correctly sort the list in ascending order', () => {
    const list = [
      { score: 3 },
      { score: 1 },
      { score: 2 },
    ];
    const result = sortList(list, false);
    expect(result).toEqual([
      { score: 1 },
      { score: 2 },
      { score: 3 },
    ]);
  });

  test('should correctly sort the list in descending order', () => {
    const list = [
      { score: 3 },
      { score: 1 },
      { score: 2 },
    ];
    const result = sortList(list, true);
    expect(result).toEqual([
      { score: 3 },
      { score: 2 },
      { score: 1 },
    ]);
  });

  test('should correctly sort the list in descending order when no parameter is set', () => {
    const list = [
      { score: 3 },
      { score: 1 },
      { score: 2 },
    ];
    const result = sortList(list);
    expect(result).toEqual([
      { score: 3 },
      { score: 2 },
      { score: 1 },
    ]);
  });
});

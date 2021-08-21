import { paginate, offSetCalculation } from '../dist';

import { first, second, third } from './static/pagination';

describe('Paging: suite', () => {
  it('should be able to calculate the pagination offset', () => {
    const limit = 10;

    /**
     * - offSet, page 1
     */
    const { offSet } = paginate({ total: 100, page: 1, limit });

    /**
     * - offSet, page 2
     */
    const offSet2 = offSetCalculation(2, limit);

    /**
     * - offSet, page 3
     */
    const offSet3 = offSetCalculation(3, limit);

    expect(offSet).toBe(0);
    expect(offSet2).toBe(10);
    expect(offSet3).toBe(20);
  });

  it('should be pass in the first "test case"', () => {
    const { options, expected } = first;

    const { pagination } = paginate(options);

    expect(pagination).toEqual(expected);
  });

  it('should be pass in the second "test case"', () => {
    const { options, expected } = second;

    const { pagination } = paginate(options);

    expect(pagination).toEqual(expected);
  });

  it('should be pass in the third "test case"', () => {
    const { options, expected } = third;

    const { range, ...exPagination } = expected;

    const { pagination } = paginate(options);

    for (let key = 1; key <= exPagination.pages; key++) {
      expect(key).toBe(range[key - 1]);
    }

    expect(pagination).toEqual(exPagination);
  });
});

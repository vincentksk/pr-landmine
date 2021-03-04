const insertionSort = require('./insertion-sort');

describe('insertion sort', () => {
    it('should sort an array', async () => {
        expect(insertionSort(['c', 'b', 'a'])).toEqual(['a', 'b', 'c']);
    });

});

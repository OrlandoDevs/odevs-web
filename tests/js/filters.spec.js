

const filters = require('../../src/js/filters');


describe('filters', function() {
    it('no address return default', async () => {
        const r = await filters.geoApify('');
        expect(r).toEqual("[0,0]")
    });
})
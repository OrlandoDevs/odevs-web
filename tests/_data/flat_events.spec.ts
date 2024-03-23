
const events = require('../../src/_data/flat_events') as any[];

describe('flat_events', () => {
    it('should return an array of events', () => {
        expect(events).toBeInstanceOf(Array)
    });



})
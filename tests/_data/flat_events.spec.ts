
const events = require('../../src/_data/flat_events') as any[];

import GroupEventInterfaceTI from "../types/GroupEvent-interface-ti";

import {createCheckers} from "ts-interface-checker";

describe('flat_events', () => {

    const { GroupEvent } = createCheckers(GroupEventInterfaceTI);
    it('should return an array of events', () => {
        expect(events)
            .toBeInstanceOf(Array);

        for (let i = 0; i < events.length; i++) {
            console.log(i)
            GroupEvent.check(events[i]);
        }
        
    });



})
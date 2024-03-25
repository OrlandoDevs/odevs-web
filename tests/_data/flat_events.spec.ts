
const events = require('../../src/_data/flat_events') as any[];

import GroupEventInterfaceTI from "../types/GroupEvent-interface-ti";

import {createCheckers} from "ts-interface-checker";

describe('flat_events', () => {

    const { GroupEventFlat } = createCheckers(GroupEventInterfaceTI);
    it('should return an array of events', () => {
        expect(events)
            .toBeInstanceOf(Array);
        
    });

    it('should be of correct type', () => {
        for (let i = 0; i < events.length; i++) {
            const result = GroupEventFlat.strictValidate(events[i]);
            if(result){
                expect({index : i, result}).toBeNull();
            } else {
                expect(result).toBeNull();
            }
        }
    });



})
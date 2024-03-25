import path from "path";
import fs from "fs";
import yaml from "js-yaml";

import {createCheckers} from "ts-interface-checker";
import GroupEventInterfaceTI from "../types/GroupEvent-interface-ti";


describe('events.yml', () => {
    it('verify object', () => {
        const { EventYaml } = createCheckers(GroupEventInterfaceTI);

        const filePath = path.join(__dirname, '../../src/_data/events.yaml');
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const data = yaml.load(fileContents);

        const result = EventYaml.strictValidate(data);

        expect(result).toBeNull();
    });
})
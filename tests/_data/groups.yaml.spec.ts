import path from "path";
import fs from "fs";
import yaml from "js-yaml";

import {createCheckers} from "ts-interface-checker";
import GroupsYamlInterfaceTI from "../types/Groups.yaml-interface-ti";


describe('groups.yaml', () => {
    it('verify object', async () => {
        const { GroupsYaml } = createCheckers(GroupsYamlInterfaceTI);

        const filePath = path.join(__dirname, '../../src/_data/groups.yaml');
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const data = yaml.load(fileContents);

        const result = GroupsYaml.strictValidate(data);

        expect(result).toBeNull();
    });
})
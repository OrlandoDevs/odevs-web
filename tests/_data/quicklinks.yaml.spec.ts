import path from "path";
import fs from "fs";
import yaml from "js-yaml";

import {createCheckers} from "ts-interface-checker";
import QuicklinksYamlInterfaceTI from "../types/Quicklinks.yaml-interface-ti";


describe('quicklinks.yaml', () => {
    it('verify object', async () => {
        const { QuicklinksYaml } = createCheckers(QuicklinksYamlInterfaceTI);

        const filePath = path.join(__dirname, '../../src/_data/quicklinks.yaml');
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const data = yaml.load(fileContents);

        const result = QuicklinksYaml.strictValidate(data);

        expect(result).toBeNull();
    });
})
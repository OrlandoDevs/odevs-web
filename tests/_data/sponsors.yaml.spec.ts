import path from "path";
import fs from "fs";
import yaml from "js-yaml";

import {createCheckers} from "ts-interface-checker";
import SponsorsYamlInterfaceTI from "../types/Sponsors.yaml-interface-ti";


describe('sponsors.yaml', () => {
    it('verify object', async () => {
        const { SponsorsYaml } = createCheckers(SponsorsYamlInterfaceTI);

        const filePath = path.join(__dirname, '../../src/_data/sponsors.yaml');
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const data = yaml.load(fileContents);

        const result = SponsorsYaml.strictValidate(data);

        expect(result).toBeNull();
    });
})
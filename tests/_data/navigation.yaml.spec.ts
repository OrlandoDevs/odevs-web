import path from "path";
import fs from "fs";
import yaml from "js-yaml";

import {createCheckers} from "ts-interface-checker";
import NavigationYamlInterfaceTI from "../types/Navigation.yaml-interface-ti";


describe('navigation.yaml', () => {
    it('verify object', async () => {
        const { NavigationYaml } = createCheckers(NavigationYamlInterfaceTI);

        const filePath = path.join(__dirname, '../../src/_data/navigation.yaml');
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const data = yaml.load(fileContents);

        const result = NavigationYaml.strictValidate(data);

        expect(result).toBeNull();
    });
})
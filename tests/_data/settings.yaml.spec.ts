import path from "path";
import fs from "fs";
import yaml from "js-yaml";

import {createCheckers} from "ts-interface-checker";
import SettingsYamlInterfaceTI from "../types/Settings.yaml-interface-ti";


describe('settings.yaml', () => {
    it('verify object', async () => {
        const { SettingsYaml } = createCheckers(SettingsYamlInterfaceTI);

        const filePath = path.join(__dirname, '../../src/_data/settings.yaml');
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const data = yaml.load(fileContents);

        const result = SettingsYaml.strictValidate(data);

        expect(result).toBeNull();
    });
})
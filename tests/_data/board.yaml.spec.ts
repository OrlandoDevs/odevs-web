import path from "path";
import fs from "fs";
import yaml from "js-yaml";

import {createCheckers} from "ts-interface-checker";
import BoardYamlInterfaceTI from "../types/Board.yaml-interface-ti";


describe('board.yaml', () => {
    it('verify object', async () => {
        const { BoardYaml } = createCheckers(BoardYamlInterfaceTI);

        const filePath = path.join(__dirname, '../../src/_data/board.yaml');
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const data = yaml.load(fileContents);

        const result = BoardYaml.strictValidate(data);

        expect(result).toBeNull();
    });
})
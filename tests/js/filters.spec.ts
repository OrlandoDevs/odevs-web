
jest.mock('node-fetch');
import fetch, {Response} from 'node-fetch';
import { GeocodeResponse } from '../types/Geoapify-interface';
import { Mock } from 'jest-mock';

const filters = require('../../src/js/filters');

describe('filters', function() {
    it('no address return default', async () => {
        const r = await filters.geoApify('');
        expect(r).toEqual("[0,0]")
    });

    it('test mock address', async () => {
        const mockResponse:GeocodeResponse = {
            "type": "FeatureCollection",
            "features": [
              {
                "type": "Feature",
                "properties": {
                  "datasource": {
                    "sourcename": "openstreetmap",
                    "attribution": "© OpenStreetMap contributors",
                    "license": "Open Database License",
                    "url": "https://www.openstreetmap.org/copyright"
                  },
                  "country": "United Kingdom",
                  "country_code": "gb",
                  "state": "England",
                  "county": "Greater London",
                  "city": "London",
                  "postcode": "W1H 1LJ",
                  "suburb": "Marylebone",
                  "street": "Upper Montagu Street",
                  "housenumber": "38",
                  "lon": -0.16030636023550826,
                  "lat": 51.52016005,
                  "state_code": "ENG",
                  "result_type": "building",
                  "formatted": "38 Upper Montagu Street, London, W1H 1LJ, United Kingdom",
                  "address_line1": "38 Upper Montagu Street",
                  "address_line2": "London, W1H 1LJ, United Kingdom",
                  "category": "building.residential",
                  "timezone": {
                    "name": "Europe/London",
                    "offset_STD": "+00:00",
                    "offset_STD_seconds": 0,
                    "offset_DST": "+01:00",
                    "offset_DST_seconds": 3600,
                    "abbreviation_STD": "GMT",
                    "abbreviation_DST": "BST"
                  },
                  "plus_code": "9C3XGRCQ+3V",
                  "plus_code_short": "GRCQ+3V London, Greater London, United Kingdom",
                  "rank": {
                    "importance": 0.41000999999999993,
                    "popularity": 8.988490181891963,
                    "confidence": 0.95,
                    "confidence_city_level": 1,
                    "confidence_street_level": 1,
                    "match_type": "full_match"
                  },
                  "place_id": "51dcb14637eb84c4bf59c6b7c19a94c24940f00102f901370cef1100000000c00203"
                },
                "geometry": {
                  "type": "Point",
                  "coordinates": [
                    -0.16030636023550826,
                    51.52016005
                  ]
                },
                "bbox": [
                  -0.160394,
                  51.5201061,
                  -0.1602251,
                  51.5202273
                ]
              }
            ],
            "query": {
              "text": "38 Upper Montagu Street, Westminster W1H 1LJ, United Kingdom",
              "parsed": {
                "housenumber": "38",
                "street": "upper montagu street",
                "postcode": "w1h 1lj",
                "district": "westminster",
                "country": "united kingdom",
                "expected_type": "building"
              }
            }
          };
       (fetch as unknown as Mock).mockReturnValue(Promise.resolve({ json: () => Promise.resolve(mockResponse), 
            }));
       const r = await filters.geoApify('123 Main Street');
       await jest.runAllTimersAsync();
       expect(r).toEqual('{"lat":51.52016005,"lon":-0.16030636023550826}') 
    });
})
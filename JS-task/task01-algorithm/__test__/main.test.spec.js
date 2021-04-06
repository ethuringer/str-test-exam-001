const { cityList, cityFilter } = require('../main');

describe('JS algoritmus teszt cinema listára', () => {

    test('Túl kicsi populációra történő szűrés.', () => {
        const results = cityFilter(cityList, 3, 30);
        expect(results.length).toBe(0);
    });
    
    test('Túl nagy területre történő szűrés.', () => {
        const results = cityFilter(cityList, 30, 85);
        expect(results.length).toBe(0);
    });

    test('Létező populációra szűrés.', () => {
        const results = cityFilter(cityList, 30, 1);
        expect(results.length).toBe(7);
    });

    test('Létező populációra és területre szűrés.', () => {
        const results = cityFilter(cityList, 15, 50);
        expect(results.length).toBe(2);
    });

    test('Csak a nevekkel, mint string lista tér vissza a szűrés', () => {
        const results = cityFilter(cityList, 15, 50);
        expect(results[0]).toBe('Guaiúba');
        expect(results[1]).toBe('São Pedro');
    });
});

const cal = require('./calculator');

describe('Calculator test',
()=>{
    test('Addition of 5 & 4 should be 9',()=>{
        expect(cal.sum(5,4)).toBe(9);
    });
    test("subtracting 2 from 10 should return 8", () => {
        var result = cal.diff(10,2)
        expect(result).toBe(8);
      });
    test("multiplying 2 and 8 should return 16", () => {
        var result = cal.product(2,8)
        expect(result).toBe(16);
    });
})

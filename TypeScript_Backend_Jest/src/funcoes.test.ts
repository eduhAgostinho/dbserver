import { somar, binaryStringToNumber, somarAsync} from './funcoes';

describe('somar', () => {
    test('1+2 é igual a 3', () => {
        expect(somar(1,2)).toBe(3);
    });

    test.each([[0,1,1],[1,2,3],[-1,1,0],[1,-1,0]])('%i + %i é igual a %i', (x:number, y:number, z:number) => {
        expect(somar(x,y)).toBe(z);
    });
});

describe('binaryStringToNumber', () => {
    test.each([['0',0],['00',0],['1',1],['01',1]])('%s binário é %i inteiro', (bin, int) => {
        expect(binaryStringToNumber(bin as string)).toBe(int);
    });

    test('abc gera exceção', () => {
        expect(() => {
            binaryStringToNumber('abc')
        }).toThrow(Error);
    });
});

test('async 1+2 é igual a 3', async () => {
    const res = await somarAsync(1,2);
    expect(res).toBe(3);
});
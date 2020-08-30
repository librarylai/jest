beforeAll(() => console.log('全域 - beforeAll：我一定是第一個執行'));
afterAll(() => console.log('全域 - afterAll：我一定最後一個執行'));
beforeEach(() => console.log('全域 - beforeEach ： 我每次都會執行，且會比區域的 beforeEach 快'));
afterEach(() => console.log('全域 - afterEach ： 我每次都會執行，且會比區域的 afterEach 慢'));
test('', () => console.log('全域 - test'));
describe('Scoped / Nested block', () => {
    beforeAll(() => console.log('區域 - beforeAll'));
    afterAll(() => console.log('區域 - afterAll'));
    beforeEach(() => console.log('區域 - beforeEach'));
    afterEach(() => console.log('區域 - afterEach'));
    test('', () => console.log('區域 - test'));
});
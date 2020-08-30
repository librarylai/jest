import {
    sum
} from "../src/utils";

test("add 3,7 expect 10", () => {
    expect(sum(3, 7)).toBe(10);
});
import { sum } from "./../../api/sum";

describe("test sum function ",() => {
    test("soma",()=>{
        const res = sum(1,2);

        expect(res).toEqual(3);
    })
})
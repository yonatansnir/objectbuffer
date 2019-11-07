import { ExternalArgs } from "../internal/interfaces";
import * as util from "util";
import { createObjectBuffer } from "..";
import { memoryStats } from "../internal/api";

/* eslint-env jest */

describe("memoryRollbackOnOOM.test", () => {
  const externalArgs: ExternalArgs = {
    textEncoder: new util.TextEncoder(),
    textDecoder: new util.TextDecoder(),
    arrayAdditionalAllocation: 0,
    minimumStringAllocation: 0
  };

  test("memoryRollbackOnOOM", () => {
    const objectBuffer = createObjectBuffer<any>(externalArgs, 256, {
      foo: null
    });

    const initialFreeSpace = memoryStats(objectBuffer).available;

    expect(initialFreeSpace).toMatchInlineSnapshot(`168`);

    expect(() => {
      objectBuffer.foo = {
        big: "object",
        more: "than size",
        arr: [1, 2, 3]
      };
    }).toThrowErrorMatchingInlineSnapshot(`"OutOfMemoryError"`);

    expect(memoryStats(objectBuffer).available).toMatchInlineSnapshot(`168`);

    expect(objectBuffer).toMatchInlineSnapshot(`
      Object {
        "foo": null,
      }
    `);
  });
});
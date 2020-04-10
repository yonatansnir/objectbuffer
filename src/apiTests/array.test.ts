/* eslint-env jest */

import { createObjectBuffer } from "../";
import { memoryStats } from "../internal/api";
import { externalArgsApiToExternalArgsApi } from "../internal/utils";

// actually not very good, as the browser's TextEncoder won't work with SAB, but node will.
describe("SharedArrayBuffer tests", () => {
  const externalArgs = externalArgsApiToExternalArgsApi({
    arrayAdditionalAllocation: 0,
  });

  test("basic", () => {
    const objectBuffer = createObjectBuffer<any>(
      externalArgs,
      1024,
      { arr: [1, 2, 3, 4] },
      { useSharedArrayBuffer: false }
    );

    objectBuffer.arr.unshift("a");

    expect(objectBuffer).toMatchInlineSnapshot(`
      Object {
        "arr": Array [
          "a",
          1,
          2,
          3,
          4,
        ],
      }
    `);

    expect(memoryStats(objectBuffer).available).toMatchInlineSnapshot(`592`);
  });
});

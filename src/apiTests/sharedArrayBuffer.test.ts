/* eslint-env jest */

import * as util from "util";

import {
  createObjectBuffer,
  getUnderlyingArrayBuffer,
  ExternalArgs
} from "../";
import { getFirstFreeByte } from "../internal/testUtils";

// actually not very good, as the browser's TextEncoder won't work with SAB, but node will.
describe("SharedArrayBuffer tests", () => {
  const externalArgs: ExternalArgs = {
    textEncoder: new util.TextEncoder(),
    textDecoder: new util.TextDecoder(),
    arrayAdditionalAllocation: 0,
    minimumStringAllocation: 0
  };

  test("basic", () => {
    const objectBuffer = createObjectBuffer<any>(
      externalArgs,
      1024,
      { arr: [{ a: 1 }] },
      { useSharedArrayBuffer: true }
    );

    objectBuffer.arr = [{ bar: 666 }];

    expect(objectBuffer).toMatchInlineSnapshot(`
      Object {
        "arr": Array [
          Object {
            "bar": 666,
          },
        ],
      }
    `);

    expect(
      getFirstFreeByte(getUnderlyingArrayBuffer(objectBuffer))
    ).toMatchInlineSnapshot(`131`);
  });
});

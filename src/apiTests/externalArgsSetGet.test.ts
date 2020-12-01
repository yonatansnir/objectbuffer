/* eslint-env jest */

import { updateObjectBufferSettings, createObjectBuffer } from "..";
import { readExternalArgs } from "../internal/api";

test("readExternalArgs", () => {
  const ob = createObjectBuffer(512, {
    hashMapLoadFactor: 2,
    arrayAdditionalAllocation: 5,
  });

  expect(readExternalArgs(ob)).toEqual({
    hashMapLoadFactor: 2,
    arrayAdditionalAllocation: 5,
    hashMapMinInitialCapacity: 8,
  });
});

test("updateObjectBufferSettings", () => {
  const ob = createObjectBuffer(512, {
    hashMapLoadFactor: 2,
    arrayAdditionalAllocation: 7,
  });

  updateObjectBufferSettings(ob, {
    hashMapLoadFactor: 10,
    arrayAdditionalAllocation: 5,
    hashMapMinInitialCapacity: 20,
  });

  expect(readExternalArgs(ob)).toEqual({
    hashMapLoadFactor: 10,
    arrayAdditionalAllocation: 5,
    hashMapMinInitialCapacity: 20,
  });
});

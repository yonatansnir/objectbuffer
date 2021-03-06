/** Generate code. don't try to edit manually **/
/* istanbul ignore file */
import type { Heap } from "../structsGenerator/consts";

/** --- struct number start --- **/

export function number_type_get(heap: Heap, structPointer: number) {
  return heap.f64[(structPointer + 0) / 8];
}

export function number_type_set(
  heap: Heap,
  structPointer: number,
  value: number
) {
  return (heap.f64[(structPointer + 0) / 8] = value);
}

export const number_type_place = 0;
export const number_type_ctor = Float64Array;

export function number_value_get(heap: Heap, structPointer: number) {
  return heap.f64[(structPointer + 8) / 8];
}

export function number_value_set(
  heap: Heap,
  structPointer: number,
  value: number
) {
  return (heap.f64[(structPointer + 8) / 8] = value);
}

export const number_value_place = 8;
export const number_value_ctor = Float64Array;

export function number_set_all(
  heap: Heap,
  structPointer: number,
  type: number,
  value: number
) {
  heap.f64[(structPointer + 0) / 8] = type;
  heap.f64[(structPointer + 8) / 8] = value;
}

export const number_size = 16;

/** --- struct number end --- **/

/** --- struct bigint start --- **/

export function bigint_type_get(heap: Heap, structPointer: number) {
  return heap.f64[(structPointer + 0) / 8];
}

export function bigint_type_set(
  heap: Heap,
  structPointer: number,
  value: number
) {
  return (heap.f64[(structPointer + 0) / 8] = value);
}

export const bigint_type_place = 0;
export const bigint_type_ctor = Float64Array;

export function bigint_value_get(heap: Heap, structPointer: number) {
  return heap.u64[(structPointer + 8) / 8];
}

export function bigint_value_set(
  heap: Heap,
  structPointer: number,
  value: bigint
) {
  return (heap.u64[(structPointer + 8) / 8] = value);
}

export const bigint_value_place = 8;
export const bigint_value_ctor = BigUint64Array;

export function bigint_set_all(
  heap: Heap,
  structPointer: number,
  type: number,
  value: bigint
) {
  heap.f64[(structPointer + 0) / 8] = type;
  heap.u64[(structPointer + 8) / 8] = value;
}

export const bigint_size = 16;

/** --- struct bigint end --- **/

/** --- struct date start --- **/

export function date_type_get(heap: Heap, structPointer: number) {
  return heap.f64[(structPointer + 0) / 8];
}

export function date_type_set(
  heap: Heap,
  structPointer: number,
  value: number
) {
  return (heap.f64[(structPointer + 0) / 8] = value);
}

export const date_type_place = 0;
export const date_type_ctor = Float64Array;

export function date_refsCount_get(heap: Heap, structPointer: number) {
  return heap.u32[(structPointer + 8) / 4];
}

export function date_refsCount_set(
  heap: Heap,
  structPointer: number,
  value: number
) {
  return (heap.u32[(structPointer + 8) / 4] = value);
}

export const date_refsCount_place = 8;
export const date_refsCount_ctor = Uint32Array;

export function date___padding___get(heap: Heap, structPointer: number) {
  return heap.u32[(structPointer + 12) / 4];
}

export function date___padding___set(
  heap: Heap,
  structPointer: number,
  value: number
) {
  return (heap.u32[(structPointer + 12) / 4] = value);
}

export const date___padding___place = 12;
export const date___padding___ctor = Uint32Array;

export function date_timestamp_get(heap: Heap, structPointer: number) {
  return heap.f64[(structPointer + 16) / 8];
}

export function date_timestamp_set(
  heap: Heap,
  structPointer: number,
  value: number
) {
  return (heap.f64[(structPointer + 16) / 8] = value);
}

export const date_timestamp_place = 16;
export const date_timestamp_ctor = Float64Array;

export function date_set_all(
  heap: Heap,
  structPointer: number,
  type: number,
  refsCount: number,
  __padding__: number,
  timestamp: number
) {
  heap.f64[(structPointer + 0) / 8] = type;
  heap.u32[(structPointer + 8) / 4] = refsCount;
  heap.u32[(structPointer + 12) / 4] = __padding__;
  heap.f64[(structPointer + 16) / 8] = timestamp;
}

export const date_size = 24;

/** --- struct date end --- **/

/** --- struct array start --- **/

export function array_type_get(heap: Heap, structPointer: number) {
  return heap.f64[(structPointer + 0) / 8];
}

export function array_type_set(
  heap: Heap,
  structPointer: number,
  value: number
) {
  return (heap.f64[(structPointer + 0) / 8] = value);
}

export const array_type_place = 0;
export const array_type_ctor = Float64Array;

export function array_refsCount_get(heap: Heap, structPointer: number) {
  return heap.u32[(structPointer + 8) / 4];
}

export function array_refsCount_set(
  heap: Heap,
  structPointer: number,
  value: number
) {
  return (heap.u32[(structPointer + 8) / 4] = value);
}

export const array_refsCount_place = 8;
export const array_refsCount_ctor = Uint32Array;

export function array_dataspacePointer_get(heap: Heap, structPointer: number) {
  return heap.u32[(structPointer + 12) / 4];
}

export function array_dataspacePointer_set(
  heap: Heap,
  structPointer: number,
  value: number
) {
  return (heap.u32[(structPointer + 12) / 4] = value);
}

export const array_dataspacePointer_place = 12;
export const array_dataspacePointer_ctor = Uint32Array;

export function array_length_get(heap: Heap, structPointer: number) {
  return heap.u32[(structPointer + 16) / 4];
}

export function array_length_set(
  heap: Heap,
  structPointer: number,
  value: number
) {
  return (heap.u32[(structPointer + 16) / 4] = value);
}

export const array_length_place = 16;
export const array_length_ctor = Uint32Array;

export function array_allocatedLength_get(heap: Heap, structPointer: number) {
  return heap.u32[(structPointer + 20) / 4];
}

export function array_allocatedLength_set(
  heap: Heap,
  structPointer: number,
  value: number
) {
  return (heap.u32[(structPointer + 20) / 4] = value);
}

export const array_allocatedLength_place = 20;
export const array_allocatedLength_ctor = Uint32Array;

export function array_set_all(
  heap: Heap,
  structPointer: number,
  type: number,
  refsCount: number,
  dataspacePointer: number,
  length: number,
  allocatedLength: number
) {
  heap.f64[(structPointer + 0) / 8] = type;
  heap.u32[(structPointer + 8) / 4] = refsCount;
  heap.u32[(structPointer + 12) / 4] = dataspacePointer;
  heap.u32[(structPointer + 16) / 4] = length;
  heap.u32[(structPointer + 20) / 4] = allocatedLength;
}

export const array_size = 24;

/** --- struct array end --- **/

/** --- struct object start --- **/

export function object_type_get(heap: Heap, structPointer: number) {
  return heap.f64[(structPointer + 0) / 8];
}

export function object_type_set(
  heap: Heap,
  structPointer: number,
  value: number
) {
  return (heap.f64[(structPointer + 0) / 8] = value);
}

export const object_type_place = 0;
export const object_type_ctor = Float64Array;

export function object_refsCount_get(heap: Heap, structPointer: number) {
  return heap.u32[(structPointer + 8) / 4];
}

export function object_refsCount_set(
  heap: Heap,
  structPointer: number,
  value: number
) {
  return (heap.u32[(structPointer + 8) / 4] = value);
}

export const object_refsCount_place = 8;
export const object_refsCount_ctor = Uint32Array;

export function object_pointerToHashMap_get(heap: Heap, structPointer: number) {
  return heap.u32[(structPointer + 12) / 4];
}

export function object_pointerToHashMap_set(
  heap: Heap,
  structPointer: number,
  value: number
) {
  return (heap.u32[(structPointer + 12) / 4] = value);
}

export const object_pointerToHashMap_place = 12;
export const object_pointerToHashMap_ctor = Uint32Array;

export function object_set_all(
  heap: Heap,
  structPointer: number,
  type: number,
  refsCount: number,
  pointerToHashMap: number
) {
  heap.f64[(structPointer + 0) / 8] = type;
  heap.u32[(structPointer + 8) / 4] = refsCount;
  heap.u32[(structPointer + 12) / 4] = pointerToHashMap;
}

export const object_size = 16;

/** --- struct object end --- **/

/** --- struct string start --- **/

export function string_type_get(heap: Heap, structPointer: number) {
  return heap.f64[(structPointer + 0) / 8];
}

export function string_type_set(
  heap: Heap,
  structPointer: number,
  value: number
) {
  return (heap.f64[(structPointer + 0) / 8] = value);
}

export const string_type_place = 0;
export const string_type_ctor = Float64Array;

export function string_refsCount_get(heap: Heap, structPointer: number) {
  return heap.u32[(structPointer + 8) / 4];
}

export function string_refsCount_set(
  heap: Heap,
  structPointer: number,
  value: number
) {
  return (heap.u32[(structPointer + 8) / 4] = value);
}

export const string_refsCount_place = 8;
export const string_refsCount_ctor = Uint32Array;

export function string_bytesLength_get(heap: Heap, structPointer: number) {
  return heap.u32[(structPointer + 12) / 4];
}

export function string_bytesLength_set(
  heap: Heap,
  structPointer: number,
  value: number
) {
  return (heap.u32[(structPointer + 12) / 4] = value);
}

export const string_bytesLength_place = 12;
export const string_bytesLength_ctor = Uint32Array;

export function string_charsPointer_get(heap: Heap, structPointer: number) {
  return heap.u32[(structPointer + 16) / 4];
}

export function string_charsPointer_set(
  heap: Heap,
  structPointer: number,
  value: number
) {
  return (heap.u32[(structPointer + 16) / 4] = value);
}

export const string_charsPointer_place = 16;
export const string_charsPointer_ctor = Uint32Array;

export function string_set_all(
  heap: Heap,
  structPointer: number,
  type: number,
  refsCount: number,
  bytesLength: number,
  charsPointer: number
) {
  heap.f64[(structPointer + 0) / 8] = type;
  heap.u32[(structPointer + 8) / 4] = refsCount;
  heap.u32[(structPointer + 12) / 4] = bytesLength;
  heap.u32[(structPointer + 16) / 4] = charsPointer;
}

export const string_size = 20;

/** --- struct string end --- **/

/** --- struct typeOnly start --- **/

export function typeOnly_type_get(heap: Heap, structPointer: number) {
  return heap.f64[(structPointer + 0) / 8];
}

export function typeOnly_type_set(
  heap: Heap,
  structPointer: number,
  value: number
) {
  return (heap.f64[(structPointer + 0) / 8] = value);
}

export const typeOnly_type_place = 0;
export const typeOnly_type_ctor = Float64Array;

export function typeOnly_set_all(
  heap: Heap,
  structPointer: number,
  type: number
) {
  heap.f64[(structPointer + 0) / 8] = type;
}

export const typeOnly_size = 8;

/** --- struct typeOnly end --- **/

/** --- struct typeAndRc start --- **/

export function typeAndRc_type_get(heap: Heap, structPointer: number) {
  return heap.f64[(structPointer + 0) / 8];
}

export function typeAndRc_type_set(
  heap: Heap,
  structPointer: number,
  value: number
) {
  return (heap.f64[(structPointer + 0) / 8] = value);
}

export const typeAndRc_type_place = 0;
export const typeAndRc_type_ctor = Float64Array;

export function typeAndRc_refsCount_get(heap: Heap, structPointer: number) {
  return heap.u32[(structPointer + 8) / 4];
}

export function typeAndRc_refsCount_set(
  heap: Heap,
  structPointer: number,
  value: number
) {
  return (heap.u32[(structPointer + 8) / 4] = value);
}

export const typeAndRc_refsCount_place = 8;
export const typeAndRc_refsCount_ctor = Uint32Array;

export function typeAndRc_set_all(
  heap: Heap,
  structPointer: number,
  type: number,
  refsCount: number
) {
  heap.f64[(structPointer + 0) / 8] = type;
  heap.u32[(structPointer + 8) / 4] = refsCount;
}

export const typeAndRc_size = 12;

/** --- struct typeAndRc end --- **/

/** --- struct linkedList start --- **/

export function linkedList_END_POINTER_get(heap: Heap, structPointer: number) {
  return heap.u32[(structPointer + 0) / 4];
}

export function linkedList_END_POINTER_set(
  heap: Heap,
  structPointer: number,
  value: number
) {
  return (heap.u32[(structPointer + 0) / 4] = value);
}

export const linkedList_END_POINTER_place = 0;
export const linkedList_END_POINTER_ctor = Uint32Array;

export function linkedList_START_POINTER_get(
  heap: Heap,
  structPointer: number
) {
  return heap.u32[(structPointer + 4) / 4];
}

export function linkedList_START_POINTER_set(
  heap: Heap,
  structPointer: number,
  value: number
) {
  return (heap.u32[(structPointer + 4) / 4] = value);
}

export const linkedList_START_POINTER_place = 4;
export const linkedList_START_POINTER_ctor = Uint32Array;

export function linkedList_set_all(
  heap: Heap,
  structPointer: number,
  END_POINTER: number,
  START_POINTER: number
) {
  heap.u32[(structPointer + 0) / 4] = END_POINTER;
  heap.u32[(structPointer + 4) / 4] = START_POINTER;
}

export const linkedList_size = 8;

/** --- struct linkedList end --- **/

/** --- struct linkedListItem start --- **/

export function linkedListItem_NEXT_POINTER_get(
  heap: Heap,
  structPointer: number
) {
  return heap.u32[(structPointer + 0) / 4];
}

export function linkedListItem_NEXT_POINTER_set(
  heap: Heap,
  structPointer: number,
  value: number
) {
  return (heap.u32[(structPointer + 0) / 4] = value);
}

export const linkedListItem_NEXT_POINTER_place = 0;
export const linkedListItem_NEXT_POINTER_ctor = Uint32Array;

export function linkedListItem_VALUE_get(heap: Heap, structPointer: number) {
  return heap.u32[(structPointer + 4) / 4];
}

export function linkedListItem_VALUE_set(
  heap: Heap,
  structPointer: number,
  value: number
) {
  return (heap.u32[(structPointer + 4) / 4] = value);
}

export const linkedListItem_VALUE_place = 4;
export const linkedListItem_VALUE_ctor = Uint32Array;

export function linkedListItem_set_all(
  heap: Heap,
  structPointer: number,
  NEXT_POINTER: number,
  VALUE: number
) {
  heap.u32[(structPointer + 0) / 4] = NEXT_POINTER;
  heap.u32[(structPointer + 4) / 4] = VALUE;
}

export const linkedListItem_size = 8;

/** --- struct linkedListItem end --- **/

/** --- struct hashmap start --- **/

export function hashmap_ARRAY_POINTER_get(heap: Heap, structPointer: number) {
  return heap.u32[(structPointer + 0) / 4];
}

export function hashmap_ARRAY_POINTER_set(
  heap: Heap,
  structPointer: number,
  value: number
) {
  return (heap.u32[(structPointer + 0) / 4] = value);
}

export const hashmap_ARRAY_POINTER_place = 0;
export const hashmap_ARRAY_POINTER_ctor = Uint32Array;

export function hashmap_LINKED_LIST_POINTER_get(
  heap: Heap,
  structPointer: number
) {
  return heap.u32[(structPointer + 4) / 4];
}

export function hashmap_LINKED_LIST_POINTER_set(
  heap: Heap,
  structPointer: number,
  value: number
) {
  return (heap.u32[(structPointer + 4) / 4] = value);
}

export const hashmap_LINKED_LIST_POINTER_place = 4;
export const hashmap_LINKED_LIST_POINTER_ctor = Uint32Array;

export function hashmap_LINKED_LIST_SIZE_get(
  heap: Heap,
  structPointer: number
) {
  return heap.u32[(structPointer + 8) / 4];
}

export function hashmap_LINKED_LIST_SIZE_set(
  heap: Heap,
  structPointer: number,
  value: number
) {
  return (heap.u32[(structPointer + 8) / 4] = value);
}

export const hashmap_LINKED_LIST_SIZE_place = 8;
export const hashmap_LINKED_LIST_SIZE_ctor = Uint32Array;

export function hashmap_CAPACITY_get(heap: Heap, structPointer: number) {
  return heap.u8[(structPointer + 12) / 1];
}

export function hashmap_CAPACITY_set(
  heap: Heap,
  structPointer: number,
  value: number
) {
  return (heap.u8[(structPointer + 12) / 1] = value);
}

export const hashmap_CAPACITY_place = 12;
export const hashmap_CAPACITY_ctor = Uint8Array;

export function hashmap_USED_CAPACITY_get(heap: Heap, structPointer: number) {
  return heap.u8[(structPointer + 13) / 1];
}

export function hashmap_USED_CAPACITY_set(
  heap: Heap,
  structPointer: number,
  value: number
) {
  return (heap.u8[(structPointer + 13) / 1] = value);
}

export const hashmap_USED_CAPACITY_place = 13;
export const hashmap_USED_CAPACITY_ctor = Uint8Array;

export function hashmap_set_all(
  heap: Heap,
  structPointer: number,
  ARRAY_POINTER: number,
  LINKED_LIST_POINTER: number,
  LINKED_LIST_SIZE: number,
  CAPACITY: number,
  USED_CAPACITY: number
) {
  heap.u32[(structPointer + 0) / 4] = ARRAY_POINTER;
  heap.u32[(structPointer + 4) / 4] = LINKED_LIST_POINTER;
  heap.u32[(structPointer + 8) / 4] = LINKED_LIST_SIZE;
  heap.u8[(structPointer + 12) / 1] = CAPACITY;
  heap.u8[(structPointer + 13) / 1] = USED_CAPACITY;
}

export const hashmap_size = 14;

/** --- struct hashmap end --- **/

/** --- struct hashmapNode start --- **/

export function hashmapNode_VALUE_POINTER_get(
  heap: Heap,
  structPointer: number
) {
  return heap.u32[(structPointer + 0) / 4];
}

export function hashmapNode_VALUE_POINTER_set(
  heap: Heap,
  structPointer: number,
  value: number
) {
  return (heap.u32[(structPointer + 0) / 4] = value);
}

export const hashmapNode_VALUE_POINTER_place = 0;
export const hashmapNode_VALUE_POINTER_ctor = Uint32Array;

export function hashmapNode_NEXT_NODE_POINTER_get(
  heap: Heap,
  structPointer: number
) {
  return heap.u32[(structPointer + 4) / 4];
}

export function hashmapNode_NEXT_NODE_POINTER_set(
  heap: Heap,
  structPointer: number,
  value: number
) {
  return (heap.u32[(structPointer + 4) / 4] = value);
}

export const hashmapNode_NEXT_NODE_POINTER_place = 4;
export const hashmapNode_NEXT_NODE_POINTER_ctor = Uint32Array;

export function hashmapNode_KEY_POINTER_get(heap: Heap, structPointer: number) {
  return heap.u32[(structPointer + 8) / 4];
}

export function hashmapNode_KEY_POINTER_set(
  heap: Heap,
  structPointer: number,
  value: number
) {
  return (heap.u32[(structPointer + 8) / 4] = value);
}

export const hashmapNode_KEY_POINTER_place = 8;
export const hashmapNode_KEY_POINTER_ctor = Uint32Array;

export function hashmapNode_LINKED_LIST_ITEM_POINTER_get(
  heap: Heap,
  structPointer: number
) {
  return heap.u32[(structPointer + 12) / 4];
}

export function hashmapNode_LINKED_LIST_ITEM_POINTER_set(
  heap: Heap,
  structPointer: number,
  value: number
) {
  return (heap.u32[(structPointer + 12) / 4] = value);
}

export const hashmapNode_LINKED_LIST_ITEM_POINTER_place = 12;
export const hashmapNode_LINKED_LIST_ITEM_POINTER_ctor = Uint32Array;

export function hashmapNode_set_all(
  heap: Heap,
  structPointer: number,
  VALUE_POINTER: number,
  NEXT_NODE_POINTER: number,
  KEY_POINTER: number,
  LINKED_LIST_ITEM_POINTER: number
) {
  heap.u32[(structPointer + 0) / 4] = VALUE_POINTER;
  heap.u32[(structPointer + 4) / 4] = NEXT_NODE_POINTER;
  heap.u32[(structPointer + 8) / 4] = KEY_POINTER;
  heap.u32[(structPointer + 12) / 4] = LINKED_LIST_ITEM_POINTER;
}

export const hashmapNode_size = 16;

/** --- struct hashmapNode end --- **/

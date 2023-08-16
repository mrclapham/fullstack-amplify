import { exampleData, exampleDataArray } from "./simpleFilter.types";

export const simpleFilter = (input: exampleDataArray, key: string, value: any)  => {
  return input.filter((item): item is exampleData => item[key] === value);
}
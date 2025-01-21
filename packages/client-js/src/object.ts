// WIP
//
// export type Ref<T> = {
//   // Index of the source
//   src: number;
//   // Index of the destination
//   dst: number;
//   __marker?: T & never; // essentially PhantomData from Rust
// };
//
// export type MaybeRef<T> = {
//   [P in keyof T]: T[P] | Ref<T[P]>;
// };
//
// export type BaseData<T> = {
//   root: number;
//   data: MaybeRef<{ [key: string]: unknown }>[];
//   // Map of references for each object
//   // Index with refs[data_index].get(ref_key)
//   refs: Map<string, Ref<T[keyof T]>>[];
//   readonly __marker?: T & never; // essentially PhantomData from Rust
// };
//
// // Converts a regular object into a BaseData object
// export function intoBaseData<T extends { [key: string]: unknown }>(
//   data: T,
// ): BaseData<T> {
//   return {
//     root: 0,
//     data: [data],
//     refs: [new Map<string, Ref<T[keyof T]>>()],
//   };
// }
//
// function processObject(
//   currentIndex: number,
//   data: object[],
//   refs: Map<string, Ref<unknown>>[],
//   seen: Map<object, number> = new Map(),
// ) {
//   if (!seen.has(data[currentIndex])) {
//     seen.set(data[currentIndex], currentIndex);
//   }
//   for (const [key, value] of Object.entries(data[currentIndex])) {
//     if (value !== null && typeof value === "object") {
//       if (Array.isArray(value)) {
//         console.error("Arrays are not supported");
//         // for (let i = 0; i < value.length; i++) {
//         //   if (value[i] !== null && typeof value[i] === "object") {
//         //     const existing = data.findIndex((d) => d === value[i]);
//         //     const newIndex = existing === -1 ? data.length : existing;
//         //     const ref = {
//         //       src: currentIndex,
//         //       dst: newIndex,
//         //     };
//         //     refs[currentIndex].set(key, ref);
//         //     (data[currentIndex] as { [key: string]: unknown | Ref<unknown> })[
//         //       key
//         //     ] = ref;
//         //     data.push(value[i]);
//         //     refs.push(new Map<string, Ref<unknown>>());
//         //     processObject(newIndex, data, refs);
//         //   }
//         // }
//       } else {
//         const newIndex = data.length;
//
//         const ref = {
//           src: currentIndex,
//           dst: newIndex,
//         };
//
//         refs[currentIndex].set(key, ref);
//         (data[currentIndex] as { [key: string]: unknown | Ref<unknown> })[key] =
//           ref;
//
//         data.push(value);
//         refs.push(new Map<string, Ref<unknown>>());
//
//         processObject(newIndex, data, refs);
//       }
//     }
//   }
// }
//
// export function flattenIntoBaseData<T extends object>(input: T): BaseData<T> {
//   const data = [input];
//   const refs = [new Map<string, Ref<unknown>>()];
//
//   const seen = new Map<object, number>([[input, 0]]);
//   const stack = [input];
//
//   while (stack.length > 0) {
//     const next = stack.pop();
//
//     if (typeof next !== "object") {
//       continue;
//     }
//
//     let index = seen.get(next);
//     if (index === undefined && data.length === 0) {
//       // This should only be needed for the root object
//       index = data.length;
//       data.push(next);
//       refs.push(new Map<string, Ref<unknown>>());
//       seen.set(next, index);
//     }
//
//     if (Array.isArray(next)) {
//       console.error("Arrays are not supported");
//     } else {
//       for (const [key, value] of Object.entries(next)) {
//         if (value !== null && typeof value === "object") {
//           if (!seen.has(value)) {
//             seen.set(value, data.length);
//             data.push(value);
//             refs.push(new Map<string, Ref<unknown>>());
//             stack.push(value);
//           }
//           refs[index].set(key, {
//             src: index,
//             dst: seen.get(value),
//           });
//         }
//       }
//       // const ref = {
//       //   src: currentIndex,
//       //   dst: newIndex,
//       // };
//       //
//       // refs[currentIndex].set(key, ref);
//       // (data[currentIndex] as { [key: string]: unknown | Ref<unknown> })[key] =
//       //   ref;
//       //
//       // data.push(value);
//       // refs.push(new Map<string, Ref<unknown>>());
//     }
//   }
//
//   // processObject(0, data, refs);
//
//   return {
//     root: 0,
//     data: data as [MaybeRef<T>, ...MaybeRef<T[keyof T]>[]],
//     refs,
//   };
// }
//
// // Proxies access to a potentially recursive object stored as an array
// export function proxyData<T extends object>(data: BaseData<MaybeRef<T>>): T {
//   const handler: ProxyHandler<BaseData<T>> = {
//     get(obj, prop) {
//       const ref = obj.refs[obj.root].get(prop as string);
//       if (ref !== undefined) {
//         if (obj.refs[ref.dst] !== undefined) {
//           return proxyData({
//             data: obj.data,
//             refs: obj.refs,
//             root: ref.dst,
//           });
//         }
//         return obj.data[ref.dst];
//       }
//
//       return obj.data[obj.root][prop as string];
//     },
//     set(target, prop, newValue) {
//       const ref = target.refs[target.root].get(prop as string);
//
//       if (ref !== undefined) {
//         target.data[ref.dst] = newValue;
//         return true;
//       }
//
//       if (prop in target.data[target.root]) {
//         target.data[target.root][prop as string] = newValue;
//         return true;
//       }
//
//       target.data[target.root][prop as string] = newValue;
//
//       return false;
//     },
//     has(target, p) {
//       const ref = target.refs[target.root].get(p as string);
//       if (ref !== undefined) {
//         return true;
//       }
//
//       return p in target.data[target.root];
//     },
//     deleteProperty(target, prop) {
//       const ref = target.refs[target.root].get(prop as string);
//
//       if (ref !== undefined) {
//         Reflect.deleteProperty(target.data[target.root], prop);
//         return true;
//       }
//
//       return Reflect.deleteProperty(target.data[target.root], prop);
//     },
//     defineProperty(target, property, attributes) {
//       return Reflect.defineProperty(
//         target.data[target.root],
//         property,
//         attributes,
//       );
//     },
//     ownKeys(target) {
//       return Reflect.ownKeys(target.data[target.root]);
//     },
//     getOwnPropertyDescriptor(target, prop) {
//       return Reflect.getOwnPropertyDescriptor(target.data[target.root], prop);
//     },
//     // preventExtensions(target) {
//     //   return Reflect.preventExtensions(target);
//     // },
//     // isExtensible(target) {
//     //   return Reflect.isExtensible(target);
//     // },
//     // setPrototypeOf(target, v) {
//     //   return Reflect.setPrototypeOf(target, v);
//     // },
//     // getPrototypeOf(target) {
//     //   return Reflect.getPrototypeOf(target);
//     // },
//   };
//
//   return new Proxy(data, handler) as T;
// }
//
// // interface Person {
// //   name: string;
// //   contact: {
// //     email: string;
// //     address: {
// //       street: string;
// //       city: string;
// //     };
// //   };
// //   age: number;
// //   children?: Person[];
// //   parents?: Person[];
// // }
// //
// // const person: Person = {
// //   name: "John",
// //   contact: {
// //     email: "john@example.com",
// //     address: {
// //       street: "123 Main St",
// //       city: "Boston",
// //     },
// //   },
// //   age: 30,
// //   parents: [
// //     {
// //       name: "John",
// //       age: 60,
// //       contact: {
// //         email: "john@dxample.com",
// //         address: {
// //           street: "123 Main St",
// //           city: "Boston",
// //         },
// //       },
// //     },
// //   ],
// // };
// //
// // person.parents[0].children = [person];
// //
// // const flattened = flattenIntoBaseData(person);
// //
// // console.log(flattened); // "123 Main St"
// //
// // // The entire structure can still be proxied if needed
// // const proxied = proxyData(flattened);
// // console.log(proxied.contact.address.street); // "123 Main St"
// // console.log(proxied.contact.address.city); // "123 Main St"
// // console.log(proxied.age); // 30
// // console.log(proxied.name); // "John"
// // console.log(proxied.contact.email); // "John"
// // // Recursive access works
// // console.log(proxied.parents[0].children[0].parents[0].children[0].name); // "John"

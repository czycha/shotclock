declare module 'just-compact' {
  export default function compact<T> (arr: T[]): Exclude<T, null | undefined | false | 0>[]
}

import { Check } from '../'

export class AlwaysRun<T = []> extends Check<T> {
  check (args: T) {
    this.trigger(args)
  }
}

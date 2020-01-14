import { Shotclock } from '../shotclock'

export type Requirement = 'boxscore' | 'scoreboard' | 'playByPlay';
export type Requirements = Requirement | Requirement[];
export type CheckListener<T extends any> = (args: T) => void;

export abstract class Check<T extends any> {
  public requires: Requirements = []
  protected listeners: Set<CheckListener<T>> = new Set()
  public shotclock?: Shotclock

  public abstract check (args: T): void

  public listen (fn: CheckListener<T>) {
    this.listeners.add(fn)
    return this
  }

  public trigger (args: T) {
    this.listeners.forEach((c) => c(args))
  }
}

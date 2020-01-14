import { Check, Requirements } from '../'
import { Play, PlayByPlay } from '../../types'

export abstract class PlayByPlayCheck extends Check<[PlayByPlay | undefined]> {
  public requires: Requirements = ['playByPlay']
  protected last = -1

  protected recent (plays: Play[]): Play[] {
    let i = plays.length - 1
    for (; i >= 0; i--) {
      const play = plays[i]
      if (play.event <= this.last) {
        break
      }
    }
    const newer = plays.slice(i + 1, plays.length)
    if (newer.length > 0) {
      this.last = newer[newer.length - 1].event
    }
    return newer
  }
}

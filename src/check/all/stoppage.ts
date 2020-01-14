import { PlayByPlay } from '../../types'
import { PlayByPlayCheck } from './pbp'

export class Stoppage extends PlayByPlayCheck {
  private checks = 0
  check (args: [PlayByPlay | undefined]) {
    const [pbp] = args
    if (pbp == null) {
      return
    }
    const plays = this.recent(pbp.plays)
    if (this.checks > 0) {
      const success = plays.some((play) => {
        return (play.description === 'Start Period' && play.period > 1) ||
        (play.description === 'End Period' && play.period >= 4 && play.home !== play.visitor)
      })
      if (success) {
        this.trigger(args)
      }
    }
    this.checks++
  }
}

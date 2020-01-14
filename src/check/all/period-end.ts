import { PlayByPlay } from '../../types'
import { PlayByPlayCheck } from './pbp'

export class PeriodEnd extends PlayByPlayCheck {
  private checks = 0
  check (args: [PlayByPlay | undefined]) {
    const [pbp] = args
    if (pbp == null) {
      return
    }
    const plays = this.recent(pbp.plays)
    if (this.checks > 0) {
      const success = plays.some(({ description }) => description === 'End Period')
      if (success) {
        this.trigger(args)
      }
    }
    this.checks++
  }
}

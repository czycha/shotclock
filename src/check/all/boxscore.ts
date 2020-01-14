import isEqual from 'fast-deep-equal'

import { Check, Requirements } from '../'
import { BoxScore, Player } from '../../types'

export abstract class BoxScoreCheck extends Check<[BoxScore | undefined]> {
  public requires: Requirements = 'boxscore';
  public players: Player[] = [];

  getPlayer (id: string) {
    return this.players.find((player) => player.id === id)
  }

  hasChanged (player: Player) {
    const cached = this.getPlayer(player.id)
    return !isEqual(cached, player)
  }
}

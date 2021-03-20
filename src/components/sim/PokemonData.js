import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import PokemonStatuses from './PokemonStatuses';

import { PKMN_STATUS } from '../../consts/pokemonData';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#ffffff16',
    borderRadius: '8px',
    boxShadow: '0 2px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12) , 0 2px 4px -1px rgba(0,0,0,0.2)',
    display: 'grid',
    grid: 'auto 1fr auto / repeat(3, 1fr)',
    padding: '10px',
    width: 'fit-content',
  },
  sprite: {
    gridColumn: '1',
    gridRow: '1',
  },
  sprite: {
    gridColumn: '1',
    gridRow: '2',
  },
  status: {
    color: '#333',
    gridColumn: '1',
    gridRow: '3',
  },
  stats: {
    display: 'grid',
    grid: 'repeat(6, 1fr) / repeat(3, 1fr)',
    gridColumn: '2',
    gridRow: '1 / 4',
  },
  statsName: {
    fontWeight: 'bold',
  },
  action: {
    gridColumn: '3',
    gridRow: '1',
  },
});

function PokemonData() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.name}>Héricendre</div>
      <div className={classes.sprite}><img src={`/pkmn/cyndaquil.png`}/></div>
      { /* TODO allow selection */ }
      { /* TODO handle badly poisoned and status turn number */ }
      <div className={classes.status}>
        <PokemonStatuses activeStatus={PKMN_STATUS.BURNED} />
      </div>
      { /* TODO additional status (attraction etc) selection */ }
      { /* TODO level */ }
      <div className={classes.stats}>
        { /* TODO allow stat override */ }
        { /* TODO allow modifier override */ }
        <div className={classes.statsName}>HP</div> <div className={classes.statsValue}>49 / 49</div> <div className={classes.statsModifier}>+3</div>
        <div className={classes.statsName}>Att</div> <div className={classes.statsValue}>59</div> <div className={classes.statsModifier}></div>
        <div className={classes.statsName}>Def</div> <div className={classes.statsValue}>59</div> <div className={classes.statsModifier}></div>
        <div className={classes.statsName}>AttS</div> <div className={classes.statsValue}>59</div> <div className={classes.statsModifier}></div>
        <div className={classes.statsName}>DefS</div> <div className={classes.statsValue}>59</div> <div className={classes.statsModifier}></div>
        <div className={classes.statsName}>Vit</div> <div className={classes.statsValue}>59</div> <div className={classes.statsModifier}></div>
      </div>
      <div className={classes.action}>
        { /* TODO attack selection */ }
        Charge
        { /* TODO allow item use */ }
        { /* TODO allow fleeing */ }
        { /* TODO allow nothing */ }
      </div>
    </div>
  );
}

export default PokemonData;

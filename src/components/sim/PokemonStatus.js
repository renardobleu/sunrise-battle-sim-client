import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { PKMN_STATUS } from '../../consts/pokemonData';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#ffffff08',
    borderRadius: '5px',
    boxShadow: '0 1px 2px 0 rgba(0,0,0,0.07), 0 1px 5px 0 rgba(0,0,0,0.06) , 0 1px 2px -1px rgba(0,0,0,0.1)',
    color: '#444',
    cursor: 'pointer',
    display: 'inline-block',
    fontFamily: 'PokemonRGB',
    fontSize: '8px',
    margin: '1px',
    padding: '2px 4px',
  },
  active: {
    backgroundColor: '#ffffff16',
    boxShadow: '0 1px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12) , 0 1px 2px -1px rgba(0,0,0,0.2)',
    color: '#999',
  },
  asleep: {
    backgroundColor: '#99ffff16',
    color: '#699',
  },
  burned: {
    backgroundColor: '#ff000016',
    color: '#900',
  },
  inactive: {
    '&:hover': {
      backgroundColor: '#ffffff10',
      color: '#666',
    },
  },
  frozen: {
    backgroundColor: '#0099ff16',
    color: '#069',
  },
  paralyzed: {
    backgroundColor: '#ffff0016',
    color: '#990',
  },
  poisoned: {
    backgroundColor: '#ff00ff16',
    color: '#909',
  },
});

/**
 * Display a Pokemon status (e.g. paralyzed, burned...).
 * If active, highlight the status in a special color.
 */
function PokemonStatus({ isActive, status }) {
  const classes = useStyles();

  return (
    <div className={`${classes.root} ${computeStatusClasses({ isActive, classes, status })}`} title={status}>
      {computeLabelName(status)}
    </div>
  );
}

function computeLabelName(status) {
  switch (status) {
    case PKMN_STATUS.ASLEEP:
      return 'SOM';
    case PKMN_STATUS.BURNED:
      return 'BRU';
    case PKMN_STATUS.FROZEN:
      return 'GEL';
    case PKMN_STATUS.PARALYZED:
      return 'PAR';
    case PKMN_STATUS.POISONED:
      return 'PSN';
    default:
      return '???';
  }
}

function computeStatusClasses({ isActive, classes, status }) {
  let cStatus;
  if (isActive) {
    switch(status) {
      case PKMN_STATUS.ASLEEP:
        cStatus = classes.asleep;
        break;
      case PKMN_STATUS.BURNED:
        cStatus = classes.burned;
        break;
      case PKMN_STATUS.FROZEN:
        cStatus = classes.frozen;
        break;
      case PKMN_STATUS.PARALYZED:
        cStatus = classes.paralyzed;
        break;
      case PKMN_STATUS.POISONED:
        cStatus = classes.poisoned;
        break;
      default:
        cStatus = classes.active;
        break;
    }
  }
  return isActive ? `${cStatus} ${classes.active}` : classes.inactive;
}

export default PokemonStatus;

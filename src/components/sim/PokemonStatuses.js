import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import PokemonStatus from './PokemonStatus';

import { PKMN_STATUS } from '../../consts/pokemonData';

const useStyles = makeStyles({
  root: {
  },
});

/**
 * Display a Pokemon status (e.g. paralyzed, burned...).
 * If active, highlight the status in a special color.
 */
function PokemonStatuses({ activeStatus }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {computeStatusDisplay(PKMN_STATUS.POISONED, activeStatus)}
      {computeStatusDisplay(PKMN_STATUS.BURNED, activeStatus)}
      {computeStatusDisplay(PKMN_STATUS.PARALYZED, activeStatus)}
      {computeStatusDisplay(PKMN_STATUS.ASLEEP, activeStatus)}
      {computeStatusDisplay(PKMN_STATUS.FROZEN, activeStatus)}
    </div>
  );
}

function computeStatusDisplay(status, activeStatus) {
  return (
    <PokemonStatus
      isActive={activeStatus === status}
      status={status}
    />
  )
}

export default PokemonStatuses;

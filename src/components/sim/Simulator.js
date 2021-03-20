import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import PokemonData from './PokemonData';

import { setAdventurePageId } from '../../actions';
import { adventure } from '../../consts/faery-interlude-sylvain';

const useStyles = makeStyles({
  root: {
    border: 0,
    borderRadius: 3,
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  inputData: {
    marginTop: '50px',
  },
});

function Simulator() {
  const classes = useStyles();
  const [page, setPage] = useState(undefined);

  const pageId = useSelector(state => state.adventuresReducer.pageId);

  useEffect(() => {
    console.log(adventure, pageId);
    setPage(adventure[pageId]);
  }, [pageId]);

  return (
    <div className={classes.root}>
      {/* TODO */}
      <div className={classes.inputData}>
        Input data
        <PokemonData/>
      </div>

      {/* TODO */}
      <div>Battle result (with options to override)</div>
      {/* TODO */}
      <div>Code to copy / paste</div>
    </div>
  );
}

export default Simulator;

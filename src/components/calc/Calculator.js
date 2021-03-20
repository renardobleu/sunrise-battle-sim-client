import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

import { setAdventurePageId } from '../../actions';
import { adventure } from '../../consts/faery-interlude-sylvain';

import { computeTurn } from '../../data/sim';

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

function Calculator() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => computeTurn()}
        >
          Calculate
        </Button>
    </div>
  );
}

export default Calculator;

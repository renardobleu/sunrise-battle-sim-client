import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setAdventurePageId } from '../../actions';

import './Page.css';

function Page({ id, text, choices }) {
  const dispatch = useDispatch();

  return (
    <div className="page">
      <div className="page-id">
        {id}
      </div>
      <div className="text">
        {text}
      </div>
      { choices && <div className="choices">
        { choices.map(({ text, pageId }) =>
          <div className="choice" onClick={() => dispatch(setAdventurePageId(pageId))}>
            {text}
          </div>
        ) }
      </div> }
    </div>
  );
}

export default Page;

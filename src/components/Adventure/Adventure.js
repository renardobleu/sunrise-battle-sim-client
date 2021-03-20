import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Page from './Page';

import { setAdventurePageId } from '../../actions';
import { adventure } from '../../consts/faery-interlude-sylvain';

import './Adventure.css';

function Adventure() {
  const [page, setPage] = useState(undefined);

  const pageId = useSelector(state => state.adventuresReducer.pageId);

  useEffect(() => {
    console.log(adventure, pageId);
    setPage(adventure[pageId]);
  }, [pageId]);

  return (
    <div className="adventure">
      {page && <Page
        id={pageId}
        text={page.text}
        choices={page.choices}
      />}
    </div>
  );
}

export default Adventure;

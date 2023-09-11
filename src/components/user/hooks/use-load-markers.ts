import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { createMarkers } from 'helpers/create-markers';
import { IUser } from 'hooks/types';
import { fetchExcursions } from 'store/features/excursions/excursions-action';
import { selectAsyncExcursions } from 'store/features/excursions/excursions-selectors';
import { useAppDispatch } from 'store/hooks';

import type { IMarker } from 'components/google-map-with-markers-start/types';

export const useLoadMarkers = (user: IUser) => {
  const [currentMarkers, setMarkers] = useState<IMarker[]>([]);
  const asyncExcursions = useSelector(selectAsyncExcursions);
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    const { name, surname } = user;

    dispatch(fetchExcursions({ name, surname }));
  }, [user.name, user.surname, pathname]);

  useEffect(() => {
    if (asyncExcursions?.length) {
      const markers = createMarkers(asyncExcursions);

      setMarkers(markers);
    }
  }, [asyncExcursions]);

  return { currentMarkers, asyncExcursions };
};

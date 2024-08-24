import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import type { IMarker } from 'components/google-map-with-markers-start/types';
import { createMarkers } from 'helpers/create-markers';
import { fetchExcursions } from 'store/features/excursions/excursions-action';
import { selectAsyncExcursions } from 'store/features/excursions/excursions-selectors';
import type { IUser } from 'store/features/students/types';
import { useAppDispatch } from 'store/hooks';

export const useLoadMarkers = ({ name, surname }: IUser) => {
  const [currentMarkers, setMarkers] = useState<IMarker[]>([]);
  const asyncExcursions = useSelector(selectAsyncExcursions);
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchExcursions({ name, surname }));
  }, [name, surname, pathname]);

  useEffect(() => {
    if (asyncExcursions?.length) {
      const markers = createMarkers(asyncExcursions);

      setMarkers(markers);
    } else {
      setMarkers([]);
    }
  }, [asyncExcursions]);

  return { currentMarkers };
};

import { collection, getDocs } from 'firebase/firestore';

import { db } from '../firebase';

interface IRoute {
  id: number;
  date: string;
  route: string;
}

type TGetTeachersFromDB = () => Promise<IRoute[]>;

export const getRoutesFromDB: TGetTeachersFromDB = async () => {
  const routes: IRoute[] = [];

  try {
    const querySnapshot = await getDocs(collection(db, 'routes'));

    querySnapshot.forEach((doc) => {
      routes.push(doc.data() as IRoute);
    });

    return routes;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }

    throw error;
  }
};

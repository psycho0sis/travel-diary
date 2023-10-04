import { getTeachersFromDB } from 'api/get-teachers-from-db';
import { CustomAlert } from 'components/ui/alert';
import { userUniversalLoader } from 'hooks/use-universal-loader';

import styles from './styles.module.scss';

export const TeachersMapper = () => {
  const { data: teachers, error } = userUniversalLoader(getTeachersFromDB);

  return (
    <>
      <div className={styles.teachers}>
        {teachers?.map(({ id, name, subject, photo }) => (
          <div className={styles.item} key={id}>
            <img className={styles.image} src={photo} />
            <h5 className={styles.title}>{name}</h5>
            <p className={styles.subtitle}>{subject}</p>
          </div>
        ))}
      </div>
      <CustomAlert isShown={error} text='Мы не можем загрузить данные руководителей' />
    </>
  );
};

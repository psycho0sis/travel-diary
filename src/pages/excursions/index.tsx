import { StudentInfo } from 'components/student-info';
import { BackButton } from 'components/ui/back-button';
import { Title } from 'components/ui/title';
import { useStudentsCredentials } from 'hooks/use-students-credentials';

export const CertainStudentExcursions = () => {
  const { name, surname } = useStudentsCredentials();

  return (
    <>
      <BackButton text='Назад' route='/' />
      <Title>Экскурсии, в которых участвовал ученик</Title>
      <StudentInfo name={name} surname={surname} />
    </>
  );
};

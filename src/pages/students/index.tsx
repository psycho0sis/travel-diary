import { StudentsMapper } from 'components/students-mapper';
import { Title } from 'components/ui/title';

export const Students = () => (
  <div className='mt-3'>
    <Title fontSize={22}>Список учеников в группе:</Title>
    <StudentsMapper />
  </div>
);

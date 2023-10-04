import Button from 'react-bootstrap/Button';

import { Iframe } from 'components/iframe';
import { BackButton } from 'components/ui/back-button';
import { Title } from 'components/ui/title';

import { VirtualExcursions } from '..';

import { gravesConfig } from './config';

export const VirtualExcursionVoronovo = () => {
  return (
    <>
      <BackButton text='Назад к списку экскурсий' route='/virtual/' />

      <Title>Братские могилы мирных граждан г.п. Вороново</Title>
      <Iframe
        height='359'
        src='https://www.google.com/maps/d/embed?mid=1j-JIyCnF5mc-70XYxEJ6Nkx3QJ_TtlM&ehbc=2E312F'
        width='1040'
      />
      <div className='d-flex justify-content-center'>
        <Button className='mt-3' variant='warning' href='/virtual/voronovo/quiz'>
          Пройти викторину
        </Button>
      </div>
      <VirtualExcursions excursions={gravesConfig} />
    </>
  );
};

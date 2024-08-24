import { BackButton } from 'components/ui/back-button';
import { Title } from 'components/ui/title';
import { VirtualExcursions } from 'components/virtual-excursions';
import { excursions } from 'components/virtual-excursions/config';

export const Virtual = () => (
  <>
    <BackButton text='Назад' route='/' />
    <Title>Виртуальные экскурсии</Title>
    <VirtualExcursions excursions={excursions} />
  </>
);

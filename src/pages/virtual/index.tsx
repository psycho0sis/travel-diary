import { Title } from 'components/ui/title';
import { VirtualExcursions } from 'pages/virtual-excursions';
import { excursions } from 'pages/virtual-excursions/config';

export const Virtual = () => (
  <>
    <Title>Виртуальные экскурсии</Title>
    <VirtualExcursions excursions={excursions} />
  </>
);

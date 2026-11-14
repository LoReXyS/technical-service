import Elevate from '../../../components/Elevate/Elevate';
import Value from '../../../components/Value/Value';
import PropertyManagement from '../../components/PropertyManagement/PropertyManagement';
import Investments from '../../components/Investments/Investments';
import FindService from '../../components/FindService/FindService';

export default function Service() {
  return (
    <main>
      <Elevate />
      <Value />
      <PropertyManagement />
      <Investments />
      <FindService />
    </main>
  );
}

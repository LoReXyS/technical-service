import Achievements from '../../components/Achievements/Achievements';
import Jorney from '../../components/Jorney/Jorney';
import Values from '../../components/Values/Values';
import styles from './AboutUs.module.css';
import Navigation from '../../components/Navigation/Navigation';
import Find from '../../components/Find/Find';
import Team from '../../components/Team/Team';
import Clients from '../../components/Clients/Clients';
export default function AboutUs() {
  return (
    <>
      <Jorney />
      <Values />
      <Achievements />
      <Navigation />
      <Team />
      <Clients />
      <Find />
    </>
  );
}

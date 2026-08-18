import styles from './Home.module.css';

import HeroHome from '../../components/HeroHome/HeroHome';
import Btns from '../../components/Btns/Btns';
import Servises from '../../components/Servises/Servises';
export default function Home() {
  return (
    <>
      <HeroHome />
      <Btns />
      <Servises />
    </>
  );
}

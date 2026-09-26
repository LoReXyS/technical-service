import Comprehensive from '../../components/Comprehensive/Comprehensive';
import Information from '../../components/Information/Information';
import Inquire from '../../components/Inquire/Inquire';
import Key from '../../components/Key/Key';
import Questions from '../../components/Questions/Questions';
import QuestionsW from '../../components/QuestionsW/QuestionsW';

import styles from './Details.module.css';
export default function Details() {
  return (
    <>
      <Information />
      <QuestionsW />
      <Questions />
      <Key />
      <Inquire />
      <Comprehensive />
    </>
  );
}

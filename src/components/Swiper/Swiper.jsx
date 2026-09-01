import { useState } from 'react';

import { Swiper as SwiperSlider, SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper/modules';

import 'swiper/css';

import styles from './Swiper.module.css';

import image1 from './images/image1.png';
import image2 from './images/image2.png';
import image3 from './images/image3.png';
import image4 from './images/image4.png';
import image5 from './images/image5.png';
import image6 from './images/image6.png';
import image7 from './images/image7.png';
import image8 from './images/image8.png';

const images = [image1, image2, image3, image4, image5, image6, image7, image8];

export default function Swiper() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={styles.gallery}>
      {/* Маленькі картинки */}
      <SwiperSlider
        modules={[Thumbs]}
        onSwiper={setThumbsSwiper}
        watchSlidesProgress
        slidesPerView={8}
        spaceBetween={12}
        className={styles.thumbs}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className={styles.thumbSlide}>
            <img
              src={image}
              alt={`House ${index + 1}`}
              className={styles.thumbImage}
            />
          </SwiperSlide>
        ))}
      </SwiperSlider>

      {/* Велика картинка */}
      <SwiperSlider
        modules={[Thumbs]}
        onSwiper={setSwiper}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        onSlideChange={(swiperInstance) => {
          setActiveIndex(swiperInstance.activeIndex);
        }}
        className={styles.mainSwiper}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className={styles.mainSlide}>
            <img
              src={image}
              alt={`House ${index + 1}`}
              className={styles.mainImage}
            />
          </SwiperSlide>
        ))}
      </SwiperSlider>

      {/* Кнопки */}
      <div className={styles.bottomNavigation}>
        <button
          type="button"
          className={styles.arrowButton}
          onClick={() => swiper?.slidePrev()}
        >
          ←
        </button>

        <div className={styles.pagination}>
          {images.map((_, index) => (
            <span
              key={index}
              className={index === activeIndex ? styles.activeDot : styles.dot}
            />
          ))}
        </div>

        <button
          type="button"
          className={styles.arrowButton}
          onClick={() => swiper?.slideNext()}
        >
          →
        </button>
      </div>
    </section>
  );
}

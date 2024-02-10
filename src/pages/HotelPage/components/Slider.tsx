import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark } from "@fortawesome/free-solid-svg-icons";

import { hotelPhotos } from "@/data/hotelPhotos";
import styles from "./slider.module.css";
import { useState } from "react";

const Slider = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const openHandler = (i: number) => {
    setSlideNumber(i);
    setIsOpen(true);
  };

  const lastPhoto = hotelPhotos.length - 1;

  const moveLeftHandler = () => {
    console.log("prev");
    setSlideNumber((prev) => (prev === 0 ? lastPhoto : prev - 1));
  };

  const moveRightHandler = () => {
    setSlideNumber((prev) => (prev === lastPhoto ? 0 : prev + 1));
  };

  return (
    <>
      {isOpen && (
        <div className={styles.slider}>
          <FontAwesomeIcon icon={faCircleXmark} className={styles.close} onClick={() => setIsOpen(false)} />
          <FontAwesomeIcon icon={faCircleArrowLeft} className={styles.arrow} onClick={moveLeftHandler} />
          <div className={styles.sliderWrapper}>
            <img src={hotelPhotos[slideNumber].src} alt="" className={styles.sliderImg} />
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className={styles.arrow} onClick={moveRightHandler} />
        </div>
      )}
      <div className={styles.preview}>
        {hotelPhotos.map((photo, i) => (
          <div className={styles.previewWrapper} key={i}>
            <img onClick={() => openHandler(i)} src={photo.src} alt="" className={styles.previewImg} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Slider;

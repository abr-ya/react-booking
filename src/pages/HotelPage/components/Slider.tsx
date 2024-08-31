import { useState, MouseEvent, FC } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark } from "@fortawesome/free-solid-svg-icons";

import styles from "./slider.module.css";

interface ISlider {
  photos: string[];
}

const Slider: FC<ISlider> = ({ photos }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const openHandler = (i: number) => {
    setSlideNumber(i);
    setIsOpen(true);
  };

  const lastPhoto = photos.length - 1;

  const moveLeftHandler = (e: MouseEvent<SVGSVGElement>) => {
    e.stopPropagation();
    setSlideNumber((prev) => (prev === 0 ? lastPhoto : prev - 1));
  };

  const moveRightHandler = (e: MouseEvent<SVGSVGElement>) => {
    e.stopPropagation();
    setSlideNumber((prev) => (prev === lastPhoto ? 0 : prev + 1));
  };

  return (
    <>
      {isOpen && (
        <div className={styles.slider} onClick={() => setIsOpen(false)}>
          <FontAwesomeIcon icon={faCircleXmark} className={styles.close} />
          <FontAwesomeIcon icon={faCircleArrowLeft} className={styles.arrow} onClick={moveLeftHandler} />
          <div className={styles.sliderWrapper}>
            <img src={photos[slideNumber]} alt="" className={styles.sliderImg} />
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className={styles.arrow} onClick={moveRightHandler} />
        </div>
      )}
      <div className={styles.preview}>
        {photos.map((photo, i) => (
          <div className={styles.previewWrapper} key={i}>
            <img onClick={() => openHandler(i)} src={photo} alt="" className={styles.previewImg} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Slider;

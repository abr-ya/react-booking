import { hotelPhotos } from "@/data/hotelPhotos";
import styles from "./slider.module.css";

const Slider = () => {
  const openHandler = (i: number) => {
    console.log("open", i);
  };

  return (
    <div className={styles.slider}>
      {hotelPhotos.map((photo, i) => (
        <div className={styles.sliderWrapper} key={i}>
          <img onClick={() => openHandler(i)} src={photo.src} alt="" className={styles.sliderImg} />
        </div>
      ))}
    </div>
  );
};

export default Slider;

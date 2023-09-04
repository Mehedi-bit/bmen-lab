import styles from "@/styles/Footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image
          src="/img/bg2.jpeg"
          styles={{ objectFit: "cover" }}
          fill
          alt=""
        />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            PEOPLE DISAPPOINT, BUT BMEN NEVER DOES
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR OUTLETS</h1>
          <p className={styles.text}>
            146-G, Green Plaza.
            <br /> Dhanmondi, R. 2/A
            <br /> (683) 746-3011
          </p>{" "}
          <br />
          <p className={styles.text}>
            243-W, Water World.
            <br /> Gulshan, R. 47/B
            <br /> (683) 746-3012
          </p>
          <br />
          <p className={styles.text}>
            8934-N, BGB Headquarter.
            <br /> Peelkhana, R. 347/S
            <br /> (683) 746-3013
          </p>
          <br />
          <p className={styles.text}>
            78-E, Shahjalal Airport.
            <br /> Dhaka, R. 23/N
            <br /> (683) 746-3014
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 8:00 - 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 - 23:59
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

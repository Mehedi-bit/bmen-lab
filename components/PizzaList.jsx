import styles from "@/styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList = ({ pizzaList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>ELEGANCE REDEFINED</h1>
      <p className={styles.desc}>
        Celebrate your unique style with our curated collection of men's
        fashion. Explore timeless classics and contemporary trends, all designed
        to enhance your confidence and leave a lasting impression.
      </p>
      <div className={styles.wrapper}>
        {pizzaList.map((pizza) => (
          <PizzaCard pizza={pizza} key={pizza._id} />
        ))}
      </div>
    </div>
  );
};

export default PizzaList;

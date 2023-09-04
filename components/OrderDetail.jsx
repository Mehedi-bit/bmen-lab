import styles from "@/styles/OrderDetail.module.css";
import { useState } from "react";

const OrderDetail = ({ total, createOrder, setOpenModal }) => {
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [hasError, setHasError] = useState(false);

  const handleClick = () => {
    if (!customer || !address || !phoneNumber) {
      setHasError(true);
      return;
    }
    createOrder({ customer, address, total, method: 0 });
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span onClick={() => setOpenModal(false)} className={styles.close}>
          X
        </span>
        <h1 className={styles.title}>You will pay ${total} after delivery.</h1>
        <div className={styles.item}>
          <label className={styles.label}>Name or surname</label>
          <input
            className={`${styles.input} ${
              hasError && !customer ? styles.error : ""
            }`}
            type="text"
            placeholder={
              hasError && !customer ? "Adam Zaid (Name required)" : "Adam Zaid"
            }
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Phone number</label>
          <input
            className={`${styles.input} ${
              hasError && !phoneNumber ? styles.error : ""
            }`}
            type="text"
            placeholder={
              hasError && !phoneNumber
                ? "+880 1700 000000 (Phone required)"
                : "+880 1700 000000"
            }
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Address</label>
          <textarea
            rows={5}
            placeholder={
              hasError && !address
                ? "Ghorashal 86/BE (Address required)"
                : "Ghorashal 86/BE"
            }
            type="text"
            className={`${styles.textarea} ${
              hasError && !address ? styles.error : ""
            }`}
            onChange={(e) => setAddress(e.target.value)}
          ></textarea>
        </div>
        <button className={styles.button} onClick={handleClick}>
          Order
        </button>
      </div>
    </div>
  );
};

export default OrderDetail;

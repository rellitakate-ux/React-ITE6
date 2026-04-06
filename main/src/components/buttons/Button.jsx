import styles from "./Button.module.css";
const Button = ({ btnName, onClick, size = "medium" }) => {
  return (
    <button className={`${styles.buttonComponent} ${styles[size]}`} onClick={onClick} >
      {btnName}
      
    </button>
  );
};

export default Button;

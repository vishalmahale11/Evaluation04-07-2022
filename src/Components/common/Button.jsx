import styles from "./Button.module.css";

function Button({ disabled,children,handleStart }) {
  return (
    <button disabled={disabled}  className={styles.button} data-testid="button" >
      {children} {handleStart}
    </button>
  );
}

export default Button;

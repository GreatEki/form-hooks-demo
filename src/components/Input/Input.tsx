import React, { FC } from "react";
import styles from "./Input.module.css";

interface Props {
  name: string;
  label: string;
  register: any;
  options: any;
  errorMsg: string;
}

const Input: FC<Props> = (props) => {
  const { name, label, register, options, errorMsg } = props;
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={name} className={styles.inputLabel}>
        {" "}
        {label}
      </label>
      <input
        className={styles.input}
        name={name}
        {...register(name, options)}
      />
      {errorMsg && <p className={styles.errorMsg}>{errorMsg}</p>}
    </div>
  );
};

export default Input;

import React, { FC } from "react";
import styles from "./Input.module.css";

interface Props {
  name: string;
  label: string;
  register: any;
}

const Input: FC<Props> = (props) => {
  const { name, label, register } = props;
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={name} className={styles.inputLabel}>
        {" "}
        {label}
      </label>
      <input className={styles.input} name={name} {...register(props.name)} />
    </div>
  );
};

export default Input;

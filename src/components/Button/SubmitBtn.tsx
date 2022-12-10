import { FC } from "react";
import styles from "./SubmitBtn.module.css";

interface Props {
  disabled: boolean;
  label: string;
}

const SubmitBtn: FC<Props> = (props) => {
  const { disabled, label } = props;
  return (
    <button
      className={styles.submitBtn}
      type="submit"
      disabled={disabled}
      //   value={value}
    >
      {label}{" "}
    </button>
  );
};

export default SubmitBtn;

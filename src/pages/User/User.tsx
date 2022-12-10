import React from "react";
import UserForm from "./UserForm.tsx/UserForm";
import styles from "./User.module.css";

const User = () => {
  return (
    <div className={styles.userContainer}>
      <UserForm />
    </div>
  );
};

export default User;

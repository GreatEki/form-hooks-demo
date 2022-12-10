import styles from "./Userform.module.css";
import { Input } from "../../../components";
import { useForm } from "react-hook-form";

type FormValues = {
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
};
const UserForm = () => {
  const { register, handleSubmit } = useForm<FormValues>();

  function onSubmit(data: FormValues) {
    console.log(data);
  }
  return (
    <div className={styles.userForm}>
      <h1> User Form</h1>
      <form onSubmit={handleSubmit((data) => onSubmit(data))}>
        <Input name="firstName" label="FirstName" register={register} />
        <Input name="lastName" label="Lastname" register={register} />

        <input type="submit" />
      </form>
    </div>
  );
};

export default UserForm;

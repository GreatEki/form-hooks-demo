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
  const { register, watch } = useForm<FormValues>();

  return (
    <div className={styles.userForm}>
      <h1> User Form</h1>
      <form>
        <Input name="firstName" label="FirstName" register={register} />
        {/* <Input name="lastName" label="Lastname" register={register} />
        <Input name="" label="Age" register={register} /> */}
      </form>
    </div>
  );
};

export default UserForm;

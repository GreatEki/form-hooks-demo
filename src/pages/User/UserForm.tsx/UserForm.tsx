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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  function onSubmit(data: FormValues) {
    console.log(data);
  }
  return (
    <div className={styles.userForm}>
      <h1> User Form</h1>
      <form onSubmit={handleSubmit((data) => onSubmit(data))}>
        <Input
          name="firstName"
          label="FirstName"
          register={register}
          options={{ required: "Firstname is required" }}
          errorMsg={errors?.firstName?.message}
        />
        <Input
          name="lastName"
          label="Lastname"
          register={register}
          options={{ required: "Lastname is required" }}
          errorMsg={errors?.lastName?.message}
        />

        <input type="submit" />
      </form>
    </div>
  );
};

export default UserForm;

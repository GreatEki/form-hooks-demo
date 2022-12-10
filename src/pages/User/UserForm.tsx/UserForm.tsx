import styles from "./Userform.module.css";
import { Input, SubmitBtn } from "../../../components";
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
    formState: { errors, isValid },
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
          label="Firstname"
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

        <SubmitBtn disabled={!isValid} label="Send" />
      </form>
    </div>
  );
};

export default UserForm;

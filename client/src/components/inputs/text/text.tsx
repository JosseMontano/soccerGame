import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import styles from "./text.module.css";

interface Props {
  error: FieldError | undefined;
  placeholder: string;
  register: UseFormRegisterReturn;
}
const InputText = ({ error, register, placeholder }: Props) => {
  return (
    <>
      <input
        {...register}
        className={styles.input}
        type="text"
        placeholder={placeholder}
      />
      {error && <p>{error.message}</p>}
    </>
  );
};

export default InputText;

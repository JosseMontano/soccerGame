import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { RegisterDTO } from "../dtos/register";
import { schemaRegister } from "../validations/register";
import stylesCard from "../css/card.module.css";
import { FormType } from "..";

interface Props {
    handleChangeForm: (val: FormType) => void;
}
const RegisterForm = ({ handleChangeForm }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterDTO>({
    resolver: zodResolver(schemaRegister),
  });

  const onSubmit = (data: RegisterDTO) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={stylesCard.card}>
      <h3>Registro</h3>
      <input
        {...register("email")}
        className={stylesCard.input}
        type="text"
        placeholder="Correo electronico"
      />
      {errors.email && <p>{errors.email.message}</p>}

      <input
        {...register("password")}
        className={stylesCard.input}
        type="password"
        placeholder="Contraseña"
      />
      {errors.password && <p>{errors.password.message}</p>}

      <input
        {...register("confirmPassword")}
        className={stylesCard.input}
        type="password"
        placeholder="Repetir contraseña"
      />
      {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}

      <div>
        <input {...register("terms")} type="checkbox" id="terms" />

        <label htmlFor="">{"    "}Acepto los terminos y condiciones</label>
      </div>
      {errors.terms && <p>{errors.terms.message}</p>}

      <button type="submit">Registrarse</button>

      <p className={stylesCard.redirect}>
        ¿Ya Tienes una cuenta?{" "}
        <span onClick={() => handleChangeForm("login")}>Inicia sesion</span>
      </p>
    </form>
  );
};

export default RegisterForm;

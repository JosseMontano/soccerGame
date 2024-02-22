import { useForm } from "react-hook-form";
import { LoginDTO } from "../dtos/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { schemaLogin } from "../validations/login";
import InputText from "../../../components/inputs/text/text";
import stylesCard from "../css/card.module.css";
import { FormType } from "..";

interface Props {
    handleChangeForm: (val: FormType) => void;
  }

const LoginForm = ({handleChangeForm}: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginDTO>({
    resolver: zodResolver(schemaLogin),
  });

  const onSubmit = (data: LoginDTO) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={stylesCard.card}>
      <h3>Iniciar sesion</h3>
      <InputText
        register={register("email")}
        placeholder="Correo electronico1"
        error={errors.email}
      />

      <InputText
        register={register("password")}
        placeholder="Contraseña"
        error={errors.password}
      />

      <button type="submit">Registrarse</button>

      <p className={stylesCard.redirect}>
        ¿No Tienes una cuenta?{" "}
        <span onClick={() => handleChangeForm("register")}>Create una cuenta</span>
      </p>
    </form>
  );
};

export default LoginForm;

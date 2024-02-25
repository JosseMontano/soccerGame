import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { RegisterDTO } from "../dtos/register";
import { schemaRegister } from "../validations/register";
import stylesCard from "../css/card.module.css";
import { FormType } from "..";
import { registerService } from "../services/register";
import { toast } from "react-hot-toast";
import { UseRouter } from "../../../hooks/useRouter";

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

  const { redirect } = UseRouter();

  const onSubmit = async (data: RegisterDTO) => {
    const res = await registerService(data);
    const thereIsToken = res.data.token;
    if (thereIsToken) {
      toast.success(res.message, { duration: 3000 });
      redirect("/dashboard/home");
    } else toast.error(res.message, { duration: 3000 });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={stylesCard.card}>
      <h3>Registro</h3>
      <input
        {...register("gmail")}
        className={stylesCard.input}
        type="text"
        placeholder="Correo electronico"
      />
      {errors.gmail && <p>{errors.gmail.message}</p>}

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

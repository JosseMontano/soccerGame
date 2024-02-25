import { useForm } from "react-hook-form";
import { LoginDTO } from "../dtos/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { schemaLogin } from "../validations/login";
import InputText from "../../../components/inputs/text/text";
import stylesCard from "../css/card.module.css";
import { FormType } from "..";
import { loginService } from "../services/login";
import { toast } from "react-hot-toast";
import { UseRouter } from "../../../hooks/useRouter";
interface Props {
  handleChangeForm: (val: FormType) => void;
}

const LoginForm = ({ handleChangeForm }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginDTO>({
    resolver: zodResolver(schemaLogin),
  });

  const {redirect} = UseRouter();

  const onSubmit = async (data: LoginDTO) => {
    const res = await loginService(data);
    const thereIsToken = res.data.token;
    if (thereIsToken){
      toast.success(res.message, { duration: 3000 });
      redirect("/dashboard/home")
    }
    else toast.error(res.message, { duration: 3000 });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={stylesCard.card}>
      <h3>Iniciar sesion</h3>
      <InputText
        register={register("gmail")}
        placeholder="Correo electronico"
        error={errors.gmail}
      />

      <InputText
        register={register("password")}
        placeholder="Contraseña"
        error={errors.password}
      />

      <button type="submit">Iniciar sesion</button>

      <p className={stylesCard.redirect}>
        ¿No Tienes una cuenta?{" "}
        <span onClick={() => handleChangeForm("register")}>
          Create una cuenta
        </span>
      </p>
    </form>
  );
};

export default LoginForm;

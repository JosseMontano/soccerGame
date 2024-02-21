import stylesImg from "./css/image.module.css";
import stylesCard from "./css/card.module.css";
import Img from "../../assets/backgroundAuth.jpg";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterDTO } from "./dtos/register";

const schema = z
  .object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must have at least 8 characters"),
    confirmPassword: z
      .string()
      .min(8, "Password must have at least 8 characters"),
    terms: z.literal(true, {
      errorMap: () => ({ message: "You must accept Terms and Conditions" }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], // specify the path of the error
  });

const Auth = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterDTO>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: RegisterDTO) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <img src={Img} className={stylesImg.img} alt="background" />

      <div className={stylesCard.card}>
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

        <p>
          ¿Tienes una cuenta? <span>Inicia sesion</span>
        </p>
      </div>
    </form>
  );
};

export default Auth;

import { useState } from "react";
import stylesImg from "./css/image.module.css";
import Img from "../../assets/backgroundAuth.jpg";
import RegisterForm from "./components/register";
import LoginForm from "./components/login";

export type FormType = "login" | "register";

const Auth = () => {
  const [showForm, setShowForm] = useState<FormType>("login");

  const handleShowForm = (val: FormType) => {
    setShowForm(val);
  };

  return (
    <div>
      <img src={Img} className={stylesImg.img} alt="background" />

      <div>
        {showForm == "login" && <LoginForm handleChangeForm={handleShowForm} />}

        {showForm == "register" && (
          <RegisterForm handleChangeForm={handleShowForm} />
        )}
      </div>
    </div>
  );
};

export default Auth;

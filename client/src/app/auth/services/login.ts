import { postData } from "../../../utils/fetch";
import { LoginRes } from "../responses/login";

export const url = "auth/";

export const loginService = async <T>(dataPost: T) => {
  const res= await postData<T, LoginRes>("auth/login", dataPost);
  return res;
};

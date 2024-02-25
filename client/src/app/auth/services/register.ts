import { postData } from "../../../utils/fetch";
import { RegisterRes } from "../responses/register";

export const url = "auth/";

export const registerService = async <T>(dataPost: T) => {
  const res= await postData<T, RegisterRes>("auth/register", dataPost);
  return res;
};

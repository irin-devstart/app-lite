import axios from "axios";
import { ApiRoute } from "../../common";

type TRes = {
  data: { access_token: string };
  user: User;
};

export const findOne = async (payload: UserLogin) => {
  const { data } = await axios.post(ApiRoute.auth.login, payload);
  const dataFinal: TRes = data?.data;
  return dataFinal;
};

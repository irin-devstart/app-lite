import axios from "axios";
import { ApiRoute } from "../../common";
export const getShippingComps = async () => {
  const { data } = await axios.get(ApiRoute.finance);
  return data;
};

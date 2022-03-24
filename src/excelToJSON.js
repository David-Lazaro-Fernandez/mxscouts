import { read } from "xlsx";
import axios from "axios";

export const excelToJson = async (url) => {
  const response = await axios.get(url, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    mode: "cors",
    responseType: "arraybuffer",
  });
  console.log(response);
  const workbook = read(response.data);
};

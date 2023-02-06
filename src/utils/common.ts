import { CustomAny } from "src/types/general";

export default function cleanUp(data: CustomAny) {
  if (!data) {
    return data;
  }

  if (!data.toObject) {
    return data;
  }

  return data.toObject();
}

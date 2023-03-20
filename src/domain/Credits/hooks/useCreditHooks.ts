import { useQuery } from "@tanstack/react-query";
import { Credits } from "../model";
import { fetchCreditData } from "../services";

const defaultData: Credits[] = [[]];

export default function useCreditFetchHooks() {
  return useQuery(["useCreditFetchHooks"], fetchCreditData, {
    initialData: [],
  });
}

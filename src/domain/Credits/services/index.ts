import { Credits } from "../model";

type FormData = {
  location?: string | undefined;
  name: string;
  phone: string;
  enquire: number;
};

export async function fetchCreditData(): Promise<Credits> {
  try {
    const request = await fetch(process.env.NEXT_PUBLIC_URL!);
    if (!request.ok) {
      throw new Error("Bad Response", {
        cause: { request },
      });
    }
    const response = await request.json();
    return response.data as Credits;
  } catch (error) {
    throw error;
  }
}

export async function sendToZapier(data: FormData) {
  try {
    const sendParams = new URL(process.env.NEXT_PUBLIC_URL_ZAPIER!);
    Object.keys(data).forEach((key) => {
      const objKey = key as keyof FormData;
      return sendParams.searchParams.append(objKey, String(data[objKey]));
    });
    await fetch(sendParams);
  } catch (error) {
    throw new Error((error as Error).message);
  }
}

export function paginate(
  array: any[],
  page_size: number = 6,
  page_number: number = 1
) {
  return array.slice((page_number - 1) * page_size, page_number * page_size);
}

import { Credits } from "../model";

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

export function paginate(
  array: any[],
  page_size: number = 6,
  page_number: number = 1
) {
  return array.slice((page_number - 1) * page_size, page_number * page_size);
}

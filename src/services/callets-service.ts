import axios from "axios";

export const client = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

export interface ResponseAPI {
  name: string;
  sprites: { front_default: string };
  id: number;
  weight: number;
  height: number;
}

export const getPosts = async (): Promise<ResponseAPI> => {
  const { data } = await client.get<ResponseAPI>("pokemon/ditto");
  return data;
};

export const getPokemonById = async (id:number): Promise<ResponseAPI> => {
  const { data } = await client.get<ResponseAPI>(`pokemon/${id}`);
  return data;
};

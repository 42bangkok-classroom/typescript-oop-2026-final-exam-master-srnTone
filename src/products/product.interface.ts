import { ApiResponse } from "src/interfaces/response.interface";

export interface Product extends ApiResponse<string | number > {
  id: number;
  name: string;
  price: number;
  stock: number;
  description: string;
}
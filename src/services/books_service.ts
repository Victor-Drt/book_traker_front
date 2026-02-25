import api from '../api/axios';


export type ApiBook = {
  id: number;
  title: string;
  author: string;
  category: string;
  total_pages: number;
  created_at: string;
  updated_at: string;
  is_finished: boolean;
  percent_finished: number;
  total_pages_read: number;
  owner: number;
};

export type ApiResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: ApiBook[];
};

export type Book = {
  titulo: string;
  autor: string;
  categoria: string;
  paginas_lidas: number;
  percentual_concluido: number;
};

export const fetchBooks = async (): Promise<ApiResponse> => {

    const response = await api.get("/books/")

    return response.data;
}
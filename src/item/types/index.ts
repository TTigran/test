export type Item = {
    id: string;
    name: string;
    description: string;
}

export type ResponseSuccessItem = {
  success: boolean;
  error: {
      status: boolean;
      code: number;
      message: string;
  }
  data: Item;
}
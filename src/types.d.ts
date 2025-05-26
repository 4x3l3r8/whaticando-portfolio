export interface EmailApiResponse<T> {
  statusCode: number;
  success: boolean;
  body: {
    data: T;
    message: string;
  };
}

type JSONResponse<T> = {
  data?: EmailApiResponse<T>;
  errors?: Array<{ message: string }>;
};

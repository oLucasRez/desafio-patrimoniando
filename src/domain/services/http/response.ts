interface SucceededResponse<DataType> {
  ok: true;
  data: DataType;
}

interface FailedResponse {
  ok: false;
  error: {
    code: number;
    message: string;
  };
}

export type Response<DataType> = SucceededResponse<DataType> | FailedResponse;

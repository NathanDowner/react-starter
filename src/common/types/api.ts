export type APIResponse<T = unknown> =
  | {
      success: true;
      data: T;
    }
  | {
      success: false;
      errorMessage: string;
    };

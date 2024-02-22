import { UnknownAction } from "@reduxjs/toolkit";

export const typedCatchHandler = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: any | unknown,
  callback: (message: string) => void,
  sliceName = "NOsliceName",
) => {
  if (error?.name === "AxiosError") {
    const message = error?.response?.data?.message;
    const status = error?.response?.status;
    console.log(`${sliceName} catch Axios error:`, status, message, error.message);

    return callback(`${status}_${message}_${error.message}`);
  }
  if (error instanceof Error) {
    console.log(`${sliceName} catch error:`, error.message);

    return callback(`-_-_${error.message}`);
  }
};

export const isError = (action: UnknownAction) => action.type.endsWith("rejected");

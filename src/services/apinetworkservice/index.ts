import BaseConfig from "@/config";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Alert, StyleSheet } from "react-native";
//@ts-ignore
import { ParamsNetwork } from "./type";

export const RESULT_CODE_PUSH_OUT = 401;
const TIME_OUT = 20000;

import Axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { ResponseBase } from "./type";

//@ts-ignore
import { controller, handleErrorAxios, handleParameter, handleResponseAxios } from "./helper";

const AxiosInstance = Axios.create({});

AxiosInstance.interceptors.response.use(
  (response) => response,
  async function (error) {
    const originalRequest = error.config;
    if (
      error &&
      error.response &&
      (error.response.status === 403 || error.response.status === 401) &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      return AxiosInstance(originalRequest);
    }
    return Promise.reject(error);
  }
);

// base
function Request<T = Record<string, unknown>>(config: ParamsNetwork) {
  const token = "token"; //getAuthToken();

  let headers = {
    "Content-Type": "application/json",
    authorization: "Bearer " + token ?? "",
  };

  const defaultConfig: AxiosRequestConfig = {
    baseURL: BaseConfig.API_URL["API_URL"], // BaseConfig.API_URL[config.apiBaseUrl] ?? BaseConfig.API_URL["AUTH_API_URL"],
    timeout: TIME_OUT,
    headers: headers,
  };

  return new Promise<ResponseBase<T> | null>((rs, reject) => {
    AxiosInstance.request(
      StyleSheet.flatten([
        defaultConfig,
        config,
        { signal: config?.controller?.signal || controller.current?.signal },
      ])
    )
      .then((res: AxiosResponse<T>) => {
        const result = handleResponseAxios(res);
        rs(result);
      })
      .catch((error: AxiosError<T>) => {
        if (error?.response?.data) {
          // DevSettings.reload();
          // @ts-ignore
          let { code, isSuccess, message } = error?.response?.data;
          let result = {
            code,
            status: isSuccess,
            message,
          };

          rs(result as ResponseBase<T>);
        } else {
          // @ts-ignore
          rs(error);
        }
      });
  });
}

// get
async function Get<T>(params: ParamsNetwork) {
  return Request<T>(handleParameter(params, "GET"));
}

// post
async function Post<T>(params: ParamsNetwork) {
  return Request<T>(handleParameter(params, "POST"));
}

type ParameterPostFormData = AxiosRequestConfig & ParamsNetwork;
// post FormData
async function PostFormData<T>(params: ParamsNetwork) {
  //   const { token }: AppState = getState("app");
  const headers: AxiosRequestConfig["headers"] = {
    // [tokenKeyHeader]: token ?? "",
    "Content-Type": "multipart/form-data",
  };
  return Request<T>(handleParameter<ParameterPostFormData>({ ...params, headers }, "POST"));
}

// put
async function Put<T>(params: ParamsNetwork) {
  return Request<T>(handleParameter(params, "PUT"));
}

// patch
async function Patch<T>(params: ParamsNetwork) {
  return Request<T>(handleParameter(params, "PATCH"));
}

// delete
async function Delete<T>(params: ParamsNetwork) {
  return Request<T>(handleParameter(params, "DELETE"));
}
export type NetWorkResponseType<T> = (
  params: ParamsNetwork
) => Promise<ResponseBase<T> | null>;

export const NetWorkService = {
  Get,
  Post,
  Put,
  Delete,
  PostFormData,
  Request,
  Patch,
};

import axios, { AxiosRequestConfig } from 'axios';

export interface FetchResponse<T>{
  count:number;
  next:string | null,
  results:T[];
}

const axiosInstance= axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
      key: "3fa63fd70cd24eefa55b13f3007e3c04",
    },
  });


  class APIClinet<T>{
    endpoint:string;

    constructor(endpoint:string){
      this.endpoint=endpoint;
    }


    getAll=(config:AxiosRequestConfig)=>{
      return axiosInstance
      .get<FetchResponse<T>>(this.endpoint,config)
      .then(res=>res.data)
    }
  }

  export default APIClinet;
import { APIKEY, BaseUrl } from "@/shared/constants";
import { APIResponse } from "./request";

export default async function APICalls(
    url: string,
    method:"POST" | "GET" | "PATCH" | "DELETE" | "PUT" = "POST",
    data: any
): Promise<APIResponse> {
    var headers = new Headers();
    const token = localStorage.getItem('token');
    if (String(token) !== 'null') {
      headers.append('Authorization', `Bearer ${token}`);
    }
    headers.append('accept','*/*');
    headers.append('x-api-key', APIKEY);
    headers.append('x-domain',"internal");
  var paramList:string[] = [];
  var params:string = "";
  if(method == "GET")
    {
      Object.keys(data).forEach((a:string,i:number)=>{
        paramList.push(`${i == 0?"?":""}${a}=${data[a]}`);
      })
      params = paramList.join("&");
    }
    var requestOptions: any = {
      method:method,
      headers: headers
    };
    const response = await fetch(`${BaseUrl}${url}${params}`, requestOptions)
    return await response.json();
}
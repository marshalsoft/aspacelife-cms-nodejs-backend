"use client"
import { APIKEY, BaseUrl, LOCALSTORAGE } from "@/shared/constants";
export interface APIResponse {
    status: string | boolean;
    message: string;
    data: any;
    errors?:any;
    status_code?: number;
  }
export function PostRequest(
    url: string,
    data: any,
    requestType: 'json' | 'formData' = 'json',
  ) {
    var headers = new Headers();
    var formData = new FormData();
    var ServerStatus:boolean = true;
    if (requestType !== 'json') {
      for (var a in data) {
        formData.append(a, data[a]);
        console.log(a, '|', data[a]);
      }
    }
    return new Promise<APIResponse>((resolve, _reject) => {
          const token:string | null = localStorage.getItem(LOCALSTORAGE.authToken);
            if (String(token) !== 'null') {
              headers.append('Authorization', `Bearer ${JSON.parse(String(token)).access_token}`);
            }
            if (requestType !== 'json'){
                headers.append('Content-Type', 'multipart/form-data');
            } else {
                headers.append('Content-Type', 'application/json');
            }
            headers.append('accept','*/*');
            headers.append('x-api-key', APIKEY);
            headers.append('x-domain',"internal");
            var raw = JSON.stringify(data);
            var requestOptions: any = {
              method: 'POST',
              headers: headers,
              body: requestType === 'json' ? raw : formData,
              redirect: 'follow',
            };
            console.log(
              'requestOptions:',
              requestOptions,
              '|',
              `${BaseUrl}${url}`,
              '|'
            );
            fetch(`${BaseUrl}${url}`, requestOptions).then((res)=>res.json())
            // { 
            //    if(res.status >= 200 && res.status < 299){
            //     ServerStatus = true
            //   }else if(res.status >= 300 && res.status < 399){
            //   ServerStatus = false
            //    }else if(res.status >= 400 && res.status < 499){
            //   ServerStatus = false
            //    }else if(res.status >= 500){
            //   ServerStatus = false
            //   }
            // return res.json();     
            //   })
              .then((result: APIResponse) => {
                if(result.errors)
                {
                  result.message = Object.values(result.errors).filter((a,i)=>i === 0).join("").replace(/[\]\["]]/g,"")
                }
                result.status = result.status === "success";
                console.log(`${BaseUrl}${url}`, '| respons->', result);
                resolve(result);
              }).catch(error => {
                console.log(error);
                resolve({
                  status: "failed",
                  data: {},
                  message: error.message,
                });
              })
          });
  }

  export function GetRequest(
      url: string,
      data: any
    ) {
      var headers = new Headers();
      return new Promise<APIResponse>((resolve, _reject) => {
        const token:string | null = localStorage.getItem(LOCALSTORAGE.authToken);
            if (String(token) !== 'null') {
              headers.append('Authorization', `Bearer ${JSON.parse(String(token)).access_token}`);
            }
            headers.append('Content-Type', 'multipart/form-data');
            headers.append('accept','*/*');
            headers.append('x-api-key', APIKEY);
            headers.append('x-domain',"internal");
            var params:string[] = [];
            if(data !== undefined)
              {
                Object.keys((a:string)=>{
                  params.push(`${a}=${data[a]}`);
                })
              }
              var requestOptions: any = {
                method: 'GET',
                headers: headers
              };
              console.log(
                'requestOptions:',
                requestOptions,
                '|',
                `${BaseUrl}${url}${params.length !== 0?"?":""}${params.join("&")}`,
                '|'
              );
              fetch(`${BaseUrl}${url}${params}`, requestOptions)
                .then(res => res.json())
                .then((result: APIResponse) => {
                  result.status = result.status === "success";
                  console.log(`${BaseUrl}${url}`, '| respons->', result);
                  resolve(result);
                }).catch(error => {
                  console.log(error);
                  resolve({
                    status: false,
                    data: {},
                    message: error.message,
                  });
                });
            });
  }

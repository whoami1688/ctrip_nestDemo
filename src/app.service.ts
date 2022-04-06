import { Injectable } from '@nestjs/common';
import { get } from "http"

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  async getData(): Promise<any> {
    let data = null    
    return new Promise((resolve, reject) => {
      get("http://127.0.0.1:8000", (res) => {  //向express服务器发送请求
        let chunks = [];
        let size = 0;
        res.on('data', function (chunk) {
          chunks.push(chunk);
          size += chunk.length;
        });
        res.on('end', function () {
          let buf = Buffer.concat(chunks, size);
          // console.log(buf);
          data = buf.toString()
          resolve(data)
        })
      })
    })
  }
}

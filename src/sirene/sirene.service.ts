import { Injectable } from "@nestjs/common";
import * as https from "https";
import * as dotenv from "dotenv";

@Injectable()
export class SireneService {
  private readonly key: string;
  private readonly secret: string;
  constructor() {
    dotenv.config();
    this.key = process.env.SIRENE_KEY;
    this.secret = process.env.SIRENE_SECRET;
  }
  async makeRequest(
    options: https.RequestOptions,
    params: URLSearchParams | null = null,
  ): Promise<object> {
    return new Promise((resolve, reject) => {
      const req = https.request(options, function (res) {
        const chunks = [];

        res.on('data', function (chunk) {
          chunks.push(chunk);
        });

        res.on('end', function () {
          const body = Buffer.concat(chunks);
          resolve(JSON.parse(body.toString()));
        });
        res.on('error', function (error: Error) {
          reject(error);
        });
      });
      if (params) req.write(params.toString());
      req.end();
    });
  }
  async getToken(): Promise<string> {
    // do a curl request with a Basic Base64 encoded key:secret
    // return the token
    const options = {
      hostname: 'api.insee.fr',
      path: '/token',
      method: 'POST',
      headers: {
        Authorization:
          'Basic ' +
          Buffer.from(this.key + ':' + this.secret).toString('base64'),
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };
    const params = new URLSearchParams({
      grant_type: 'client_credentials',
    });
    const response = await this.makeRequest(options, params);
    return response['access_token'];
  }
  async getInfo(siren: string): Promise<object> {
    const token = await this.getToken();
    const options = {
      hostname: 'api.insee.fr',
      path: '/entreprises/sirene/V3/siren/' + siren,
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };
    return await this.makeRequest(options);
  }
}

import axios, {AxiosError, AxiosResponse, Method} from 'axios';

class ApiManager {
  private route = '' as string;
  private method = 'GET' as Method;
  private params = '' as string;

  public addParams(params: {key: string; value: string}[]) {
    params.length > 0 &&
      params?.map(
        ({key, value}) =>
          (this.params += `${!this.params ? '?' : '&'}${key}=${value}`),
      );
    return this;
  }

  public addRoute(endpoint: string) {
    this.route = endpoint;
    return this;
  }

  public post() {
    this.method = 'POST';
    return this;
  }

  public get() {
    this.method = 'GET';
    return this;
  }

  public put() {
    this.method = 'PUT';
    return this;
  }

  public delete() {
    this.method = 'DELETE';
    return this;
  }

  public send(): unknown {
    return new Promise((resolve, reject) => {
      const url = `${this.route}${this.params}`;
      axios({
        url,
        method: this.method,
      })
        .then((response: AxiosResponse) => {
          resolve(response.data);
        })
        .catch((error: AxiosError) => {
          reject(error.message);
        });
    });
  }
}

export default ApiManager;

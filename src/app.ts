import * as http from 'http';
import { getFilerEpisodes, getListEpisodes } from './controllers/podcasts-controller';
import { Routes } from './Routes/routes';
import { httpMethods } from './utils/http-methods';

export const app = async (
    request: http.IncomingMessage, response: http.ServerResponse) => {
    // guerystring
    //http://localhost:3000/api/list?search=flow
    const [baseUrl, queryString] = request.url?.split("?") ?? ["", ""];

    /*rotas*/
    if (request.method ===  httpMethods.GET && baseUrl === Routes.LIST) {
       await getListEpisodes(request, response);
    }

    if (request.method === httpMethods.GET && baseUrl === Routes.EsPISODES) {
        await getFilerEpisodes(request, response);
    }
}
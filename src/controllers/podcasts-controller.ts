import { IncomingMessage, ServerResponse } from 'http'

import { servicesListEpisodes } from '../services/list-episodes-services'
import { serviceFilterEpisodes } from '../services/filter-episodeos-service';

import { contenttype } from '../utils/content-type';
import { PodcastTransferModel } from '../models/filter-podcast-models';

export const getListEpisodes = async (
    req: IncomingMessage, 
    res: ServerResponse
) => {
    const Content: PodcastTransferModel = await servicesListEpisodes();

    res.writeHead(Content.statusCode, { 'Content-Type': contenttype.JSON })
    res.write(JSON.stringify(Content.body));
    res.end();
};

export const getFilerEpisodes = async(
  req: IncomingMessage, 
  res: ServerResponse
) => {
  
  
  // Aqui você pode extrair parâmetros da query string, se necessário
  const Content : PodcastTransferModel = await serviceFilterEpisodes(req.url);

  res.writeHead(Content.statusCode, { 'Content-Type': contenttype.JSON });
  res.write(JSON.stringify(Content.body));
  res.end();
}
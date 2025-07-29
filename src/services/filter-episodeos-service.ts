
import { repositoryPodcast } from "../repositories/podcasts-repository";
import { PodcastTransferModel } from "../models/filter-podcast-models";
import { statuscodes } from "../utils/status-code";



export const serviceFilterEpisodes = async (
    podcastName: string | undefined
): Promise<PodcastTransferModel> => {
    //define a interface de retorno
    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: [],
    };
    
    //buscando os dados
    const queryString = podcastName?.split("?p=")[1] || "";
    const data = await repositoryPodcast(queryString);
     
    //verificando se o retorno é vazio
    if(data.length !== 0) {
        responseFormat.statusCode = statuscodes.OK;
    } else {
        responseFormat.statusCode = statuscodes.NoContent;
    }
    responseFormat.body = data;

    return responseFormat;
}
import { PodcastTransferModel } from "../models/filter-podcast-models";
import { repositoryPodcast } from "../repositories/podcasts-repository";
import { statuscodes } from "../utils/status-code";


export const servicesListEpisodes = async (): Promise<PodcastTransferModel> => {
    let responseFormat: PodcastTransferModel = {
            statusCode: 0,
            body: [],
    };
    
    const data = await repositoryPodcast();

    responseFormat.statusCode = data.length !== 0 ? statuscodes.OK : statuscodes.NoContent;

    responseFormat.body = data;

    return responseFormat;
}
import { CoverOfTrack } from "./track-components/CoverOfTrack.js";
import { TrackInfo } from "./track-components/TrackInfo.js";
import {createElementWithClass} from "../../../../helpers.js"



export function createOneTrack(inputTrackForRendering) {
    const container = createElementWithClass('li', 'track');

    const createCoverOfTrack = CoverOfTrack(inputTrackForRendering);
    container.append(createCoverOfTrack);

    const createTrackInfo = TrackInfo(inputTrackForRendering);
    container.append(createTrackInfo);

    return container;
};


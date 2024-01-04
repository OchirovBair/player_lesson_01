import { TrackTitle } from "./track-info-components/TrackTitle.js";
import { AudioOfTrack } from "./track-info-components/AudioOfTrack.js";
import {createElementWithClass} from "../../../../../helpers.js";
// import {totalDuration} from "../../../../../../helpers.js"

export function TrackInfo(inputData) {
    const createTrackInfo = createElementWithClass('div', 'trackInfo');

    const createTrackTitle = TrackTitle(inputData);
    createTrackInfo.append(createTrackTitle);

    const createAudioOfTrack = AudioOfTrack(inputData); //totalDuration в скобки вторым аргументом
    createTrackInfo.append(createAudioOfTrack);

    return createTrackInfo;
}
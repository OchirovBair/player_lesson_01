import { createElementWithClass } from "../../../helpers.js";
import { createOneTrack } from "./track/createOneTrack.component.js";

export function Tracklist(inputTrackForRendering) {

    const tracksContainer = createElementWithClass('ul', 'tracklist');

    inputTrackForRendering.tracks.forEach(track => {
        const renderOneTrack = createOneTrack(track);
        tracksContainer.append(renderOneTrack);
    });

    return tracksContainer;
};
import { createElementWithClass } from "../../../helpers.js";
import { randerOneTrack } from "./randerTrack.component.js";

export function renderTracklist(inputTrackForRendering, areaOfPlaylist) {

    const tracksContainer = createElementWithClass('ul', 'tracklist');
    areaOfPlaylist.append(tracksContainer);

    inputTrackForRendering.tracks.forEach(track => {
        randerOneTrack(track, tracksContainer)
    });
};
import { createElementWithClass } from "../../../helpers.js";
import {CoverPlaylist} from "./header-components/CoverPlaylist.js";
import {PlaylistText} from "./header-components/PlaylistText.js";

export function PlaylistHeader(inputPlaylistForRendering) {
    const container = createElementWithClass('div', 'headContainerOfPlaylist');

    const createCoverPlaylist = CoverPlaylist(inputPlaylistForRendering);
    container.append(createCoverPlaylist);

    const createPlaylistText = PlaylistText(inputPlaylistForRendering)
    container.append(createPlaylistText);

    return container;
};



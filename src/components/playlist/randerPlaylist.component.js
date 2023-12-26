import { renderTracklist } from "./tracks/randerTracks.component.js";
import { renderPlaylistHeader } from "./header/randerHeader.components.js"; 
import { createElementWithClass } from "../../helpers.js";

export function renderPlaylist(playlistForRendering) {
    const areaForPlaylists = document.getElementById('main')
    const personalAreaOfPlaylist = createElementWithClass('div', 'playlist')
    areaForPlaylists.append(personalAreaOfPlaylist);

    renderPlaylistHeader(playlistForRendering, personalAreaOfPlaylist);
    renderTracklist(playlistForRendering, personalAreaOfPlaylist);
};

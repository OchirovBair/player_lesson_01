import { Tracklist } from "./tracks/createTracks.component.js";
import { PlaylistHeader } from "./header/createHeader.components.js"; 
import { createElementWithClass } from "../../helpers.js";

export function renderPlaylist(playlistForRendering) {
    const areaForPlaylists = document.getElementById('main')
    const personalAreaOfPlaylist = createElementWithClass('div', 'playlist')
    areaForPlaylists.append(personalAreaOfPlaylist);

    const createPlaylistHeader = PlaylistHeader(playlistForRendering);
    const createTracklist = Tracklist(playlistForRendering);
    
    personalAreaOfPlaylist.append(createPlaylistHeader);
    personalAreaOfPlaylist.append(createTracklist);
};

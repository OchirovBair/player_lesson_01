import { renderTrack } from "./tracks/randerTracks.component.js";
import { renderPlaylistHeader } from "./header/randerHeader.components.js"; 

export function renderPlaylist(playlistForRendering) {
    renderPlaylistHeader(playlistForRendering, playlistForRendering.className);
    for (let i = 0; i < playlistForRendering.tracks.length; i++) {
        renderTrack(playlistForRendering.tracks[i], playlistForRendering.className);
    }
}




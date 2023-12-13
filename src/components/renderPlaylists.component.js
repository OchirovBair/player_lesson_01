import { renderPlaylist } from "./playlist/randerplaylist.component.js";

export function renderPlaylists (inPutPlaylist) {
    for (let i = 0; i < inPutPlaylist.length; i++) {
        const playlist = inPutPlaylist[i];
        renderPlaylist(playlist);
    }
};


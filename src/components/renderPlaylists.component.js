import { renderPlaylist } from "./playlist/randerPlaylist.component.js";

export function renderPlaylists (inPutPlaylist) {
    for (let i = 0; i < inPutPlaylist.length; i++) {
        const playlist = inPutPlaylist[i];
        renderPlaylist(playlist);
    }
};


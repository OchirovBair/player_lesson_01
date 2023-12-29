import {createElementWithClass} from "../../../../helpers.js";

export function CoverPlaylist(data) {
    const coverPlaylistElement = createElementWithClass('img', 'coverImageOfPlaylist');
    coverPlaylistElement.src = data.coverImageUrl;
    return coverPlaylistElement;
};

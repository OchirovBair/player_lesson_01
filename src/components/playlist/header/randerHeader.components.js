import { createElementWithClass } from "../../../helpers.js";

export function renderPlaylistHeader(inputPlaylistForRendering, areaOfPlaylist) {

    const infoContainer = createElementWithClass('div', 'infoContainer');
    areaOfPlaylist.append(infoContainer);

    const coverImageOfPlaylistElement = createElementWithClass('img', 'coverImageOfPlaylist');
    coverImageOfPlaylistElement.src = inputPlaylistForRendering.coverImageUrl;
    infoContainer.append(coverImageOfPlaylistElement);

    const textContainer = createElementWithClass('div', 'textContainer');
    infoContainer.append(textContainer);

    const headerOfPlaylistElement = createElementWithClass('h3', 'headerOfPlaylist');
    headerOfPlaylistElement.append(inputPlaylistForRendering.header);
    textContainer.append(headerOfPlaylistElement);

    const titleOfPlaylistElement = createElementWithClass('h2', 'titleOfPlaylist');
    titleOfPlaylistElement.append(inputPlaylistForRendering.title);
    textContainer.append(titleOfPlaylistElement);

    const lenghtOfTracksElement = Math.round(inputPlaylistForRendering.info.lenghtOfTracksInSeconds / 60) + 'm' + ' ' + inputPlaylistForRendering.info.lenghtOfTracksInSeconds % 60 + 's';

    const tracksCountElement = createElementWithClass('span', 'tracksCount');
    tracksCountElement.textContent = inputPlaylistForRendering.info.tracksCount + ' tracks, ' + lenghtOfTracksElement;
    textContainer.append(tracksCountElement);

    const artistsInPlaylistelement = createElementWithClass('span', 'artistsInPlaylist');
    const arr = inputPlaylistForRendering.tracks.slice(0,3);
    const artists = arr.map((ele) => ele.nameOfArtist).join(', ');
    artistsInPlaylistelement.append(artists, ' and others');
    textContainer.append(artistsInPlaylistelement);
};


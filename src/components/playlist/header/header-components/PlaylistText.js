import {createElementWithClass} from "../../../../helpers.js";
import {secondsToMinutesAndSeconds} from "../../../../helpers.js";

export function PlaylistText(data) {
    const container = createElementWithClass('div', 'textContainer');
    
    const headerOfPlaylistElement = createElementWithClass('h3', 'headerOfPlaylist');
    headerOfPlaylistElement.append(data.header);
    container.append(headerOfPlaylistElement);

    const titleOfPlaylistElement = createElementWithClass('h2', 'titleOfPlaylist');
    titleOfPlaylistElement.append(data.title);
    container.append(titleOfPlaylistElement);

    const lengthOfTracksInSeconds = secondsToMinutesAndSeconds(data.info.lengthOfTracksInSeconds);

    const tracksCountElement = createElementWithClass('span', 'tracksCount');
    tracksCountElement.textContent = data.info.tracksCount + ' tracks, ' + lengthOfTracksInSeconds;
    container.append(tracksCountElement);

    const artistsInPlaylistElement = createElementWithClass('span', 'artistsInPlaylist');
    const arr = data.tracks.slice(0,3);
    const artists = arr.map((ele) => ele.nameOfArtist).join(', ');
    artistsInPlaylistElement.append(artists, ' and others');
    container.append(artistsInPlaylistElement);

    return container;
}

import {createElementWithClass} from "../../../../../../helpers.js"

export function TrackTitle(inputData) {
    const trackTitleElement = createElementWithClass('span', 'trackTitle');

    if (inputData.isHot) {
        const hotMarkElement = '🔥';
        trackTitleElement.append(hotMarkElement);
    };

    const trackElement = createElementWithClass('span', 'fullTrackName');
    const artistNameElement = createElementWithClass('span', 'artistName');
    const trackNameElement = createElementWithClass('span', 'trackName');
    artistNameElement.append(inputData.nameOfArtist);
    trackNameElement.append(inputData.nameOfTrack);

    trackElement.append(artistNameElement, ' - ', trackNameElement);
    trackTitleElement.append(trackElement);
    return trackTitleElement;
}
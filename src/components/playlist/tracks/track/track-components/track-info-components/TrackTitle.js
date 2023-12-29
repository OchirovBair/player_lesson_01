import {createElementWithClass} from "../../../../../../helpers.js"

export function TrackTitle(inputData) {
    const trackTitleElement = createElementWithClass('span', 'trackTitle');

    if (inputData.isHot) {
        const hotMarkElement = '🔥';
        trackTitleElement.append(hotMarkElement);
    };

    const trackElement = createElementWithClass('span', 'nameTrack');

    trackElement.append(inputData.nameOfArtist + ' - ' + inputData.nameOfTrack);
    trackTitleElement.append(trackElement);
    return trackTitleElement;
}
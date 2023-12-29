import {createElementWithClass} from "../../../../../helpers.js"

export function CoverOfTrack(inputData) {
    const coverElement = createElementWithClass('img', 'coverTrack');
    coverElement.src = inputData.trackCoverImageUrl;
    return coverElement;
}
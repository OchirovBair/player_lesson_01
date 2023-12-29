import {createElementWithClass} from "../../../../../../helpers.js"

export function AudioOfTrack(inputData) {
    const createAudioElement = createElementWithClass('audio', 'audioTrack');
    createAudioElement.controls = true;
    createAudioElement.src = inputData.audioUrl;
    return createAudioElement;
}
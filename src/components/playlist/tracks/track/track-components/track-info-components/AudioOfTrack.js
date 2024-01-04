import {createElementWithClass} from "../../../../../../helpers.js";


export function AudioOfTrack(inputData, callback) {
    const createAudioElement = createElementWithClass('audio', 'audioTrack');
    createAudioElement.controls = true;
    createAudioElement.src = inputData.audioUrl;
    // audioElement.onloadedmetadata = function () {
    //     const trackDuration = audioElement.duration;
    //     callback(trackDuration);
    // };
    return createAudioElement;
}



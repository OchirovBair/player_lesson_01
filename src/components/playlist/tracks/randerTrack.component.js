import { createElementWithClass } from "../../../helpers.js";

export function randerOneTrack(inputTrackForRendering, parentElement) {
    const oneTrackContainer = createElementWithClass('li', 'track')
    const coverElement = createElementWithClass('img', 'coverTrack');
    coverElement.src = inputTrackForRendering.trackCoverImageUrl;
    oneTrackContainer.append(coverElement);
    
    const trackInfo = createElementWithClass('div', 'trackInfo');
    const trackTitle = createElementWithClass('span', 'trackTitle')
    
    if (inputTrackForRendering.isHot) {
        const hotMarkElement = '🔥';
        trackTitle.append(hotMarkElement);
    };
    
    const trackElement = createElementWithClass('span', 'nameTrack');
    trackElement.append(inputTrackForRendering.nameOfArtist + ' - ' + inputTrackForRendering.nameOfTrack);
    trackTitle.append(trackElement);
    trackInfo.append(trackTitle)
    
    const audioElement = createElementWithClass('audio', 'audioTrack');
    audioElement.controls = true;
    audioElement.src = inputTrackForRendering.audioUrl;
    trackInfo.append(audioElement);
    
    oneTrackContainer.append(trackInfo)
    parentElement.append(oneTrackContainer);
};

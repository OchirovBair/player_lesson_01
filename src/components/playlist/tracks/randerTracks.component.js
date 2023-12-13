export function renderTrack(inputTrackForRendering, inPutClassName) {

    const trackAreaElement = document.querySelector('.' + inPutClassName);

    const trackContainer = document.createElement('div');
    trackAreaElement.append(trackContainer);

    const coverElement = document.createElement('img');
    coverElement.src = inputTrackForRendering.trackCoverImageUrl;
    trackContainer.append(coverElement);

    if (inputTrackForRendering.isHot) {
        const hotMarkElement = '🔥';
        trackContainer.append(hotMarkElement);
    };

    const trackElement = document.createElement('span');
    trackElement.append(inputTrackForRendering.nameOfArtist + ' - ' + inputTrackForRendering.nameOfTrack);
    trackContainer.append(trackElement);

    const audioElement = document.createElement('audio');
    audioElement.controls = true;
    audioElement.src = inputTrackForRendering.audioUrl;
    trackContainer.append(audioElement);

};
export function renderPlaylistHeader(inputPlaylistForRendering, inPutClassName) {

    const infoAreaElement = document.querySelector('.' + inPutClassName);

    const headerOfPlaylistElement = document.createElement('p');
    headerOfPlaylistElement.append(inputPlaylistForRendering.header);
    infoAreaElement.append(headerOfPlaylistElement);

    const titleOfPlaylistElement = document.createElement('h2');
    titleOfPlaylistElement.append(inputPlaylistForRendering.title);
    infoAreaElement.append(titleOfPlaylistElement);

    const coverImageOfPlaylistElement = document.createElement('img');
    coverImageOfPlaylistElement.src = inputPlaylistForRendering.coverImageUrl;
    infoAreaElement.append(coverImageOfPlaylistElement);

    const tracksCountElement = document.createElement('p');
    tracksCountElement.textContent = inputPlaylistForRendering.info.tracksCount + ' tracks';
    infoAreaElement.append(tracksCountElement);

    const lenghtOfTracksElement = document.createElement('p');
    lenghtOfTracksElement.textContent = Math.round(inputPlaylistForRendering.info.lenghtOfTracksInSeconds / 60) + 'm' + ' ' + inputPlaylistForRendering.info.lenghtOfTracksInSeconds % 60 + 's';
    infoAreaElement.append(lenghtOfTracksElement);

};
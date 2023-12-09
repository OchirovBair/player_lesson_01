// data
const playlist1 = {
    header: 'Playlist',
    title: 'Hip-Hop Hits',
    coverImageUrl: './image/playlist1/coverList1.png',
    info: {
        tracksCount: 4,
        lenghtOfTracksInSeconds: 733,
        descritionOfListArtists: ['Eminem', '50cent', 'Lloyd Banks', 'and others']
    },
    tracks: [
        {
            trackCoverImageUrl: './image/playlist1/coverEminem.png',
            nameOfArtist: 'Eminem',
            nameOfTrack: 'Rap God',
            isHot: true,
            audioUrl: './tracks/playlist1/Eminem_Rap_God.mp3'
        },
        {
            trackCoverImageUrl: './image/playlist1/cover50cent.png',
            nameOfArtist: '50cent',
            nameOfTrack: 'In Da Club',
            isHot: false,
            audioUrl: './tracks/playlist1/50_Cent_In_Da_Club.mp3',
        },
        {
            trackCoverImageUrl: './image/playlist1/coverDMX.png',
            nameOfArtist: 'DMX',
            nameOfTrack: "X Gon' Give It To Ya",
            isHot: true,
            audioUrl: './tracks/playlist1/DMX_X_Gon_Give_It_To_Ya.mp3',
        },
        {
            trackCoverImageUrl: './image/playlist1/coverEm&50cent.png',
            nameOfArtist: 'Eminem, 50cent, Cashis, Lloyd Banks',
            nameOfTrack: "You Don't Know",
            isHot: false,
            audioUrl: './tracks/playlist1/eminem_50cent_you_dont_know.mp3',
        },
    ]

}


// render

renderPlaylist(playlist1);

function renderPlaylist(playlistForRendering) {
    renderPlaylistHeader(playlistForRendering);
    renderTrack(playlistForRendering.tracks[0]);
    renderTrack(playlistForRendering.tracks[1]);
    renderTrack(playlistForRendering.tracks[2]);
    renderTrack(playlistForRendering.tracks[3]);
}


function renderPlaylistHeader(inputPlaylistForRendering) {

    let infoAreaElement = document.createElement('div');
    document.body.append(infoAreaElement);

    let headerOfPlaylistElement = document.createElement('p');
    headerOfPlaylistElement.append(inputPlaylistForRendering.header);
    infoAreaElement.append(headerOfPlaylistElement);

    let titleOfPlaylistElement = document.createElement('h1');
    titleOfPlaylistElement.append(inputPlaylistForRendering.title);
    infoAreaElement.append(titleOfPlaylistElement);

    let coverImageOfPlaylistElement = document.createElement('img');
    coverImageOfPlaylistElement.src = inputPlaylistForRendering.coverImageUrl;
    infoAreaElement.append(coverImageOfPlaylistElement);

    let tracksCountElement = document.createElement('p');
    tracksCountElement.textContent = inputPlaylistForRendering.info.tracksCount + ' tracks';
    infoAreaElement.append(tracksCountElement);

    let lenghtOfTracksElement = document.createElement('p');
    lenghtOfTracksElement.textContent = Math.round(inputPlaylistForRendering.info.lenghtOfTracksInSeconds / 60) + 'm' + ' ' + inputPlaylistForRendering.info.lenghtOfTracksInSeconds % 60 + 's';
    infoAreaElement.append(lenghtOfTracksElement);

};

function renderTrack(inputTrackForRendering) {

    let trackElement = document.createElement('div');
    trackElement.append(inputTrackForRendering.nameOfArtist + ' - ' + inputTrackForRendering.nameOfTrack);
    document.body.append(trackElement);

    let coverElement = document.createElement('img');
    coverElement.src = inputTrackForRendering.trackCoverImageUrl;
    document.body.append(coverElement);

    let audioElement = document.createElement('audio');
    audioElement.controls = true;
    audioElement.src = inputTrackForRendering.audioUrl;
    document.body.append(audioElement);

};










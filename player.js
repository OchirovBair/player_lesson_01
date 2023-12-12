// data
const playlist1 = {
    className: 'first',
    header: 'Playlist',
    title: 'Hip-Hop Hits',
    coverImageUrl: './image/imagesOfPlayList1/coverList1.png',
    info: {
        tracksCount: 4,
        lenghtOfTracksInSeconds: 942,
        descritionOfListArtists: ['Eminem', '50cent', 'Lloyd Banks', 'and others']
    },
    tracks: [
        {
            trackCoverImageUrl: './image/imagesOfPlayList1/coverEminem.png',
            nameOfArtist: 'Eminem',
            nameOfTrack: 'Rap God',
            isHot: true,
            audioUrl: './tracks/playlist1/Eminem_Rap_God.mp3'
        },
        {
            trackCoverImageUrl: './image/imagesOfPlayList1/cover50cent.png',
            nameOfArtist: '50cent',
            nameOfTrack: 'In Da Club',
            isHot: false,
            audioUrl: './tracks/playlist1/50_Cent_In_Da_Club.mp3',
        },
        {
            trackCoverImageUrl: './image/imagesOfPlayList1/coverDMX.png',
            nameOfArtist: 'DMX',
            nameOfTrack: "X Gon' Give It To Ya",
            isHot: true,
            audioUrl: './tracks/playlist1/DMX_X_Gon_Give_It_To_Ya.mp3',
        },
        {
            trackCoverImageUrl: './image/imagesOfPlayList1/coverEm&50cent.png',
            nameOfArtist: 'Eminem, 50cent, Cashis, Lloyd Banks',
            nameOfTrack: "You Don't Know",
            isHot: false,
            audioUrl: './tracks/playlist1/eminem_50cent_you_dont_know.mp3',
        },
    ]

}

const playlist2 = {
    className: 'second',
    header: 'Playlist',
    title: 'Rap Hits 1990s',
    coverImageUrl: './image/imagesOfPlayList2/coverList2.png',
    info: {
        tracksCount: 4,
        lenghtOfTracksInSeconds: 1081,
        descritionOfListArtists: ['Vanila Ice', 'MC Hummer', 'Public Enemy', 'and others']
    },
    tracks: [
        {
            trackCoverImageUrl: './image/imagesOfPlayList2/coverPublicEnemy.png',
            nameOfArtist: 'Public Enemy',
            nameOfTrack: 'Fight The Power',
            isHot: true,
            audioUrl: './tracks/playlist2/Public_Enemy_Fight_The_Power.mp3'
        },
        {
            trackCoverImageUrl: './image/imagesOfPlayList2/coverVanilaIce.png',
            nameOfArtist: 'Vanila Ice',
            nameOfTrack: 'Ice Ice Baby',
            isHot: false,
            audioUrl: './tracks/playlist2/Vanila_Ice_Ice_Baby.mp3',
        },
        {
            trackCoverImageUrl: './image/imagesOfPlayList2/coverMcHummer.png',
            nameOfArtist: 'MC Hummer',
            nameOfTrack: "You Can't Touch This",
            isHot: true,
            audioUrl: "./tracks/playlist2/Mc_Hammer_You_Can't_Touch_This.mp3",
        },
        {
            trackCoverImageUrl: './image/imagesOfPlayList2/coverBrandNubian.png',
            nameOfArtist: 'Brand Nubian',
            nameOfTrack: "Brand Nubian",
            isHot: false,
            audioUrl: './tracks/playlist2/Brand_Nubian_Brand_Nubian.mp3',
        },
    ]
}

const imgSource = './image/hotMark.svg';

// render
renderPlaylist(playlist1);
renderPlaylist(playlist2);

// functions
function renderPlaylist(playlistForRendering) {
    renderPlaylistHeader(playlistForRendering, playlistForRendering.className);
    playlistForRendering.tracks.forEach(track=>{
        renderTrack(track,playlistForRendering.className)
    })
}


function renderPlaylistHeader(inputPlaylistForRendering, inPutClassName) {

    const infoAreaElement = document.querySelector('.' + inPutClassName);

    const headerOfPlaylistElement = document.createElement('p');
    headerOfPlaylistElement.append(inputPlaylistForRendering.header);
    infoAreaElement.append(headerOfPlaylistElement);

    const titleOfPlaylistElement = document.createElement('h2');
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

function renderTrack(inputTrackForRendering, inPutClassName) {

    let trackAreaElement = document.querySelector('.' + inPutClassName);

    let trackContainer = document.createElement('div');
    trackAreaElement.append(trackContainer);

    let coverElement = document.createElement('img');
    coverElement.src = inputTrackForRendering.trackCoverImageUrl;
    trackContainer.append(coverElement);

    if (inputTrackForRendering.isHot) {
        let hotMarkElement = document.createElement('img');
        hotMarkElement.src = imgHotSource;
        trackContainer.append(hotMarkElement);
    };

    let trackElement = document.createElement('span');
    trackElement.append(inputTrackForRendering.nameOfArtist + ' - ' + inputTrackForRendering.nameOfTrack);
    trackContainer.append(trackElement);

    let audioElement = document.createElement('audio');
    audioElement.controls = true;
    audioElement.src = inputTrackForRendering.audioUrl;
    trackContainer.append(audioElement);

};










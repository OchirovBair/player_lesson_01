// data

export const playlists = [
    {
        header: 'Playlist',
        title: 'Hip-Hop Hits',
        coverImageUrl: './image/imagesOfPlayList1/coverList1.png',
        info: {
            tracksCount: 4,
            lengthOfTracksInSeconds: 942,
        },
        tracks: [{
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
    },
    {
        header: 'Playlist',
        title: 'Rap Hits 1990s',
        coverImageUrl: './image/imagesOfPlayList2/coverList2.png',
        info: {
            tracksCount: 4,
            lengthOfTracksInSeconds: 1081,
        },
        tracks: [{
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
]
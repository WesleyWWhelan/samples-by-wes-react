// https://github.com/lhz516/react-h5-audio-player

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Player = () => (
    <AudioPlayer
      autoPlay
      src="http://example.com/audio.mp3"
      onPlay={e => console.log("onPlay")}
      // other props here
    />
);
  
ReactDOM.render(Player,document.getElementById('samples'))


class Sample{
    constructor( link, instrument, genre, produced = True, feelings = None, key=None, bpm=None) {
        this.link = link //link
        this.key = key //key
        this.instrument = instrument //instrument
        this.produced = produced //produced true or false
        this.feelings = feelings //list of how what kind of sound comes with the sample
        this.genre = genre //genre
        this.bpm = bpm //bpm

    }
}

let one = new Sample('https://firebasestorage.googleapis.com/v0/b/samples-by-wes.appspot.com/o/102%20Emaj7%20-%20Fingerpicking%20-%20Dry.wav?alt=media&token=e5d1a88b-ca2b-4010-883f-d381f87829bc',
                'Guitar','dance pop',False,['nostalgia','melancholy','sad'],'E Major','102')
let two = new Sample('https://firebasestorage.googleapis.com/v0/b/samples-by-wes.appspot.com/o/102%20Emaj7%20-%20Fingerpicking%20-%20Wet.wav?alt=media&token=7a53cfac-79dc-425c-a6d2-a02134e67327',
                'Guitar','dance pop',True,['nostalgia','melancholy','sad'],'E Major','102')
let three = new Sample('https://firebasestorage.googleapis.com/v0/b/samples-by-wes.appspot.com/o/102%20Emaj7%20-%20Strum%20(muted)%20-%20Dry.wav?alt=media&token=1128900a-8037-4815-a669-5b61da3ae230',
                'Guitar','dance pop',False,['nostalgia','melancholy','sad'],'E Major','102')
let four = new Sample('https://firebasestorage.googleapis.com/v0/b/samples-by-wes.appspot.com/o/102%20Emaj7%20-%20Strum%20(muted)%20-%20Wet.wav?alt=media&token=58154029-10d1-4bcc-a5ce-79c656d73b74',
                'Guitar','dance pop',True,['nostalgia','melancholy','sad'],'E Major','102')
let five = new Sample('https://firebasestorage.googleapis.com/v0/b/samples-by-wes.appspot.com/o/102%20Emaj7%20-%20Strum%20(unmute)%20-%20Dry.wav?alt=media&token=22cd5a30-ab5c-44df-a39f-fbbc572f0a95',
                'Guitar','dance pop',False,['nostalgia','melancholy','sad'],'E Major','102')
let six = new Sample('https://firebasestorage.googleapis.com/v0/b/samples-by-wes.appspot.com/o/102%20Emaj7%20-%20Strum%20(unmute)%20-%20Wet.wav?alt=media&token=923ca6b5-384d-452a-b487-571e775ac1f0',
                'Guitar','dance pop',True,['nostalgia','melancholy','sad'],'E Major','102')
let seven = new Sample('https://firebasestorage.googleapis.com/v0/b/samples-by-wes.appspot.com/o/122.5%20Dminor%20organ%3Abass.wav?alt=media&token=118f2255-f40f-439c-bfad-f5ff18ae0d99',
                'Organ','Trap',True,['creepy','dark'],'D Minor','122.5')
let eight = new Sample('https://firebasestorage.googleapis.com/v0/b/samples-by-wes.appspot.com/o/145%20Eminor%20rev%20organ%3Apad.wav?alt=media&token=453373e4-a6c2-4c93-adb6-6e9ddff13d18',
                'Organ','RnB',True,['hopeful','bright'],'E Minor','145')
let nine = new Sample('https://firebasestorage.googleapis.com/v0/b/samples-by-wes.appspot.com/o/145%20F%23minor%20dark%20string%3Apiano%20loop.wav?alt=media&token=6f57ac56-8f2f-4911-b3de-65fc6396012c',
                'Piano','Trap',True,['dark','creepy'],'F# Minor','145')
let nine = new Sample('https://firebasestorage.googleapis.com/v0/b/samples-by-wes.appspot.com/o/149%20Cmajor%20double%20time%20piano%20arp%2C%20dark.wav?alt=media&token=f2322d57-ae2b-47c3-a458-234eef831243',
                'Piano','RnB',True,['melancholy','nostalgia','hopeful'],'C Major','149')
let ten = new Sample('https://firebasestorage.googleapis.com/v0/b/samples-by-wes.appspot.com/o/89%20Eb%20minor%20piano%20and%20drums%20rnb.wav?alt=media&token=a9349f10-f434-4deb-a5f9-f0d3c6f14a0b',
                'Piano','RnB',True,['melancholy','nostalgia','hopeful'],'Eb Minor','89')
let eleven = new Sample('https://firebasestorage.googleapis.com/v0/b/samples-by-wes.appspot.com/o/95%20F%23%20Dark%20guitar.wav?alt=media&token=ae999509-82c8-44c9-887e-d031d8404830',
                'Guitar','Trap',True,['dark','creepy'],'F# Major','95')

let Samples = [
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    ten,
    eleven
]



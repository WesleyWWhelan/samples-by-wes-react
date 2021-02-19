import './App.css';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

class Sample{
  constructor( link, instrument, genre, produced = true, feelings = null, key=null, bpm=null) {
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
              'Guitar','dance pop',false,['nostalgia','melancholy','sad'],'E Major','102')
let two = new Sample('https://firebasestorage.googleapis.com/v0/b/samples-by-wes.appspot.com/o/102%20Emaj7%20-%20Fingerpicking%20-%20Wet.wav?alt=media&token=7a53cfac-79dc-425c-a6d2-a02134e67327',
              'Guitar','dance pop',true,['nostalgia','melancholy','sad'],'E Major','102')
let three = new Sample('https://firebasestorage.googleapis.com/v0/b/samples-by-wes.appspot.com/o/102%20Emaj7%20-%20Strum%20(muted)%20-%20Dry.wav?alt=media&token=1128900a-8037-4815-a669-5b61da3ae230',
              'Guitar','dance pop',false,['nostalgia','melancholy','sad'],'E Major','102')
let four = new Sample('https://firebasestorage.googleapis.com/v0/b/samples-by-wes.appspot.com/o/102%20Emaj7%20-%20Strum%20(muted)%20-%20Wet.wav?alt=media&token=58154029-10d1-4bcc-a5ce-79c656d73b74',
              'Guitar','dance pop',true,['nostalgia','melancholy','sad'],'E Major','102')
let five = new Sample('https://firebasestorage.googleapis.com/v0/b/samples-by-wes.appspot.com/o/102%20Emaj7%20-%20Strum%20(unmute)%20-%20Dry.wav?alt=media&token=22cd5a30-ab5c-44df-a39f-fbbc572f0a95',
              'Guitar','dance pop',false,['nostalgia','melancholy','sad'],'E Major','102')
let six = new Sample('https://firebasestorage.googleapis.com/v0/b/samples-by-wes.appspot.com/o/102%20Emaj7%20-%20Strum%20(unmute)%20-%20Wet.wav?alt=media&token=923ca6b5-384d-452a-b487-571e775ac1f0',
              'Guitar','dance pop',true,['nostalgia','melancholy','sad'],'E Major','102')
let seven = new Sample('https://firebasestorage.googleapis.com/v0/b/samples-by-wes.appspot.com/o/122.5%20Dminor%20organ%3Abass.wav?alt=media&token=118f2255-f40f-439c-bfad-f5ff18ae0d99',
              'Organ','Trap',true,['creepy','dark'],'D Minor','122.5')
let eight = new Sample('https://firebasestorage.googleapis.com/v0/b/samples-by-wes.appspot.com/o/145%20Eminor%20rev%20organ%3Apad.wav?alt=media&token=453373e4-a6c2-4c93-adb6-6e9ddff13d18',
              'Organ','RnB',true,['hopeful','bright'],'E Minor','145')
let nine = new Sample('https://firebasestorage.googleapis.com/v0/b/samples-by-wes.appspot.com/o/145%20F%23minor%20dark%20string%3Apiano%20loop.wav?alt=media&token=6f57ac56-8f2f-4911-b3de-65fc6396012c',
              'Piano','Trap',true,['dark','creepy'],'F# Minor','145')
let ten = new Sample('https://firebasestorage.googleapis.com/v0/b/samples-by-wes.appspot.com/o/149%20Cmajor%20double%20time%20piano%20arp%2C%20dark.wav?alt=media&token=f2322d57-ae2b-47c3-a458-234eef831243',
              'Piano','RnB',true,['melancholy','nostalgia','hopeful'],'C Major','149')
let eleven = new Sample('https://firebasestorage.googleapis.com/v0/b/samples-by-wes.appspot.com/o/89%20Eb%20minor%20piano%20and%20drums%20rnb.wav?alt=media&token=a9349f10-f434-4deb-a5f9-f0d3c6f14a0b',
              'Piano','RnB',true,['melancholy','nostalgia','hopeful'],'Eb Minor','89')
let twelve = new Sample('https://firebasestorage.googleapis.com/v0/b/samples-by-wes.appspot.com/o/95%20F%23%20Dark%20guitar.wav?alt=media&token=ae999509-82c8-44c9-887e-d031d8404830',
              'Guitar','Trap',true,['dark','creepy'],'F# Major','95')

let thirteen = new Sample('https://firebasestorage.googleapis.com/v0/b/samples-by-wes.appspot.com/o/79%20Cminor-choppy%20strums%20-%20dry.wav?alt=media&token=5178feb7-c90d-4cf2-bef4-a0b7eb2a9c18',
              'Guitar','dance pop',false,['nostalgia','melancholy','sad'],'C Minor','79')
let fourteen = new Sample('https://firebasestorage.googleapis.com/v0/b/samples-by-wes.appspot.com/o/79%20Cminor-choppy%20strums-wet.wav?alt=media&token=97058ff5-88d9-48b9-b383-c19c8a2edda3',
              'Guitar','dance pop',true,['nostalgia','melancholy','sad'],'C Minor','79')
let fifteen = new Sample('https://firebasestorage.googleapis.com/v0/b/samples-by-wes.appspot.com/o/79%20Cminor-fingerpicking-dry.wav?alt=media&token=13376dbe-d56e-4ea8-9bd8-32e5bd9cca46',
              'Guitar','dance pop',false,['nostalgia','melancholy','sad'],'C Minor','79')
let sixteen = new Sample('https://firebasestorage.googleapis.com/v0/b/samples-by-wes.appspot.com/o/79%20Cminor-fingerpicking-wet.wav?alt=media&token=f8a6d6ea-02f8-4cfc-bd67-0536a3f11207',
              'Guitar','dance pop',true,['nostalgia','melancholy','sad'],'C Minor','79')
let seventeen = new Sample('https://firebasestorage.googleapis.com/v0/b/samples-by-wes.appspot.com/o/79%20Cminor-strums-dry.wav?alt=media&token=0e5da17b-29c6-4663-a388-e51eea5713b6',
              'Guitar','dance pop',false,['nostalgia','melancholy','sad'],'C Minor','79')
let eighteen = new Sample('https://firebasestorage.googleapis.com/v0/b/samples-by-wes.appspot.com/o/79%20Cminor-strums-wet.wav?alt=media&token=7fb290d5-74b7-49d3-abae-c5a299f05b33',
              'Guitar','dance pop',true,['nostalgia','melancholy','sad'],'C Minor','79')

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
  eleven,
  twelve,
  thirteen,
  fourteen,
  fifteen,
  sixteen,
  seventeen,
  eighteen
]


function App() {
  return (
    <div className='App'>
      {/* <section>
      <header>
          <div style='padding-top:30px;'>
          <a id = "page_title" href='#'> 
              <img src='./files/images/logo1.png'>
          </a>
          <a class='link' onClick='auth.signOut()' >Log Out</a>
          </div>
          <div class='sub-header'>
          <div class='sub-header-stuff'>
              <a>Guitar</a>
              <a>Vocals</a>
              <a>Chords</a>
              <a>Misc.</a>
          </div>
          </div>
      </header>
        </section> */}
      <section id="top">
        <header>
          <div className="head_container" style={{"padding-top":"30px"}}>
            <div id="page_title">
              <a className="link" style={{"-webkit-text-decoration":"none","text-decoration":"none","color":"black"}} href="/"> 
                {/* <img src='./files/images/logo1.png'> */}
                Samples by Wes
              </a>
            </div>
            <div id="linkdiv">

              <a className="link" href='#'>
                About
              </a>
            </div>  
          </div>
          <div className="sub-header">
            <div className="sub-header-stuff">
              <a>Guitar</a>
              <a>Vocals</a>
              <a>Chords</a>
              <a>All Samples</a>
            </div>
          </div>
        </header>
      </section>
      <section id="content">
        <div id="side" className="wes-container">
          <div id="sub-side" className="wes-slide">
            <ul>
              <li>
                <a id="left" href="https://soundcloud.com/wesley-whelan" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-14.333 15.524c-.405-.365-.667-.903-.667-1.512 0-.608.262-1.146.667-1.512v3.024zm1.333.476c-.243 0-.369.003-.667-.092v-3.792c.316-.101.465-.097.667-.081v3.965zm1.333 0h-.666v-3.778l.206.121c.091-.375.253-.718.461-1.023v4.68zm1.334 0h-.667v-5.378c.206-.154.426-.286.667-.377v5.755zm1.333 0h-.667v-5.905c.251-.027.328-.046.667.006v5.899zm1.333 0h-.667v-5.7l.253.123c.119-.207.261-.395.414-.572v6.149zm6.727 0h-6.06v-6.748c.532-.366 1.16-.585 1.842-.585 1.809 0 3.275 1.494 3.41 3.386 1.303-.638 2.748.387 2.748 1.876 0 1.143-.869 2.071-1.94 2.071z" /></svg>
                </a>
              </li>
              <li>
                <a id="left" target="_blank" href="https://open.spotify.com/artist/4ysdyxoSzWDnnhw91K9iDN?si=fOMNck2-QlCgycIALXeA4Q">
                  <svg width={50} height={50} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 0c2.762 0 5 2.239 5 5v14c0 2.761-2.238 5-5 5h-14c-2.761 0-5-2.239-5-5v-14c0-2.761 2.239-5 5-5h14zm-7 4c-4.418 0-8 3.582-8 8 0 4.419 3.582 8 8 8s8-3.581 8-8c0-4.418-3.582-8-8-8zm3.669 11.539c-.144.236-.451.31-.686.166-1.878-1.148-4.243-1.408-7.028-.772-.268.062-.535-.106-.597-.375-.061-.268.106-.535.375-.596 3.048-.697 5.662-.397 7.771.891.235.144.309.451.165.686zm.979-2.178c-.181.293-.565.385-.858.205-2.15-1.322-5.428-1.704-7.972-.932-.33.099-.678-.087-.778-.416-.1-.33.086-.677.416-.778 2.905-.881 6.517-.454 8.987 1.063.293.181.385.565.205.858zm.084-2.269c-2.578-1.531-6.832-1.672-9.294-.925-.395.12-.813-.103-.933-.498-.12-.396.103-.814.499-.934 2.826-.858 7.523-.692 10.492 1.07.356.211.472.671.262 1.026-.211.355-.671.472-1.026.261z" /></svg>
                </a>
              </li>
              <li>
                <a id="left" target="_blank" href="https://youtube.com/weswhelan">
                  <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} viewBox="0 0 24 24"><path d="M9.279 13.52h-.939v5.027h-.908v-5.027h-.94v-.854h2.788v.854zm5.395 1.721v2.406c0 .537-.2.954-.736.954-.296 0-.541-.108-.767-.388v.333h-.813v-5.88h.813v1.893c.183-.222.429-.405.718-.405.59 0 .785.499.785 1.087zm-.83.049c0-.146-.027-.257-.086-.333-.098-.129-.279-.143-.42-.071l-.167.132v2.703l.19.153c.132.066.324.071.413-.045.046-.061.069-.161.069-.299v-2.24zm-2.347-5.859c.229 0 .354-.183.354-.431v-2.119c0-.255-.111-.434-.371-.434-.237 0-.353.185-.353.434v2.119c.001.24.137.431.37.431zm-.733 8.07c-.099.123-.317.325-.475.325-.172 0-.215-.118-.215-.292v-3.325h-.805v3.626c0 .88.597.885 1.031.636.16-.092.315-.227.464-.403v.479h.807v-4.338h-.807v3.292zm13.236-12.501v14c0 2.761-2.238 5-5 5h-14c-2.761 0-5-2.239-5-5v-14c0-2.761 2.239-5 5-5h14c2.762 0 5 2.239 5 5zm-10.566 4.427c0 .45.137.813.592.813.256 0 .611-.133.979-.569v.503h.847v-4.554h-.847v3.457c-.104.129-.333.341-.498.341-.182 0-.226-.124-.226-.307v-3.491h-.847v3.807zm-3.177-2.621v2.233c0 .803.419 1.22 1.24 1.22.682 0 1.218-.456 1.218-1.22v-2.233c0-.713-.531-1.224-1.218-1.224-.745 0-1.24.493-1.24 1.224zm-3.155-2.806l1.135 3.67v2.504h.953v-2.504l1.11-3.67h-.969l-.611 2.468-.658-2.468h-.96zm11.564 11.667c-.014-2.978-.232-4.116-2.111-4.245-1.734-.118-7.377-.118-9.109 0-1.876.128-2.098 1.262-2.111 4.245.014 2.978.233 4.117 2.111 4.245 1.732.118 7.375.118 9.109 0 1.877-.129 2.097-1.262 2.111-4.245zm-1.011-.292v1.104h-1.542v.818c0 .325.027.607.352.607.34 0 .36-.229.36-.607v-.301h.83v.326c0 .836-.358 1.342-1.208 1.342-.771 0-1.164-.561-1.164-1.342v-1.947c0-.753.497-1.275 1.225-1.275.773-.001 1.147.491 1.147 1.275zm-.83-.008c0-.293-.062-.508-.353-.508-.299 0-.359.21-.359.508v.439h.712v-.439z" /></svg>
                </a>
              </li>
            </ul>
          </div>  
        </div> 
        <div onclick="location.href='#';" style={{"cursor":"pointer"}} className="wes-container">
          <div className="center-slide">
            <div className="sub-section2">
              <ul style={{"padding-inline-start":"0px !important","padding-bottom":"25px","-webkit-align-items":"center","-webkit-box-align":"center","-ms-flex-align":"center","align-items":"center"}}>
                <li>
                  {two.bpm} ---- {two.key}
                    <AudioPlayer
                    src={two.link}
                    onPlay={e => console.log("onPlay")}
                    // other props here
                    />
                </li>
                <li>
                  {four.bpm} ---- {four.key}
                  <AudioPlayer
                    src={four.link}
                    onPlay={e => console.log("onPlay")}
                    // other props here
                  />
                </li>
                <li>
                  {six.bpm} ---- {six.key}
                  <AudioPlayer
                    src={six.link}
                    onPlay={e => console.log("onPlay")}
                    // other props here
                  />
                </li>
                <li>
                  {seven.bpm} ---- {seven.key}
                  <AudioPlayer
                    src={seven.link}
                    onPlay={e => console.log("onPlay")}
                    // other props here
                  />
                </li>
                <li>
                  {eight.bpm} ---- {eight.key}
                  <AudioPlayer
                    src={eight.link}
                    onPlay={e => console.log("onPlay")}
                    // other props here
                  />
                </li>
                <li>
                  {nine.bpm} ---- {nine.key}
                  <AudioPlayer
                    src={nine.link}
                    onPlay={e => console.log("onPlay")}
                    // other props here
                  />
                </li>
                <li>
                  {ten.bpm} ---- {ten.key}
                  <AudioPlayer
                    src={ten.link}
                    onPlay={e => console.log("onPlay")}
                    // other props here
                  />
                </li>
                <li>
                  {eleven.bpm} ---- {eleven.key}
                  <AudioPlayer
                    src={eleven.link}
                    onPlay={e => console.log("onPlay")}
                    // other props here
                  />
                </li>
                <li>
                  {twelve.bpm} ---- {twelve.key}
                  <AudioPlayer
                    src={twelve.link}
                    onPlay={e => console.log("onPlay")}
                    // other props here
                  />
                </li>
                {/* <li>
                  {thirteen.bpm} ---- {thirteen.key}
                  <AudioPlayer
                    src={thirteen.link}
                    onPlay={e => console.log("onPlay")}
                    // other props here
                  />
                </li> */}
                <li>
                  {fourteen.bpm} ---- {fourteen.key}
                  <AudioPlayer
                    src={fourteen.link}
                    onPlay={e => console.log("onPlay")}
                    // other props here
                  />
                </li>
                {/* <li>
                  {fifteen.bpm} ---- {fifteen.key}
                  <AudioPlayer
                    src={fifteen.link}
                    onPlay={e => console.log("onPlay")}
                    // other props here
                  />
                </li> */}
                <li>
                  {sixteen.bpm} ---- {sixteen.key}
                  <AudioPlayer
                    src={sixteen.link}
                    onPlay={e => console.log("onPlay")}
                    // other props here
                  />
                </li>
                {/* <li>
                  {seventeen.bpm} ---- {seventeen.key}
                  <AudioPlayer
                    src={seventeen.link}
                    onPlay={e => console.log("onPlay")}
                    // other props here
                  />
                </li> */}
                <li>
                  {eighteen.bpm} ---- {eighteen.key}
                  <AudioPlayer
                    src={eighteen.link}
                    onPlay={e => console.log("onPlay")}
                    // other props here
                  />
                </li>
              </ul>
            </div>
            <div className="sub-section">
              <h1>Contact</h1>
              <form action="https://postmail.invotes.com/send" method="post" id="email_form">
                <input style={{"margin-bottom":"20px"}} type="text" name="extra_name" placeholder="Your Name" />
                <input style={{"margin-bottom":"20px"}} type="text" name="subject" placeholder="Subject" />
                <textarea style={{"margin-bottom":"20px"}} name="text" placeholder="Message" rows={5} defaultValue={""} />
                <input style={{"margin-bottom":"20px"}} type="hidden" name="access_token" defaultValue="9i90t9oh823vs5hewwovjrk2" />
                {/* return urls can be fully qualified -OR-
                          start with / for root relative -OR-
                          start with . for url relative */} 
                <input style={{"margin-bottom":"20px"}} type="text" name="reply_to" placeholder="Your Email (Optional)" />
                <input type="hidden" name="success_url" defaultValue=".?message=Email+Successfully+Sent%21&isError=0" />
                <input type="hidden" name="error_url" defaultValue=".?message=Email+could+not+be+sent.&isError=1" />
                {/* set the reply-to address */}
                {/* to append extra fields, use the extra_ prefix.
                          Entries will be appended to your message body. */}
                {/* <input type="text" name="extra_phone_number"
                                  placeholder="Phone Number" /> */}
                {/* to split your message into 160 chars
                          for an sms gateway */}
                {/* <input type="hidden"
                                  name="sms_format" value="true" /> */}
                <input id="submit_form" type="submit" defaultValue="Send" />
                {/* not required, but we'd appreciate it if you'd link to us somewhere on your site */}
                {/* <p>Powered by <a href="https://postmail.invotes.com" target="_blank">PostMail</a></p> */}
              </form>
            </div>
          </div>
        </div>  
        <div id="side" className="wes-container">
          <div id="sub-side" className="wes-slide">
            <ul>
              <li>
                <a id="right" href="https://www.instagram.com/triple_double_you_/" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} viewBox="0 0 24 24"><path d="M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zm-1.604 3.31c0 1.473-1.194 2.667-2.667 2.667s-2.667-1.194-2.667-2.667c0-1.473 1.194-2.667 2.667-2.667s2.667 1.194 2.667 2.667zm4.333-12h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654-.039-.853-.048-1.125-.048-3.298 0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653.854-.04 1.125-.049 3.298-.049s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z" /></svg>
                </a>
              </li>
              <li>
                <a id="right" target="_blank" href="https://twitter.com/W_Times_Three">
                  <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z" />
                  </svg>
                </a>
              </li>
              <li>
                <a id="right" target="_blank" href="https://facebook.com/wesley.whelan">
                  <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z" /></svg>
                </a>
              </li>
            </ul>
          </div>  
        </div>  
        {/* <div onclick="location.href='newurl.html';" style="cursor: pointer;" id='chords'class="wes-container">
          <div class="wes-slide">

          </div>  
        </div>  
        <div onclick="location.href='newurl.html';" style="cursor: pointer;" class="wes-container">
          <div id='noise' class="wes-slide">

          </div>  
        </div>   */}
        <div onclick="location.href='newurl.html';" style={{"cursor":"pointer"}} id="footer" className="wes-container">
          <div id="footer-slide" className="wes-slide">
            {/* Thank you for visiting. Socials, etc, add later */}
          </div>  
        </div>  
      </section>
      {/* <section id='main' [style.display]="hideElement?'none':'inherit'">

        </section>

        <section id='samplesSearch' [style.display]="hideElement?'none':'inherit'">

        </section>

        <section id='SignInPage' [style.display]="hideElement?'none':'inherit'">
      <section id='whenSignedOut'>
          <button id='signInBtn' onClick='auth.signInWithPopup(provider)'> Sign In with Google</button>
      </section>

      <section id='whenSignedIn' hidden='true'>
          <button id='signOutBtn' onClick='auth.signOut()'>Sign Out</button>
      </section>
        </section> */}
    </div>
  );
}

export default App;

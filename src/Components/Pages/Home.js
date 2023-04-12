import '../../Styles/Home.css';
import profileImage from '../../Assets/profile.jpg';
export default function Home() {
    return (
    <>
    <div id="BG"></div>           
    <section id="about-me" className="my-5 intro">
      <div className="flex-row">
        <h1 id="about" className="section-title primary-border">
          Welcome to my page
        </h1>
      </div>
      <div className="flex-row">
        <div className="intro-info">
          <div className="intro-img">
            <img src={profileImage} style={{ width: "100%" }} alt="profile" />
          </div>
          <p>
            My name is Jinmin Dai, I currently live in Manhattan with my sister.
            In my spare time I like to read,listen to music,and play some games.
            I'm a full stack flex developer,I can creating useful, professional 
            websites with real-world job standard skill. I am a hard worker and
            I am always willing to learn new things.
          </p>
        </div>
      </div>
    </section>
    </> 
    )
}
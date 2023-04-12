import '../Styles/Home.css';
import profileImage from '../../Assets/profile.jpg';
export default function Home() {
    return (         
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
            Hi, I'm Jinmin Dai and I currently live in Manhattan with my sister. In my free time, I love to explore a range of interests, including watching anime. Anime is a passion of mine because of the unique stories, characters, and worlds it presents. I enjoy immersing myself in different anime genres, from action-packed shonen series to heartwarming slice-of-life shows. Besides anime, I also enjoy watching TV shows, movies, playing games, and spending time with friends and family.

            Professionally, I am a full stack flex developer with the skills and experience to create professional and functional websites to real-world job standards. I am committed to delivering quality work and continuously enhancing my skills to stay ahead of the curve in the rapidly evolving tech industry. I am a hard worker and always eager to take on new challenges and learn new things.

            Overall, I am an adventurous individual who loves exploring new experiences and connecting with people from all walks of life. I believe that pursuing your passions and being open to new opportunities is the key to a fulfilling life. I am excited to see what the future holds and I look forward to working with you!
          </p>
        </div>
      </div>
    </section>
    )
}
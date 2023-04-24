import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Portfolio.css';
import groupiegang from '../../Assets/groupiehero_720.png';
import historwe from '../../Assets/HistorWe.png';
import gamebox from '../../Assets/gamebox.png';

export default function Portfolio() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-3">
            <a href="https://emmaparis.github.io/Groupie-Gang/" alt="project">
              <img src={groupiegang} className="card-img-top" alt="project" />
            </a>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-3">
            <div className="card-body">
              <h2 className="card-title">Groupie-Gang</h2>
              <p className="card-text">
                Groupie-gang is a comprehensive platform for music lovers,
                where they can search and discover upcoming music events,
                concerts, festivals, and live shows. With an easy-to-use
                interface and a vast database of events, users can find the
                perfect music event based on their location, favorite artists,
                and preferred genres. Whether you are looking for a night out
                with friends or a weekend full of music and fun, Groupie-gang
                is the go-to website for all your music event needs.
              </p>
            </div>
          </div>
          <div className="row">
          <div className="col-md-6">
          <div className="card mb-3">
            <a href="https://gameboxed.herokuapp.com/" alt="project">
              <img src={gamebox} className="card-img-top" alt="project" />
            </a>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-3">
            <div className="card-body">
              <h2 className="card-title">Gameboxd</h2>
              <p className="card-text">
Gamebox is a web-based application built using React that allows users to browse and play a variety of games while also providing a personalized experience. The app provides a platform for users to create and customize their profiles, save games they have played, and search for new games using the RAWG API.
Upon visiting the Gamebox website, users will be prompted to create a profile where they can upload a profile picture, set a username, and add a brief bio. Once logged in, users can browse through a variety of games and save their favorite games to their profile. The app also allows users to keep track of their progress in games they have played and mark games as completed.
              </p>
            </div>
          </div>
          </div>
          </div>
          <div className="row">
          <div className="card mb-3">
            <div className="card-body">
              <h2 className="card-title">HistorWe</h2>
              <p className="card-text">
                Historwe is a website that provides daily insights into
                historical events and notable deaths that occurred on a
                particular day. With a user-friendly interface, readers can
                explore and learn about past events that have shaped our world
                and gain a deeper understanding of historical significance.
                Whether you are a history buff or simply curious about the
                events that have made an impact on our world, Historwe is the
                perfect resource to discover something new every day.
              </p>
            </div>
            <a href="https://calm-castle-61617.herokuapp.com/" alt="project">
              <img src={historwe} className="card-img-top" alt="project" />
            </a>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
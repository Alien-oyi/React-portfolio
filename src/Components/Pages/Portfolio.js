import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Portfolio.css';
import groupiegang from '../../Assets/groupiehero_720.png';
import historwe from '../../Assets/HistorWe.png';

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
  );
}
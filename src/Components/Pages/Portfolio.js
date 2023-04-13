import '../Styles/Portfolio.css'
import groupiegang from '../../Assets/groupiehero_720.png'
import historwe from '../../Assets/HistorWe.png'
export default function Portfolio() {
    return (
        <>
        <div className="card-container">
            <div className="image-container">
                <a href=''>
                    <img src={groupiegang} alt="project" />
                </a>
            </div>
            <div className="card-title">
                <h3>loreum ipsum
                </h3>
            </div>
            <div className="card-body">
                <p>aadsfasdfs</p>
            </div>
        </div>
                <div className="card-container">
            <div className="image-container">
                <img src={historwe} alt="project" />
            </div>
            <div className="card-title">
                <h3>loreum ipsum
                </h3>
            </div>
            <div className="card-body">
                <p>aadsfasdfs</p>
            </div>
        </div>
    </>
    )
}
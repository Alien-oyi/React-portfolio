import "../Styles/Header.css"
import NavTabs from "../NavTabs"

function Header(props) {
    const { currentPage, handlePageChange } = props;
    return (
        <>
        <header className="flex-row px-1">
        <div>
        <NavTabs
              currentPage={currentPage}
              handlePageChange={handlePageChange}
        ></NavTabs>
        </div>
        <div id="BG"></div>
         
        </header>
        </>
    )}

export default Header
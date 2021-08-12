
import './header.styles.scss'


function Header (){
    return (
        <div className="header">
            <div className="header-text">
                Where in the world?
            </div>

            <div className="theme-toggler">
                <p><i className="bi bi-moon"></i> Dark Mode</p>
            </div>
    </div>
    )
    
}

export default Header;
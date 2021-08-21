
import './header.styles.scss'


function Header (){
    var background = document.getElementById('body')
    return (
        <div className="header">
            <div className="header-text">
                Where in the world?
            </div>

            <button className="theme-toggler" onClick={()=> {
                background.classList.toggle('dark');
            }}>
                <i className="bi bi-moon-fill"></i><p> Dark Mode</p>
            </button>
    </div>
    )
    
}

export default Header;
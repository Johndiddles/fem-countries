import './header.styles.scss'

const background = document.getElementById('body')


localStorage.getItem('background') === 'true' ? background.classList.remove('dark') : background.classList.add('dark')
console.log(JSON.stringify(localStorage.getItem('background')))


function Header (){
    console.log(background)

    return (
        <div className="header">
            <div className="header-text">
                Where in the world?
            </div>

            <button className="theme-toggler" onClick={()=> {
                if(localStorage.background === 'true'){
                    localStorage.setItem('background', false)
                    background.classList.add('dark')
                } else {
                    localStorage.setItem('background', true);
                    background.classList.remove('dark')
                }
                console.log(localStorage.background)
            }}>
                <i className="bi bi-moon-fill"></i><p> Dark Mode</p>
            </button>
    </div>
    )
    
}



export default Header;
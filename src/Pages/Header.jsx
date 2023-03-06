import logo from '../assets/logo.png'

export default function Header() {
    return (
        <nav className='header'>
            <div className='header-Title'>
                <img src={logo} alt="Logo" />
                <h1>Meme Generator</h1>
            </div>
            <p>React Course - Project 3</p>
        </nav>
    )
}
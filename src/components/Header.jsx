import memeLogo from '../assets/meme-logo.png'
export default function Header () {
    return (
        <div className="header">
            <img src={memeLogo} alt="" className="meme-logo" />
            <h1 className="heading">MemeGenerator</h1>
            <p className="header-text">React - Project</p>
        </div>
    )
}
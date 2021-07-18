import '../style/HeaderStyle.css'
import Logo from '../components/Logo'
import Profile from '../components/Profile'

function Header() {
    return (
        <div className="header">
            <Logo />
            <Profile />
        </div>
    )
}

export default Header
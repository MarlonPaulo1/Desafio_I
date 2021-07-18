import { CgProfile } from 'react-icons/cg'
import { TiShoppingCart } from 'react-icons/ti'
import '../style/ProfileStyle.css'

function Profile() {
    return (
        <div  className="profile-container">
            <div className="profile">
                <i className="icon"><CgProfile/></i>
                <span className="name">Oi!</span>    
            </div>

            <div className="shopping-cart">
                <i className="cart"><TiShoppingCart /></i>
            </div>
        </div>
    )
}

export default Profile
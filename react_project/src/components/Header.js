import {NavLink} from 'react-router-dom';

function Header() {
    return (

        <div className="card" style={{width: "18rem"}}>
        <div className="card-header">
            Main menu
        </div>
            <ul className='list-group list-group-flush'>
                <li className='list-group-item textCenter'><NavLink exact to="/">Home</NavLink></li>
                <li className='list-group-item textCenter'><NavLink exact to="/note">Note</NavLink></li>
                <li className='list-group-item textCenter'><NavLink exact to="/create">Create</NavLink></li>
                <li className='list-group-item textCenter'><NavLink exact to="/about">About</NavLink></li>
            </ul>
        </div>
    );
}

export default Header;
import React from 'react';
import './SideNavBar.css';
import{ useState } from 'react';
function SideNavBar(){
    const [clicked, setClick] = useState(false);
    return(
            <div className="sidenav-box">
                <nav className="name"></nav>
            </div>
        )

}
export default SideNavBar;
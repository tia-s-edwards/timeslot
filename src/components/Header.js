import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <h1>Timeslot App</h1>
            <div className ="links">
                <NavLink to="/" className="link" activeClassName="active" exact>
                    Timeslot List
                </NavLink>
                <NavLink to="/add-timeslot" className="link" activeClassName="active">
                    Add Timeslot
                </NavLink>
            </div>
        </header>
            
    )
}
export default Header;
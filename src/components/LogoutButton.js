import React from 'react';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth'

export const LogoutButton = ({ startLogout  }) => {
    
    return (
        <div className="box-layout">
        <div className="box-layout__box"> 
            <button className="button" onClick={startLogout}>Logout</button>

        </div>
        </div>
    )
}


const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(LogoutButton);

import React from 'react';
import { withFirebase } from '../firebase';
import {Link} from "react-router-dom";
const SignOutButton = ({ firebase }) => (
    <Link to="/">
        <button type="button" className="btn-sm btn-info float-right" onClick={firebase.doSignOut}>
            Sign Out
        </button>
    </Link>
);
export default withFirebase(SignOutButton);
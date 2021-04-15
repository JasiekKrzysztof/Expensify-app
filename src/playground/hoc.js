// Highter Order Component 

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrapedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is [rivate info. Please don't share!</p>}
            <WrapedComponent {...props} />
        </div>
    );
};

const requireAuthentication = (WrapedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenicated ? (
                <WrapedComponent {...props} />
            ) : (
                <p>Please login to view the info</p>
            )}
        </div>  
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info='There are the details' />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenicated={false} info='There are the details' />, document.getElementById('app'));

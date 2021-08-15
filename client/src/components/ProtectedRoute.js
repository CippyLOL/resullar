import React from 'react';
import { Route, Redirect } from 'react-router';

// takes in bool for authentication, the component being rendered, and other props using the spread operator
const ProtectedRoute = ({ isAuth: isAuth, component: Component, ...rest }) => {
    return (
        <Route {...rest}
            render={(props) => {
                if (isAuth) {
                    return <Component />;
                } else {
                    return (<Redirect to={{ pathname: "/login", state: { from: props.location } }} />);
                }

            }} />
    );
}

export default ProtectedRoute;

import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";


const Auth = ({ component: Component, path, loggedIn, exact }) => {
    return (
        <Route
            path={path}
            exact={exact}
            render={props => (
                !loggedIn ? <Component {...props} /> : <Redirect to="/" />
            )}/>
    )
};

const Protected = ({ component: Component, path, loggedIn, exact }) => (
    <Route
        path={path}
        exact={exact}
        render={props => (
            loggedIn ? <Component {...props} /> : <Redirect to="/" />
        )}
    />
);

const Signup = ({ component: Component, path, loggedIn, exact }) => (
    <Route
        path={path}
        exact={exact}
        render={props => (
            loggedIn ? <Component {...props} /> : <Redirect to="/signup" />
        )}
    />
);



const mapStateToProps = state => ({ loggedIn: Boolean(state.session.id) });

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
export const SignupRoute = withRouter(connect(mapStateToProps)(Signup));
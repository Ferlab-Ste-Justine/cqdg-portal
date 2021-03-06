import React from 'react';
import { useEffect } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import { useKeycloak } from '@react-keycloak/web';
import { Spin } from 'antd';
import get from 'lodash/get';

interface ILocation {
    from: { pathname: string };
}

const Login = (): React.ReactElement => {
    const location = useLocation<{ [key: string]: any }>();
    const currentLocationState: ILocation = (location.state as ILocation) || {
        from: '/',
    };

    const { initialized, keycloak } = useKeycloak();
    const isAuthenticated = get(keycloak, 'authenticated', false);

    useEffect(() => {
        if (initialized && keycloak && !isAuthenticated) {
            keycloak.login({
                redirectUri: `${window.location.origin}${currentLocationState.from}`,
            });
        }
    }, [initialized]);

    if (isAuthenticated) return <Redirect to={currentLocationState.from} />;
    return <Spin spinning />;
};
export default Login;

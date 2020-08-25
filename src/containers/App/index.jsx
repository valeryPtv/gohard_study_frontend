// Core
import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Redux
import { useUi } from '../../bus/ui';

// Pages
import { Main, Info } from '../../pages';

// Components
import { Header } from '../../components';

// Styles
import { GlobalReset } from '../../assets/globalStyles';
import { Container } from './styles';

export const App = () => {
  const { ui: { isOnline }, setOnlineStatus } = useUi();

  useEffect(() => {
    window.addEventListener('online', () => void setOnlineStatus(navigator.onLine));
    window.addEventListener('offline', () => void setOnlineStatus(navigator.onLine));
  }, []); // eslint-disable-line

  return (
    <Container>
      <GlobalReset />
      <Header isOnline={isOnline} />
      <Switch>
        <Route
          component={Info}
          path="/info"
        />
        <Route
          component={Main}
          path="/"
        />
        <Redirect
          component={Main}
          to="/"
        />
      </Switch>
    </Container>
  );
};

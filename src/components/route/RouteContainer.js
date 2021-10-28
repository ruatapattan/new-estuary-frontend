import { display } from '@mui/system';
import { useContext, useState } from 'react';
import { Route, Switch, useLocation, Redirect } from 'react-router-dom';
import routes from '../../config/routes';
import { AuthContext } from '../../contexts/AuthContext';
import { ChatContextProvider } from '../../contexts/ChatContext';
import { SidebarContextProvider } from '../../contexts/SidebarContext';
import { UserContext } from '../../contexts/UserContext';
import ChatContainer from '../chat/ChatContainer';
import Footer from '../layout/footer/Footer';
import Header from '../layout/header/Header';

function RouteContainer() {
  const location = useLocation();
  const path = location.pathname;
  const { userRole } = useContext(AuthContext);
  console.log(routes[userRole]?.route);

  return (
    <>
      <ChatContextProvider>
        <SidebarContextProvider>
          {path !== '/login' && path !== '/signup' && <Header />}
          <div
            style={{
              flexGrow: 1,
              // border: "10px solid red",
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: '100%'
            }}
          >
            <Switch>
              {routes[userRole]?.route.map((item, idx) => {
                console.log(item.path);

                return (
                  <Route
                    key={idx}
                    exact
                    path={item.path}
                    component={item.component}
                    // handleDrawerToggle={handleDrawerToggle}
                    // mobileOpen={mobileOpen}
                  />
                );
              })}
              <Redirect to={routes[userRole]?.redirect} />
            </Switch>
          </div>
        </SidebarContextProvider>
      </ChatContextProvider>
      {/* <ChatContainer /> */}
      {path !== '/login' && path !== '/signup' && <Footer />}
    </>
  );
}

export default RouteContainer;

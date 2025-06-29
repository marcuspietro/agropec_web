import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { SignIn } from '../pages/SignIn';
import { Home } from '../pages/Home';
import { Mapa } from '../pages/Mapa';
import { Agenda } from '../pages/Agenda';
import { Expositores } from '../pages/Expositores';
import { Expositor } from '../pages/Expositor';
import { Notifications } from '../pages/Notifications';

const AppRoutes: React.FC = () => {

  const isAuthenticated = localStorage.getItem("@agropec:signIn");

  return (
    <Routes>

      <Route
        path="/"
        element={<Navigate to={isAuthenticated ? "/home" : "/signIn"} />}
      />

      <Route path="/signIn" element={ <SignIn /> } />
      <Route path="/home" element={ <Home /> } />
      <Route path="/notifications" element={ <Notifications /> } />
      <Route path="/mapa" element={ <Mapa /> } />
      <Route path="/agenda" element={ <Agenda /> } />

      <Route path="/expositores" element={ <Expositores /> } />
      <Route path="/expositores/:id" element={ <Expositor /> } />

      <Route path="*" element={ <Navigate to={"/"} /> } />
    </Routes>
  );
};

export default AppRoutes;
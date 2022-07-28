import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom'
// import '../../index.css'


const Home = React.lazy(() => import('../../pages/Home'));
const About = React.lazy(() => import('../../pages/About'));
const Movie = React.lazy(() => import('../../pages/Movie'));
const Login = React.lazy(() => import('../../pages/Login'));
const Three = React.lazy(() => import('../../pages/Three'));
const Phone = React.lazy(() => import('../../pages/Phone'));
const Form = React.lazy(() => import('../../pages/Form'));

function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <React.Suspense fallback={<>...</>}>
              <Home />
            </React.Suspense>} />
          <Route path="/about" element={
            <React.Suspense fallback={<>...</>}>
              <About />
            </React.Suspense>} />
          <Route path="/movie" element={
            <React.Suspense fallback={<>...</>}>
              <Movie />
            </React.Suspense>} />
          <Route path="/login" element={
            <React.Suspense fallback={<>...</>}>
              <Login />
            </React.Suspense>} />
          <Route path="/three" element={
            <React.Suspense fallback={<>...</>}>
              <Three />
            </React.Suspense>} />
          <Route path="/phone" element={
            <React.Suspense fallback={<>...</>}>
              <Phone />
            </React.Suspense>} />
          <Route path="/form" element={
            <React.Suspense fallback={<>...</>}>
              <Form />
            </React.Suspense>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRouter;

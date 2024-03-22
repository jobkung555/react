import React, { Suspense, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom'
// import '../../index.css'
import Loading from '../../components/Loading'


const Home = React.lazy(() => import('../../pages/Home'));
const About = React.lazy(() => import('../../pages/About'));
const Styles = React.lazy(() => import('../../pages/Styles'));
const Login = React.lazy(() => import('../../pages/Login'));
// const Three = React.lazy(() => import('../../pages/Three'));
const Phone = React.lazy(() => import('../../pages/Models/subpages/Phone'));
const Tower = React.lazy(() => import('../../pages/Models/subpages/Tower'));
const Table = React.lazy(() => import('../../pages/Table'));
const Store = React.lazy(() => import('../../pages/Store'));

function AppRouter() {
  const token = localStorage.getItem('accessToken')
  const parseJwt = (token) => {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      return null;
    }
  };
  if (token) {
    // const decodedJwt = parseJwt(token);
    // if (decodedJwt.exp * 1000 < Date.now()) {
    //   localStorage.removeItem('accessToken')
    //   localStorage.removeItem('user')
    //   window.location.href = '/'
    // }
    // console.log(decodedJwt.exp * 1000)
    // console.log(Date.now())
  }

  return (

    <>
      {token ? <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <React.Suspense fallback={<><Loading /></>}>
              <Home />
            </React.Suspense>} />
          <Route path="/tower" element={
            <React.Suspense fallback={<><Loading /></>}>
              <Tower />
            </React.Suspense>} />
          <Route path="/about" element={
            <React.Suspense fallback={<><Loading /></>}>
              <About />
            </React.Suspense>} />

          <Route path="/styles" element={
            <React.Suspense fallback={<><Loading /></>}>
              <Styles />
            </React.Suspense>} />
          <Route path="/phone" element={
            <React.Suspense fallback={<><Loading /></>}>
              <Phone />
            </React.Suspense>} />
          {/* <Route path="/three" element={
            <React.Suspense fallback={<><Loading/></>}>
              <Three />
            </React.Suspense>} /> */}
          <Route path="/table" element={
            <React.Suspense fallback={<><Loading /></>}>
              <Table />
            </React.Suspense>} />
          <Route path="/store" element={
            <React.Suspense fallback={<><Loading /></>}>
              <Store />
            </React.Suspense>} />
        </Routes>
      </BrowserRouter> : <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <React.Suspense fallback={<><Loading /></>}>
              <Home />
            </React.Suspense>} />
          <Route path="/tower" element={
            <React.Suspense fallback={<><Loading /></>}>
              <Tower />
            </React.Suspense>} />
          <Route path="/about" element={
            <React.Suspense fallback={<><Loading /></>}>
              <About />
            </React.Suspense>} />
          <Route path="/styles" element={
            <React.Suspense fallback={<><Loading /></>}>
              <Styles />
            </React.Suspense>} />
          <Route path="/phone" element={
            <React.Suspense fallback={<><Loading /></>}>
              <Phone />
            </React.Suspense>} />
          <Route path="/login" element={
            <React.Suspense fallback={<><Loading /></>}>
              <Login />
            </React.Suspense>} />
          <Route path="/store" element={
            <React.Suspense fallback={<><Loading /></>}>
              <Store />
            </React.Suspense>} />
          {/* <Route path="/three" element={
            <React.Suspense fallback={<><Loading/></>}>
              <Three />
            </React.Suspense>} /> */}
          {/* <Route path="/table" element={
            <React.Suspense fallback={<><Loading/></>}>
              <Table />
            </React.Suspense>} /> */}
        </Routes>
      </BrowserRouter>}

    </>
  );
}

export default AppRouter;

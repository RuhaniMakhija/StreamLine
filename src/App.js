import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import "./_app.scss";
import LoginScreen from "./screens/loginScreen/LoginScreen";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Layout = ({ children }) => {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  const handleToggleSidebar = () => {
    setToggleSidebar(!toggleSidebar);
  };
  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app__container border border-info">
        <Sidebar
          toggleSidebar={toggleSidebar}
          handleToggleSidebar={handleToggleSidebar}
        />
        <Container fluid className="app__main border border-warning">
          {children}
        </Container>
      </div>
    </>
  );
};

const App = () => {
  const { accessToken, loading } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!accessToken && !loading) {
      navigate("/auth");
    }
  }, [accessToken, loading, navigate]);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomeScreen />
            </Layout>
          }
        />
        <Route path="/auth" element={<LoginScreen />} />
        <Route
          path="/search"
          element={
            <Layout>
              <h1>Search Me</h1>
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <Layout>
              <Navigate to="/" />
            </Layout>
          }
        />
      </Routes>
    </>
  );
};

export default App;

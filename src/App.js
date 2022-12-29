import React, { Fragment } from "react";

//component
import Footer from "./component/Footer/Footer";
import Show from "./component/Show/Show";
import InputForm from "./component/InputForm/InputForm";
//css
import "./part/css/App.css";

const App = () => {
  // const store = useSelector((state) => state);

  return (
    <Fragment>
      <div className="main">
        <div className="header">
          <h2>THINGS TO DO</h2>
        </div>

        <div>
          <InputForm />
        </div>

        <div className="all-todo">
          <Show />
        </div>

        <div className="footer">
          <Footer />
        </div>
      </div>
      <p className="press">Press `Enter` to Add</p>
    </Fragment>
  );
};

export default App;

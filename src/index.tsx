import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

// import { ToastContainer } from 'react-toastify'

// @ts-ignore
import { store } from "./redux/store.ts";
// @ts-ignore
import Project from "./routes/index.tsx";
import './styles/index.scss';
import './index.css';


// @ts-ignore
const root: ReactDOM.Root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>



    <Provider store={store}>
      <Project />
    </Provider>


  </React.StrictMode >
);

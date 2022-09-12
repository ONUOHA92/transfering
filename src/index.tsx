import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

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
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
      />
      <Project />
    </Provider>


  </React.StrictMode >
);

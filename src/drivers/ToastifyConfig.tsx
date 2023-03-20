import { PropsWithChildren } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastifyConfig = ({ children }: PropsWithChildren) => {
  return (
    <>
      <ToastContainer />
      {children}
    </>
  );
};

export default ToastifyConfig;

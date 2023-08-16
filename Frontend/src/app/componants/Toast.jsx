import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = ({message}) => {
  const notify = () => {
    toast.success(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div>
      <button onClick={notify} className="bg-mobilicis hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
        Show Toast
      </button>
      <ToastContainer/>
    </div>
  );
};

export default Toast;

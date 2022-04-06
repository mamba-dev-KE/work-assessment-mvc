import "./Loading.scss";
import { FaSpinner } from "react-icons/fa";

const Loading = () => {
  return (
    <div className="loading grid">
      <span className="loading__text">Loading quotes</span>
      <FaSpinner className="loading__icon" />
    </div>
  );
};

export default Loading;

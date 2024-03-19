import { GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import GoogleIcon from "../../assets/icons/google.svg";
import useAuth from "../../hooks/useAuth";
const googleProvider = new GoogleAuthProvider();
export default function SocialLogin({ title }) {
  const [loading, setLoading] = useState(false);
  const { signInWithSocial } = useAuth();

  const navigate = useNavigate();
  const handleLogin = async (provider) => {
    try {
      setLoading(true);
      const { user } = await signInWithSocial(provider);
      if (user?.email) {
        navigate("/");
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <button
      disabled={loading}
      onClick={() => handleLogin(googleProvider)}
      className="social-menu"
    >
      {loading ? (
        <FaSpinner className="animate-spin" />
      ) : (
        <>
          <img src={GoogleIcon} alt="" />
          <h1>{title}</h1>{" "}
        </>
      )}
    </button>
  );
}

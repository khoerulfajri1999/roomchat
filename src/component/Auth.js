import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase-config.js";
import "../styles/Auth.css";

import Cookies from "universal-cookie";
const cookies = new Cookies();

export const Auth = () => {
  const signinWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set("auth-token", result.user.refreshToken);
      alert("Setelah masuk dengan google, silahkan refresh halaman ini");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="auth">
      <h1>
        Selamat datang di aplikasi <span className="auth-chat">Room Chat</span>
      </h1>
      <p>Masuk dengan Google</p>
      <button onClick={signinWithGoogle}>Masuk dengan Google</button>
    </div>
  );
};

import { useSelector, useDispatch } from "react-redux";
import { signUpWithEmail, signInWithEmail, signInWithGoogle, logout } from "../../lib/firebase/auth.js";
import { setUser, setLoading, setError, logOutUser } from "./authSlice.js";

export const useAuth = () => {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const loginWithEmail = async (email, password) => {
    dispatch(setLoading(true));
    try {
      const user = await signInWithEmail(email, password);
      dispatch(setUser(user));

    } catch (error) {
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  };

  const registerWithEmail = async (email, password) => {
    dispatch(setLoading(true));
    try {
      const user = await signUpWithEmail(email, password);
      dispatch(setUser(user));
    } catch (error) {
      dispatch(setError(error.message));
    }
    finally {
      dispatch(setLoading(false));
    }
  };

  const loginWithGoogle = async () => {
    dispatch(setLoading(true));
    try {
      const user = await signInWithGoogle();
      dispatch(setUser(user));

    } catch (error) {
      dispatch(setError(error.message));
    }
    finally {
      dispatch(setLoading(false));
    }
  };

  const logOutUserAction = async () => {
    dispatch(setLoading(true));
    try {
      await logout();
      dispatch(logOutUser());

    } catch (error) {
      dispatch(setError(error.message));
    }
    finally {
      dispatch(setLoading(false));
    }
  };
  return { auth, loginWithEmail, registerWithEmail, loginWithGoogle, logOutUserAction };
};
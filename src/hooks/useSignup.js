import { useState } from "react";
import { projectAuth } from "../firebase/config";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const signup = async (email, password, displayName) => {
    setError(null);
    setIsPending(true);

    try {
      //signup user
      const responese = await projectAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log(responese.user);

      if (!responese) {
        throw new Error("Could not Complete Signup");
      }

      //add display name to user

      await responese.user.updateProfile({ displayName: displayName });

      setIsPending(false);
      setError(null);
    } catch (error) {
      console.error(error.message);
      setError(error.message);
      setIsPending(false);
    }
  };

  return { error, isPending, signup };
};

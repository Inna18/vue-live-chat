import { projectAuth } from "@/firebase/config";
import { ref } from "vue";

const error = ref("");

const signup = async (email, password, displayName) => {
  error.value = null;
  
  try {
    const res = await projectAuth.createUserWithEmailAndPassword(email, password);
    if (!res) {
      throw new Error("Cannot Signup!");
    }
    
    await res.user.updateProfile({ displayName });
    error.value = null;
    console.log(res.user)
    return res;
    
  } catch (err) {
    console.log(err.message);
    error.value = err.message;
  }
}
const useSignup = () => {
  return { error, signup };
}

export default useSignup;

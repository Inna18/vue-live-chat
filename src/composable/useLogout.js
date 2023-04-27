import {ref} from "vue";
import {projectAuth} from "@/firebase/config";

const error = ref(null);

const logout = async () => {
  try {
    const res = await projectAuth.signOut();
    console.log("user logged out");
    return res;
  }catch (err) {
    console.log(err.message);
    error.value = err.message;
  }
}

const useLogout = () => {
  return { error, logout }
}

export default useLogout;

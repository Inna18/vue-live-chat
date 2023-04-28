import { ref } from "vue";
import {projectFirestore} from "@/firebase/config";

const useCollection = (collection) => {
  const error = ref(null);
  
  const getDoc = async (doc) => {
    error.value = null;
    try {
      const res = await projectFirestore.collection(collection).add(doc);
      console.log(res);
    } catch (err) {
      console.log(err.message);
      error.value = err.message;
    }
  }
  
  return { error, getDoc }
}

export default useCollection;

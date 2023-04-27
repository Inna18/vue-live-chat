<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" required placeholder="Insert Display Name" v-model="name">
    <input type="email" required placeholder="Insert Email" v-model="email">
    <input type="password" required placeholder="Insert Password" v-model="password">
    <div class="error">{{ error }}</div>
    <button>Sign up</button>
  </form>
</template>

<script>
import { ref } from "vue";
import useSignup from "@/composable/useSignup";

export default {
  name: "SignupForm",
  setup(props, context) {
    const name = ref("");
    const email = ref("");
    const password = ref("");

    const { error, signup } = useSignup();

    const handleSubmit = async () => {
      await signup(email.value, password.value, name.value);
      console.log("User signed up.")
      if (!error.value) {
        context.emit("signup");
      }
    }

    return { name, email, password, handleSubmit, error };
  }
}
</script>

<style scoped>

</style>

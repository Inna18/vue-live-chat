<template>
  <form @submit.prevent="handleSubmit">
    <input type="email" required placeholder="Insert Email" v-model="email">
    <input type="password" required placeholder="Insert Password" v-model="password">
    <div class="error">{{ error }}</div>
    <button>Log in</button>
  </form>
</template>

<script>
import { ref } from "vue";
import { useLogin } from "@/composable/useLogin";

export default {
  name: "LoginForm",
  setup(props, context) {
    const email = ref("");
    const password = ref("");

    const { error, login } = useLogin();

    const handleSubmit = async () => {
      await login(email.value, password.value);
      console.log(error.value)
      if (error.value === null) {
        context.emit("login");
      }
      console.log("user logged in");
    }

    return { email, password, handleSubmit, error };
  }
}
</script>

<style scoped>

</style>

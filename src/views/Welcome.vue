<template>
  <div class="welcome container">
    <p>Welcome</p>
    <div v-if="showLogin">
      <h2>Log in</h2>
      <LoginForm @login="toChatRoom" />
      <p>No account yet? <span @click="showLogin = false">Sign up</span></p>
    </div>
    <div v-else>
      <h2>Sign up</h2>
      <SignupForm @signup="toChatRoom" />
      <p>Already registered? <span @click="showLogin = true">Log in</span></p>
    </div>
  </div>
</template>

<script>
import SignupForm from "@/components/SignupForm";
import LoginForm from "@/components/LoginForm";
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "Welcome",
  components: { LoginForm, SignupForm },
  setup() {
    const router = useRouter();
    const showLogin = ref(true);

    const toChatRoom = () => {
      router.push({name: "Chatroom"});
    }

    return { showLogin, toChatRoom }
  }
}
</script>

<style>
  .welcome {
    text-align: center;
    padding: 20px 0;
  }
  /* form styles */
  .welcome form {
    width: 300px;
    margin: 20px auto;
  }
  .welcome label {
    display: block;
    margin: 20px 0 10px;
  }
  .welcome input {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;
  }
  .welcome span {
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
  }
  .welcome button {
    margin: 20px auto;
  }
</style>

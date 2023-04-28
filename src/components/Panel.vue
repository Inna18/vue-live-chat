<template>
  <nav v-if="user">
    <div>
      <p>Hi, {{ user.displayName }}</p>
      <p class="email">You're currently logged in as {{ user.email }}</p>
    </div>
    <button @click="handleLogout">Log out</button>
  </nav>
</template>

<script>
import useLogout from "@/composable/useLogout";
import getUser from "@/composable/getUser";

export default {
  name: "Panel",
  setup() {
    const { error, logout } = useLogout();
    const { user } = getUser();

    const handleLogout = () => {
      logout();
    }

    return { handleLogout, error, user }
  }
}
</script>

<style>
  nav {
    padding: 20px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  nav p {
    margin: 2px auto;
    font-size: 16px;
    color: #444;
  }
  nav p.email {
    font-size: 14px;
    color: #999;
  }
</style>

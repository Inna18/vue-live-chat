<template>
  <div class="container">
    <Panel />
    <NewChatForm />
  </div>
</template>

<script>
import Panel from "../components/Panel";
import getUser from "@/composable/getUser";
import { watch } from "vue";
import {useRouter} from "vue-router";
import NewChatForm from "@/components/NewChatForm";
export default {
  name: "ChatRoom",
  components: {NewChatForm, Panel },
  setup() {
    const router = useRouter();
    const { user } = getUser();

    watch(user, () => {
      console.log(user);
      if (!user.value) {
        router.push({name: "Welcome"});
      }
    })
  }
}
</script>

<style scoped>

</style>

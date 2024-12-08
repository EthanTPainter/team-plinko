<script lang="ts">
  import '../static/fonts.css';
  import { createProvidedUsers } from "../store/players.svelte";
  import SelectUsers from "$lib/select-users.svelte";

  let users = createProvidedUsers([]);
  const areUsersProvided = $state(false);
</script>

<h1 class="header">Welcome!</h1>
<h2 class="header">Enter the names of everyone who wants to play Plinko!</h2>

<SelectUsers setUsers={users.setUsers} currentUsers={users.users}/>

<style>
  :global(body) {
    background: #FDE2C4;
  }

  .header {
    text-align: center;
  }
</style>
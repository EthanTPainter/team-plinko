<script lang="ts">
  import '../static/fonts.css';
  import { createProvidedUsers } from "../store/players.svelte";
  import SelectUsers from "$lib/select-users.svelte";

  let users = createProvidedUsers([]);
  const areUsersProvided = $state(false);
  const setStage = $state("ENTER_USERS");
</script>

<h1 class="header">Welcome!</h1>
<h2 class="header">Enter the names of everyone who wants to play Plinko!</h2>

{#if setStage === "ENTER_USERS"}
  <button class="play-button">Play</button>
  <SelectUsers setUsers={users.setUsers} currentUsers={users.users}/>
{/if}

<style>
  :global(body) {
    background: #FDE2C4;
  }

  .header {
    text-align: center;
  }
  .play-button {
    display: block;
    margin: 6px auto;
  }
</style>
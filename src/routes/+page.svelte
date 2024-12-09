<script lang="ts">
  import '../static/fonts.css';
  import { createProvidedUsers } from "../store/players.svelte";
  import SelectUsers from "$lib/select-users.svelte";
	import { slide } from 'svelte/transition';
	import PlinkoGame from '$lib/plinko-game.svelte';

  let users = createProvidedUsers([]);
  const areUsersProvided = $state(false);
  let setStage = $state("ENTER_USERS");

  function updateStage(newStage: string) {
    setStage = newStage;
  }
</script>

<!-- Enter user information -->
{#if setStage === "ENTER_USERS"}
  <div transition:slide={{ duration: 500 }}>
    <h1 class="header">Welcome!</h1>
    <h2 class="header">Enter the names of everyone who wants to play Plinko!</h2>
  
    {#if users.users.length > 0}
      <button class="play-button" onclick="{() => updateStage("PLAY_GAME")}">Start Game!</button>
    {/if}
  
    <SelectUsers setUsers={users.setUsers} currentUsers={users.users}/>
  </div>
{/if}

<!-- Play the Game! -->
{#if setStage === "PLAY_GAME"}
  <div transition:slide={{ delay: 500, duration: 400 }}>
    <PlinkoGame />
  </div>
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
    padding: 6px;
    font-size: 1rem;
    font-weight: 500;
  }
</style>
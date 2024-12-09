<script lang="ts">
  const { currentUsers, setUsers } = $props();
  let enteredName = $state();
  let enteredNameMatchesExistingEntry = $state(false);

  function isUserAlreadyAdded(): boolean {
    let userAlreadyExists = currentUsers.some((user: any) => {
      return user.name === enteredName;
    });
    return userAlreadyExists;
  }
  function onEnter(event: KeyboardEvent) {
    // If name is unique and user clicked "Enter", add user to the list and clear value
    enteredNameMatchesExistingEntry = currentUsers.some((user: any) => {
      return user.name === enteredName;
    });
    if (enteredName
      && !enteredNameMatchesExistingEntry
      && (event.key === "Enter" || event.keyCode === 13)) {
        const newUser = {
          name: enteredName,
          processed: false
        };
        const newUserList = [...currentUsers, newUser];
        setUsers(newUserList);
        enteredName = "";
    }
  }

  function onUserDelete(name: any) {
    const newUserList = currentUsers.filter((user: any) => {
      return user.name !== name;
    });
    setUsers(newUserList);
  }
</script>

<div>
  <div class="input-container">
    <input
      bind:value={enteredName}
      onkeypress="{(val) => onEnter(val)}"
    />
  </div>
  {#if isUserAlreadyAdded()}
    <h3 class="">The name "{enteredName}" is already saved as a participant. Users should have unique names for clarity!</h3>
  {/if}

  <div class="entered-users">
    <!-- ENTERED PLAYERS -->
    {#each currentUsers as user}
    <div class="user-container">
      <div class="user">
        { user.name }
        <button class="delete-user" onclick="{() => onUserDelete(user.name)}">
          &#10060;
        </button>
      </div>
    </div>
    {/each}
  </div>
</div>

<style>
  .input-container {
    max-width: fit-content;
    margin-left: auto;
    margin-right: auto;
  }
  .entered-users {
    text-align: center;
    max-width: fit-content;
    margin-top: 16px;
    margin-left: auto;
    margin-right: auto;

    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }
  .user {
    border: 1px solid #ccc;
    padding: 16px 16px;
    margin: 4px;
  }
</style>
<script lang="ts">
  const { currentUsers, setUsers } = $props();
  let enteredName = $state();
  let enteredNameMatchesExistingEntry = $state(false);

  function onKeyChange() {
    // If name is unique and user clicked "Enter", add user to the list and clear value
    enteredNameMatchesExistingEntry = currentUsers.some((user: any) => {
      return user.name === enteredName;
    });
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

  function onUserDelete(event: any) {
    console.log(`DELETE: `, event);
  }
</script>

<div>
  <div class="input-container">
    <input
      bind:value={enteredName}
      onkeypress="{(val) => {
        onEnter(val);
        onKeyChange();
      }}"
    />
  </div>
  {#if enteredNameMatchesExistingEntry}
    <h3 class="">The entered name "{enteredName}" is already saved as a participant. Users should have unique names for clarity!</h3>
  {/if}

  <div class="entered-users">
    <!-- ENTERED PLAYERS -->
    {#each currentUsers as user}
    <div class="user">
      { user.name }
      <div class="delete-user" onclick="{() => onUserDelete(user.name)}">
        &#10060;
      </div>
    </div>
    {/each}
  </div>
</div>

<style>
  .input-container {
    max-width: fit-content;
    margin-top: 5rem;;
    margin-left: auto;
    margin-right: auto;
  }
  .entered-users {
    text-align: center;
    max-width: fit-content;
    margin-top: 5rem;;
    margin-left: auto;
    margin-right: auto;
  }
  .user {
    border: 1px solid #ccc;
    padding: 0.01em 16px;
  }
  .delete-user {
    float: right;
  }
</style>
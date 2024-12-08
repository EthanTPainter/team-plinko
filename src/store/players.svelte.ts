export function createProvidedUsers(initial: { name: string, processed: boolean, rank?: number }[]) {
  let users = $state.raw(initial);
  return {
    get users() { return users },
    setUsers: (value: { name: string, processed: boolean, rank?: number }[]) => {
      users = value;
    }
  };
}
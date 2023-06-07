export let mockDataUser = [
  {
    id: 1,
    name: "Jon Snow"
  },
  {
    id: 2,
    name: "Cersei Lannister"
  }
]
export const deleteUser = (id) => {
  const index = mockDataUser.findIndex(user => user.id === id);
  console.log("index", index);
  if (index !== -1) {
    const deletedUser = mockDataUser[index];
    console.log(deletedUser);
    console.log("data new: ", mockDataUser);
    mockDataUser.splice(index, 1);
    return deletedUser;
  }
  return null;
};
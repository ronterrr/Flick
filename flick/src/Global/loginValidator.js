import data from "./Data/userData.json";

function loginValidator(username, password) {
  const userIndex = data.findIndex((i) => {
    return i.username === username;
  });
  if(userIndex<0){
    return 'invalid'
  } else if(data[userIndex].password!==password){
    return 'no match'
  } else{
    return 'match'
  }
}

/*
userIndex < 0: Invalid account
data[userIndex].password !== password: Wrong password
else password matches
*/

export default loginValidator;

let current_users = ["Mannan", "Aliyan", "Muddasir", "Anas"];

let new_users = ["Ahad", "murtaza", "Shehzad", "anas", "wajid"];

new_users.map((new_user) => {
  if (current_users.includes(new_user)) {
    console.log(`Sorry the user name ${new_user} has already been taken`);
  } else {
    console.log(`Congratulations the user name ${new_user} is still available`);
  }
});

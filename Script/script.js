function isValidPassword (password, username) {
    if (password.length < 8)  {
        return false;
        }

    if (password.includes(" ")) {
        return false;
        }

    if (password.toLowerCase().includes(username.toLowerCase())) {
        return false;
         }
         return true;
          }

    console.log(isValidPassword("securePass1", "user"));
    console.log(isValidPassword("user12345", "user"));
    console.log(isValidPassword("short", "user"));
    console.log(isValidPassword("no space", "user"));

fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        const userList = document.getElementById("user-list");

        data.forEach(user => {
          const listItem = document.createElement("ul");
          listItem.textContent = user.name;
          userList.appendChild(listItem);
        });
      })

      
      
      
const userList = document.getElementById("user-list");

document.addEventListener("DOMContentLoaded", async () => {
    // Fetch users from api
    const response = await fetch("https://reqres.in/api/users?page=1");

    // Parse response
    const data = await response.json();

    // Loop through users
    data.data.forEach(user => {
        // Create container for each card
        const card = document.createElement("div");
        card.classList.add("card");

        // Add name
        const name = document.createElement("h2");
        name.textContent = `${user.first_name} ${user.last_name}`;
        card.appendChild(name);

        // Add image
        const img = document.createElement("img");
        img.src = user.avatar;
        img.alt = `${user.first_name} ${user.last_name}`;
        card.appendChild(img);

        // Append card
        userList.appendChild(card);
    });
});

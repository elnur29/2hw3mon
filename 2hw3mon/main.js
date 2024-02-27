document.addEventListener("DOMContentLoaded", () => {
    const userIdInput = document.getElementById("userIdInput");
    const fetchButton = document.getElementById("fetchButton");
    const userDataDiv = document.getElementById("userData");

    fetchButton.addEventListener("click", () => {
        const userId = userIdInput.value;
        if (userId >= 1 && userId <= 10) {
            fetchUserData(userId);
        } else {
            alert("Please enter a number between 1 and 10.");
        }
    });

    userIdInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            const userId = userIdInput.value;

           
            if (userId >= 1 && userId <= 10) {
                fetchUserData(userId);
            } else {
                alert("Please enter a number between 1 and 10.");
            }
        }
    });

    function fetchUserData(id) {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
            .then(data => {
               
                userDataDiv.innerHTML = `
                    <p>Name: ${data.name}</p>
                    <p>Username: ${data.username}</p>
                    <p>Phone: ${data.phone}</p>
                `;
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
                userDataDiv.innerHTML = "<p>Error fetching user data. Please try again later.</p>";
            });
    }
});
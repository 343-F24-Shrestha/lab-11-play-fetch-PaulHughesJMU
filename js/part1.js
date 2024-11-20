const output = document.getElementById("output");

document.getElementById("get-btn").addEventListener("click", async () => {
    // This function should send a GET request to the echo endpoint and output the result
    // The two input fields should be included in the request URL as **query parameters**

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;

    // Make url
    const url = `https://echo.zuplo.io/api?name=${encodeURIComponent(name)}&age=${encodeURIComponent(age)}`;

    // Send request
    const response = await fetch(url);
    const data = await response.json();

    // Display result
    output.textContent = JSON.stringify(data, null, 2);
});

document.getElementById("post-json-btn").addEventListener("click", async () => {
    // This function should send a POST request to the echo endpoint with the input data as JSON
    // The two input fields should be included in the request body as **JSON data**

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;

    // Make post request
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, age }),
    };

    // Send request
    const response = await fetch("https://echo.zuplo.io/api", options);
    const data = await response.json();

    // Display result
    output.textContent = JSON.stringify(data, null, 2);
});

document.getElementById("post-form-btn").addEventListener("click", async () => {
    // This function should send a POST request to the echo endpoint with the input data as form data
    // The two input fields should be included in the request body as **url-encoded data**

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;

    // Make post request
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({ name, age }),
    };

    // Send request
    const response = await fetch("https://echo.zuplo.io/api", options);
    const data = await response.json();

    // Display result
    output.textContent = JSON.stringify(data, null, 2);
});

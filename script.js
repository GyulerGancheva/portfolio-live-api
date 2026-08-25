
const username = "ThisUserDoesNotExist123456789";

async function fetchGithubData() {
    const apiUrl = `https://api.github.com/users/${username}`;

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error("Failed to fetch GitHub data");
        }

        const data = await response.json();

        displayGithubData(data);

    } catch (error) {
        showError();
    }
}

function displayGithubData(data) {
    document.getElementById("github-username").textContent = data.login;
    document.getElementById("github-repos").textContent = data.public_repos;
    document.getElementById("github-followers").textContent = data.followers;
    document.getElementById("github-profile").href = data.html_url;
}

function showError() {
    document.getElementById("github-data").textContent =
        "Unable to load GitHub data. Please try again later.";
}

fetchGithubData();

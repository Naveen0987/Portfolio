const username = "Naveen0987";

export async function getGithubProfile() {

    const response = await fetch(
        `https://api.github.com/users/${username}`
    );

    return response.json();
}

export async function getGithubRepos(){

    const response = await fetch(

        `https://api.github.com/users/${username}/repos?sort=updated`

    );

    return response.json();
}

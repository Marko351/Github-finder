class GitHub{
  constructor(){
    this.client_id = '4bc602bc9f159a211a4a';
    this.client_secret = 'a1626e0613cd12c86c3d0666efe072f5dc70540c';
    this.repos_count = 7;
    this.repos_sort = 'created: asc';
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profileData = await profileResponse.json();

    const reposData = await repoResponse.json();

    return {
      profile: profileData,
      repos: reposData
    }
  }
}
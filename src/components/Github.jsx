import React from "react";
import "./Github.css";

import { useEffect, useState } from "react";

import { getGithubProfile } from "../services/github";

const Github = () => {

const [profile,setProfile]=useState(null);

useEffect(()=>{

async function load(){

const data=await getGithubProfile();

setProfile(data);

}

load();

},[]);

if(!profile){

return(

<section className="github">

Loading...

</section>

);

}

return(

<section className="github reveal">

<div className="section-header">

<p>Open Source</p>

<h2>GitHub Profile</h2>

</div>

<div className="github-card">

<h3>{profile.name}</h3>

<p>{profile.bio}</p>

<div className="github-grid">

<div>

<h2>{profile.public_repos}</h2>

<span>Repositories</span>

</div>

<div>

<h2>{profile.followers}</h2>

<span>Followers</span>

</div>

<div>

<h2>{profile.following}</h2>

<span>Following</span>

</div>

</div>

<a

href={profile.html_url}

target="_blank"

rel="noreferrer"

className="github-btn"

>

Visit GitHub

</a>

</div>

</section>

);

};

export default Github;

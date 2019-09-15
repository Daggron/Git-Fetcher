import React , {useEffect , useState} from 'react';
import './App.css';
import './bootstrap.min.css'
import Heading from './Heading'
import Display from './Display'

  //eslint-disable-next-line
const App = ()=>{

  const client_id = "Iv1.27d23b109a50754c";

  const client_secret = "82015423e2a368c16cb2fbf9f6290d9fe8c77f70";

  //eslint-disable-next-line
  const [ repo , setRepos ] = useState("");

  //eslint-disable-next-line
  const [ user , getuser ] = useState("");

  const [ query , getquery ] = useState("");

  const [ view , setView] = useState(false);

  useEffect(()=>{
    get_repos();
    //eslint-disable-next-line
  },[user]);

  const get_repos = async ()=>{
    let response = await fetch(`https:api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}`);

    let data = await response.json();

    setRepos(data);
    console.log(data);

  }

  const updatesearch = e =>{

    
    
    getquery(e.target.value);
    console.log(query);

  }

  const setuser = e =>{
    e.preventDefault();
    getuser(query);
    setView(true);
  }





  return (
    <section className="App">
      <Heading />
      <form className="my-5 py-5 my-class" onSubmit = {setuser}>
          
            <input type="text" className="form-control mx-5"   placeholder="e.g.  Daggron" onChange={updatesearch} />
          
          <button type="submit" className="btn btn-warning my-2  mx-5">Get Data</button>
        </form>
      
        
        <Display  view ={view} repos={repo.public_repos} name={repo.name} imgsrc={repo.avatar_url} followers={repo.followers} following={repo.following} bio={repo.bio}/>

        
    </section>
  )
}
export default App;

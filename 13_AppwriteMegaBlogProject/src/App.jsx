import "./App.css";

function App() {
  // console.log(process.env.REACT_APP_APPEWRITE_URL); //this is create react app 
  
  console.log(import.meta.env.VITE_APPWRITE_URL);



  return (
    <>
      <h1>Blog Webiste with Appwrite</h1>
    </>
  );
}

export default App;

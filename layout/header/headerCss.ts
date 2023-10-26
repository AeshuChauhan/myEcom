export const header_desktopCss = `

header {
    background-color:#fff; 
    color: #333; 
    padding: 10px 10px; 
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  h1 {
    font-size: 24px;
    margin: 0;
    padding: 0 20px; 
  }

  nav {
    display: flex;
    justify-content: flex-end; 
    align-items: center;
  }
  
  nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
  }
  
  nav li {
    display: inline;
    margin-right: 20px;
  }
  
  nav a {
    color:#333;
    text-decoration: none;
    transition: color 0.3s; 
  }
  
  nav a:hover {
    color: #00a1e0; 
  }

  button{
    cursor: pointer;
    border: 0;
    border-radius: 4px;
    font-weight: 600;
    margin: 0 10px;
    width: 200px;
    padding: 10px 0;
    box-shadow: 0 0 20px rgba(104, 85, 224, 0.2);
    transition: 0.4s;
  }

  .header-button{
    color: rgb(104, 85, 224);
    background-color: rgba(255, 255, 255, 1);
    border: 1px solid rgba(104, 85, 224, 1);
  }

  .header-button1 {
    color: white;
    background-color: rgba(104, 85, 224, 1);
  }
  
  button:hover {
    color: white;
    /* width:; */
    box-shadow: 0 0 20px rgba(104, 85, 224, 0.6);
    background-color: rgba(104, 85, 224, 1);
  }

`
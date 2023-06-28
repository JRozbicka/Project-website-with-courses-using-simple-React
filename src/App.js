import React from "react";

export class App extends React.Component{
  state= {
    // global state
    isLoading: false,
    hasError: false,
    errorMessage:'',
    isInfoDisplayed: false,
    infoMessage:' ',
    // user state
    isUserLoggedIn:'',
    userDisplayName:'',
    userEmail:'',
    userAvatar:'',
    // router state
    notLoginUserRoute: 'Login', // newAccount or forgot password
    //login page state
    loginEmail:'',
    loginPassword: '',
    // create account page
    createAccountEmail: '',
    createAccountPassword: '',
    createAccountRepeatPassword: '',
    // recover password
    recoverPasswordEmail: '',
    // course list page
    courses:null,
    searchPhrases:''
  }
  render(){

  
    return(
        <div>
        
          Project website with courses simple React!
          <h1>prickled</h1>
          <h1>test2</h1>
        </div>
    )
}
}
export default App
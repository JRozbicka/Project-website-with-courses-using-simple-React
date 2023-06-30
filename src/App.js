import React from "react";
import FullPageLoader from "./components/fullPageLoader";

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
        <h1>CodeRoad</h1>
        <FullPageLoader/>
        </div>
    )
}
}
export default App

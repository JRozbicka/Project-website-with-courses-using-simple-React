import React from "react";
import FullPageLoader from "./components/fullPageLoader";
import Typography from "./components/Typography";
import Button from './components/Button'
import FullPageMessage from "./components/FullPageMessage/FullPageMessage";
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
const {isLoading,isInfoDisplayed,infoMessage,
hasError,
errorMessage} = this.state
  
    return(
        <div>
        <h1>CodeRoad</h1>
        {isLoading ?
        <FullPageLoader/>
        :
        null
        }
        <Typography
        variant={'h1'}>
          header 1
        </Typography>
        <Typography
        variant={'h3'}>
          header 3
        </Typography>
        <Typography
        variant={'button'}>
          button
        </Typography>
        <br/>
        <Button
        variant={'contained'}
        color={'primary'}>
          CONTAINED PRIMARY
        </Button>
        <br/>
        <Button variant={'contained'}
        color={'secondary'}>
          CONTAINED SECONDARY
        </Button>
        <br/>
        <Button variant={'text'}
        color={'primary'}>
          TEXT PRIMARY
        </Button>
       
        {isInfoDisplayed ?
        <FullPageMessage
        message={infoMessage}
        iconVariant={'info'}
        onButtonClick={console.log()}/>
        :
        null}
             {hasError ?
        <FullPageMessage
        message={errorMessage}
        iconVariant={'error'}
        onButtonClick={console.log()}/>
        :
        null}
        </div>
    )
}
}
export default App

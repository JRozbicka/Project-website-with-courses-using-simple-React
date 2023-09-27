import React from "react";


import Message from "./components/Message";
import FullPageLoader from "./components/FullPageLoader";
import FullPageMessage from "./components/FullPageMessage/FullPageMessage";
import FullPageLayout from "./components/FullPageLayout";
import LoginForm from "./components/LoginForm/LoginForm"
export class App extends React.Component {
  state = {
    // global state
    isLoading: false,
    hasError: false,
    errorMessage: ' ',
    isInfoDisplayed: false,
    infoMessage: '',

    // user/auth state
    isUserLoggedIn: false,
    userDisplayName: '',
    userEmail: '',
    userAvatar: '',

    // router state
    notLoginUserRoute: 'LOGIN', // 'NEW-ACCOUNT' or 'FORGOT-PASSWORD'

    // login page state
    loginEmail: '',
    loginPassword: '',

    // create account page
    createAccountEmail: '',
    createAccountPassword: '',
    createAccountRepeatPassword: '',

    // recover password page
    recoverPasswordEmail: '',

    // course list page
    courses: null,
    searchPhrase: ''
  }

  render () {
    const {
      isLoading,
      isInfoDisplayed,
      infoMessage,
      hasError,
      errorMessage,
      notLoginUserRoute
    } = this.state

    return (
      <div>
{notLoginUserRoute === 'Login' ?
<LoginForm
 
 
 /> :
 null
}
 
        {
          isLoading ?
            <FullPageLoader />
            :
            null
        }
        

        {
          isInfoDisplayed ?
            <FullPageMessage
              message={infoMessage}
              iconVariant={'info'}
              onButtonClick={console.log}
            />
            :
            null
        }

        {}

        {
          hasError ?
            <FullPageLayout
              className={'wrapper-class'}
            >
              <Message
                className={'regular-class'}
                message={errorMessage}
                iconVariant={'error'}
                onButtonClick={console.log()}
              />
            </FullPageLayout>
            :
            null
        }

      </div>
    )
  }
}

export default App

export const emailInputField= () => {
    return cy.get('#login-email');
  };
  export const sendRegistrationLinkButton= () => {
    return  cy.get('[class="u3-btn btn-primary u3-login-btn btn-md"]');
  };
  export const getDateInputField= () => {
    return cy.get('#second-auth-day');
  };
  export const getMonthInputField= () => {
    return cy.get('#second-auth-month');
  };
  export const getYearInputField= () => {
    return cy.get('#second-auth-year');
  };

  export const logInButton= () => {
    return cy.get('[class="u3-btn btn-primary u3-second-auth-btn btn-md"]');
  };
  export const logOutButton= () => {
    return ;
  };
  export const onBoardingSkipButton= () => {
    return cy.get('[type="button"]:nth-child(2)');
  };
  
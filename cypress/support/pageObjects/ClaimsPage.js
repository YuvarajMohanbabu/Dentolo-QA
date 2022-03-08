export const getClaimsSection= () => {
    return cy.get('[class="u3-px-md-2 u3-nav-menu-desktop-link u3-py-md-1"]:nth-child(2)');
  };
  export const selectSkipOnBoardingButton= () => {
    return cy.get('.u3-onboard-col > .u3-btn');
  };
  export const getNewClaimsButton= () => {
    return cy.get('[href="/user-claims/dentolo/new"]');
  };
  export const SelectRadioButtonOption= () => {
    return cy.get('#u3-radio-button-0');
  };
  export const getContinueButton= () => {
    return cy.get('[class="u3-btn btn-primary undefined btn-sm"]');
  };
  export const treatmentDay= () => {
    return cy.get('#u3-dateinput-day-cleaning-form');
  };
  export const treatmentMonth= () => {
    return cy.get('#u3-dateinput-month-cleaning-form');
  };
  export const treatmentYear= () => {
    return cy.get('#u3-dateinput-year-cleaning-form');
  };
  export const invoiceAmount= () => {
    return cy.get('#u3-dateinput-year-cleaning-form');
  };
  export const ContinueButton= () => {
    return cy.get(' [class="u3-btn btn-primary u3-ml-1 btn-sm"]');
  };
  export const errorMessage= () => {
    return cy.get('[class="u3-dateinput__error-message u3-mt-1"]');
  };
 
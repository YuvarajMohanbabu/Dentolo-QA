export const getClaimsSection = () => {
  return cy.get(
    '[class="u3-px-md-2 u3-nav-menu-desktop-link u3-py-md-1"]:nth-child(2)'
  );
};
export const selectSkipOnBoardingButton = () => {
  return cy.get(".u3-onboard-col > .u3-btn");
};
export const getNewClaimsButton = () => {
  return cy.get('[href="/user-claims/dentolo/new"]');
};
export const SelectRadioButtonOption = () => {
  return cy.get("#u3-radio-button-0");
};
export const getContinueButton = () => {
  return cy.get('[class="u3-btn btn-primary undefined btn-sm"]');
};

export const getInvoiceAmountInput = () => {
  return cy.get("#cleaning-form-payment");
};
export const getWeiterButton = () => {
  return cy.get(' [class="u3-btn btn-primary u3-ml-1 btn-sm"]');
  
};
export const getErrorMessage = () => {
  return cy.get('[class="u3-dateinput__error-message u3-mt-1"]');
};
export const getFileUploadButton = () => {
  return cy.get(".u3-file-upload-circle-plus");
};
export const getUploadedFiles = () => {
  return cy.get('[class="u3-claim-file-name u3-mb-1 "]');
};
export const getFailureStatusMessage = () => {
  return cy.get('[class="u3-claim-file-status u3-claim-file-status--failure"]');
};
export const getSuccessStatusMessage = () => {
  return cy.get(
    '[class="u3-label-tag align-self-start u3-claim-file-ready-to-upload"]'
  );
};
export const getSumbitButton = () => {
  return cy.get('[class="u3-btn btn-primary btn-sm btn-primary btn-sm"]')
};

export const SuccessScreenBanner = () => {
  return cy.get('[class="shadow-02dp bg-white u3-info-window u3-mb-2"]')
};
export const getBackToStartButton = () => {
  return cy.get('[class="btn-sm u3-mt-1 u3-mt-md-2 u3-mb-1 u3-mb-md-2 btn-outline"]')
};

export const getClaimStatus = () => {
  return cy.get('[class="u3-label-tag u3-label-tag-warning align-self-start"]')
};
export const getClaimDate = () => {
  return cy.get(":nth-child(1) > .u3-claim-status > .u3-btn")
};




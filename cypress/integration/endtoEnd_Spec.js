/// <reference types="Cypress" />
import {
  emailInputField,
  sendRegistrationLinkButton,
  getDateInputField,
  getMonthInputField,
  getYearInputField,
  logInButton,
  logOutButton,
  onBoardingSkipButton,
} from "../support/pageObjects/LoginPage.js";
import {
  getClaimsSection,
  selectSkipOnBoardingButton,
  getNewClaimsButton,
  SelectRadioButtonOption,
  weiterButton,
  invoiceAmount,
  getContinueButton,
  errorMessage,
  ContinueButton,
} from "../support/pageObjects/ClaimsPage";

import Utils from "../support/utilities.js";
import config from "../support/config.js";

const { invalidPdfFile, validPdfFile } = config.PdfFiles;

describe("Test suite", function () {
  const serverId = "uoaabm7v";
  const serverDomain = "uoaabm7v.mailosaur.net";
  const emailAddress = "yuvaraj@" + serverDomain;
  let magicLoginLink;
  //const dayjs =require('dayjs')

  const time = new Utils();
  //const fixturePath = 'sample-pdf-file.pdf'
  // const fixturePath1 = 'sample-pdf-download-10-mb.pdf'
  

  it("Homepage", () => {
    cy.visit('/login');

    emailInputField().type('yuvasmagy.ys@gmail.com')
sendRegistrationLinkButton().click()

    cy.mailosaurGetMessage(serverId,{
        sentTo:emailAddress
    }).then(email =>{
        cy.log(email.subject)
        magicLoginLink= email.html.links[0].href
        cy.visit(magicLoginLink)
    })
    
 getDateInputField().type('01')//change to day
 getMonthInputField().type('01')
 getYearInputField().type('2001')
 logInButton().click() 

    onBoardingSkipButton().click();
    
    getClaimsSection().click();
    selectSkipOnBoardingButton().click();
    getNewClaimsButton().click();
    SelectRadioButtonOption().should("be.checked");
    getContinueButton().click();
    // cy.get('[class="u3-dropdown-search__value-container u3-dropdown-search__value-container--has-value css-1hwfws3"]').select('Nein')

    //Date scenario
    time.getDate();
    time.enterValidDate();
   
    
  });
  it("Homepage 2", function () {
    cy.log("test");
  });
  
});

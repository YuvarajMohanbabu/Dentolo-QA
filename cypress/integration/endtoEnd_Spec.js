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
  selectRadioButtonOption,
  getInvoiceAmountInput,
  getContinueButton,
  getErrorMessage,
  getWeiterButton,
  getFileUploadButton,
  getUploadedFiles,
  getFailureStatusMessage,
  getSuccessStatusMessage,
  getSumbitButton,
  successScreenBanner,
  getClaimStatus,
  getClaimDate,
  getBackToStartButton,
} from "../support/pageObjects/ClaimsPage";
import {
  getProfileIcon,
  getLogoutButton,
} from "../support/pageObjects/LogoutPage";

import Utils from "../support/utilities/DatePicker.js";
import Login from "../support/utilities/MailServer.js";
import Consent from "../support/utilities/ConsentPopup.js";
import config from "../support/config.js";

const { invalidPdfFile, validPdfFile } = config.PdfFiles;
const {
  emailAddress,
  verificationDay,
  verificationMonth,
  verificationYear,
  invoiceAmount,
} = config.UserInputs;
const dateInputField = new Utils();
const mailServer = new Login();
const consentPopup = new Consent();
const dayjs = require("dayjs");
const DateValue = dayjs().format("DD.MM.YYYY");

describe("Test suite", () => {
  it("Submit a new claim", () => {
    cy.visit("/login");
    consentPopup.getConsentScreenAndClick();

    emailInputField().type(emailAddress);
    sendRegistrationLinkButton().click();
    mailServer.getMagicloginLink();
    getDateInputField().type(verificationDay);
    getMonthInputField().type(verificationMonth);
    getYearInputField().type(verificationYear);
    logInButton().click();
    onBoardingSkipButton().click();

    getClaimsSection().click();
    cy.location().should((location) => {
      expect(location.pathname).to.eq("/user-claims-info");
    });
    selectSkipOnBoardingButton().click();

    getNewClaimsButton().click();
    cy.location().should((location) => {
      expect(location.pathname).to.eq("/user-claims/dentolo/new");
    });

    selectRadioButtonOption().click().should("be.checked");
    getContinueButton().click();
    cy.location().should((location) => {
      expect(location.pathname).to.eq("/user-claims/dentolo/new/cleaning-form");
    });

    dateInputField.enterInvalidDate();
    getInvoiceAmountInput().type(invoiceAmount);
    getWeiterButton().should("be.enabled").click();
    getErrorMessage()
      .should("be.visible")
      .should("have.text", "Bitte geben Sie ein gültiges Datum ein");
    getWeiterButton().should("be.disabled");

    dateInputField.enterValidDate();
    getWeiterButton().click();
    cy.location().should((location) => {
      expect(location.pathname).to.eq(
        "/user-claims/dentolo/new/cleaning-form/submit"
      );
    });

    getFileUploadButton().attachFile(invalidPdfFile, {
      subjectType: "drag-n-drop",
    });

    getUploadedFiles().eq(0).should("have.contain", invalidPdfFile);
    getFailureStatusMessage()
      .contains("Datei zu groß (max. 10 MB)")
      .should("be.visible");

    getSumbitButton().should("be.disabled");
    getFileUploadButton().attachFile(validPdfFile, {
      subjectType: "drag-n-drop",
    });
    cy.wait(2000);

    getUploadedFiles().eq(1).should("have.contain", validPdfFile);
    getSuccessStatusMessage()
      .contains("Bereit zum Absenden")
      .should("be.visible");
    getSumbitButton().should("be.enabled").click({ force: true });

    cy.location().should((location) => {
      expect(location.pathname).to.eq("/user-claims/file-upload/success");
    });
    successScreenBanner().should("be.visible");

    getBackToStartButton()
      .contains("Zurück zur Startseite")
      .should("be.visible");

    getClaimsSection().click();
    cy.location().should((location) => {
      expect(location.pathname).to.eq("/user-claims-info");
    });
    cy.reload(true);

    getClaimStatus().eq(0).contains("Auszahlung").should("be.visible");
    cy.log(DateValue);
    getClaimDate().eq(0).contains(DateValue).should("be.visible");

    mailServer.getFileUploadEmailAndDisplay();

    cy.clearLocalStorage();
  });

  it("Logout", () => {
    getProfileIcon().click();
    getLogoutButton().contains("Abmelden").should("be.visible").click();
    cy.location().should((location) => {
      expect(location.pathname).to.eq("/login");
    });
  });
});

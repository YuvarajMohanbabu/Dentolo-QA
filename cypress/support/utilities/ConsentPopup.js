class consents {
  getConsentScreenAndClick() {
    cy.get("#usercentrics-root")
      .find('[class="sc-gsDKAQ jZWChu"]', { includeShadowDom: true })
      .click();
  }
}
export default consents;

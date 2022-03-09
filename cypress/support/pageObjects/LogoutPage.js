export const getProfileIcon = () => {
  return cy.get('[class="u3-nav-user__btn "]');
};
export const getLogoutButton = () => {
  return cy.get(
    '[class="u3-btn btn-outline u3-nav-user__options-logout btn-sm"]'
  );
};

const dayjs = require("dayjs");
const currentDay = dayjs().format("DD");
const currentMonth = dayjs().format("MM");
const currentYear = dayjs().format("YYYY");
let d1 = dayjs().add("90", "day");

class utilities {
  enterInvalidDate() {
    cy.log(dayjs().format("DD/MM/YYYY")); //Prints todays date

    const futureDay = d1.format("DD");
    const futureMonth = d1.format("MM");
    const futureYear = d1.format("YYYY");

    cy.get("#u3-dateinput-day-cleaning-form").type(futureDay);
    cy.get("#u3-dateinput-month-cleaning-form").type(futureMonth);
    cy.get("#u3-dateinput-year-cleaning-form").type(futureYear);
  }

  enterValidDate() {
    cy.get("#u3-dateinput-day-cleaning-form").clear().type(currentDay);
    cy.get("#u3-dateinput-month-cleaning-form").clear().type(currentMonth);
    cy.get("#u3-dateinput-year-cleaning-form").clear().type(currentYear);
  }
}
export default utilities;

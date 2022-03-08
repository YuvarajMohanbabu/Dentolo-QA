const dayjs = require('dayjs')
const currentDay= dayjs().format('DD');
const currentMonth= dayjs().format('MM');
const currentYear= dayjs().format('YYYY');
let d1 = dayjs().add('90', 'day');
class utilities{
    

 getDate(){
    cy.log(dayjs().format('DD/MM/YYYY'))  //Prints todays date
 

 const futureDay= d1.format('DD');
 const futureMonth=d1.format('MM');
 const futureYear= d1.format('YYYY');

  cy.get('#u3-dateinput-day-cleaning-form').type(futureDay)
  cy.get('#u3-dateinput-month-cleaning-form').type(futureMonth)
  cy.get('#u3-dateinput-year-cleaning-form').type(futureYear)
  cy.get('#cleaning-form-payment').type(70)

  
  //click
  cy.get(' [class="u3-btn btn-primary u3-ml-1 btn-sm"]').should('be.enabled').click()


  cy.get('[class="u3-dateinput__error-message u3-mt-1"]').should('be.visible').should('have.text','Bitte geben Sie ein gültiges Datum ein')
  cy.get(' [class="u3-btn btn-primary u3-ml-1 btn-sm"]').should('be.disabled')
  
 }

enterValidDate(){
    const dayjs = require('dayjs')
    const currentDay= dayjs().format('DD');
    const currentMonth= dayjs().format('MM');
    const currentYear= dayjs().format('YYYY');
    let d1 = dayjs().add('91', 'day');
    cy.get('#u3-dateinput-day-cleaning-form').clear().type(currentDay)
    cy.get('#u3-dateinput-month-cleaning-form').clear().type(currentMonth)
    cy.get('#u3-dateinput-year-cleaning-form').clear().type(currentYear)
    
  
}
currentDateValue(){
    const dayjs = require('dayjs')
    const DateValue= dayjs().format('DD.MM.YYYY')
    /*const currentDay= dayjs().format('DD');
    const currentMonth= dayjs().format('MM');
    const currentYear= dayjs().format('YYYY');*/
}
    

    

     
     
           

}
export default utilities ;
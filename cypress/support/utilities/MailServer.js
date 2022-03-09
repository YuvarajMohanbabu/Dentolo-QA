const serverId = "uoaabm7v";
const serverDomain = "uoaabm7v.mailosaur.net";
const emailAddress = "yuvaraj@" + serverDomain;
let magicLoginLink;

class mailServer {
  getMagicloginLink() {
    cy.mailosaurGetMessage(serverId, {
      sentTo: emailAddress,
    }).then((email) => {
      cy.log(email.subject);
      magicLoginLink = email.html.links[0].href;
      cy.visit(magicLoginLink);
    });
  }
  getFileUploadEmailAndDisplay(){
    cy.mailosaurGetMessage(serverId, {
        sentTo: emailAddress,
      }).then((email) => {
        cy.log(email.subject);
      });

  }
}

export default mailServer;

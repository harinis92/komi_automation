describe("Komi.io assessment", function () {
  it("Validate clicking on section title navigates to approriate module", function () {
    cy.xpath("//span[text()='Subscribe']").click();
    cy.xpath("//div[@class='d--flex align__items--center']")
      .contains("Subscribe")
      .should("be.inViewport");
    cy.xpath("//span[text()='Single Music']").click();
    cy.xpath("//div[@class='d--flex align__items--center']")
      .contains("Single Music")
      .should("be.inViewport");
    cy.xpath("//span[text()='Single Music']").click();
    cy.xpath("//div[@class='d--flex align__items--center']")
      .contains("Single Music")
      .should("be.inViewport");
    cy.xpath("//span[text()='Music Tracks']").click();
    cy.xpath("//div[@class='d--flex align__items--center']")
      .contains("Music Tracks")
      .should("be.inViewport");
    cy.xpath("//span[text()='Latest Singles']").click();
    cy.xpath("//div[@class='d--flex align__items--center']")
      .contains("Latest Singles")
      .should("be.inViewport");
    cy.xpath("//span[text()='New Video']").click();
    cy.xpath("//div[@class='d--flex align__items--center']")
      .contains("New Video")
      .should("be.inViewport");
    cy.xpath("//span[text()='Pre-Save Music']").click();
    cy.xpath("//div[@class='d--flex align__items--center']")
      .contains("Pre-Save Music")
      .should("be.inViewport");
  });

  it("Validate the More button functionality", function () {
    cy.xpath("//span[text()='More']").then(($span) => {
      cy.contains("More").click();
      cy.get(".ant-modal-content").should("be.inViewport");
      cy.xpath("//button[@aria-label='spotify-play-button']")
        .contains("Play")
        .click();
      //cy.url().should("include", "open.spotify.com");
    });
  });

  it("Validate the subscription form", function () {
    cy.xpath("//div[text()='Sign up for my newsletter']")
      .scrollIntoView()
      .then(($div) => {
        cy.xpath("//div[text()='Sign up for my newsletter']").click();
        cy.get("form").should("be.visible");
      });
    cy.get("#INPUT").type("test");
    cy.get("#EMAIL_ADDRESS").type("test@gmail.com");
    cy.get(".ant-form-item-control-input-content > .ant-btn").click();
    cy.get(".ant-message").should(
      "have.text",
      "The form was submitted successfully. Thank you!"
    );
  });
});

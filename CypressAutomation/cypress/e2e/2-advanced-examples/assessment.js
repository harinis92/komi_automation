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
});

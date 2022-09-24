describe("Rick and Ricks", function () {
  it("page can be opened", function () {
    cy.visit("http://localhost:3000");
    cy.contains("Rick and Ricks");
    cy.contains("Rick Sanchez");
  });

  it("The search works", function () {
    cy.visit("http://localhost:3000");
    cy.get("input:first").type("rob");
    cy.wait(1000);
    cy.contains("Robot Rick");
    cy.contains("Rick Sanchez").should("not.exist");
  });
});

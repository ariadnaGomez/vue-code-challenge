// https://docs.cypress.io/api/introduction/api.html

describe('Product list and cart', () => {
  it('Should render product list and cart', () => {
    cy.visit('/')
    cy.contains('Product List')
    cy.contains('Cart')
    cy.get('.row')
      .children()
      .should('have.length', 1000)
  })

  it('Should render only product list on mobile', () => {
    cy.viewport(550, 750)
    cy.visit('/')
    cy.contains('Cart').should('not.visible')
  })

  it('Should render only cart on mobile when clicking navigate button', () => {
    cy.viewport(550, 750)
    cy.visit('/')
    cy.get(
      ':nth-child(1) > .v-toolbar > .v-toolbar__content > .d-sm-none > .v-btn__content > .v-icon'
    ).click()
    cy.contains('Product list').should('not.visible')
  })

  it('should render cart items when clicking add button', () => {
    cy.visit('/')
    cy.get(
      ':nth-child(1) > .v-lazy > .mx-auto > .v-card__actions > [data-testid=addToCart]'
    ).click()
    cy.get(
      ':nth-child(5) > .v-lazy > .mx-auto > .v-card__actions > [data-testid=addToCart]'
    ).click()
    cy.get(':nth-child(1) > .flex-grow-1 > .v-card__title').contains(
      'Unbranded Metal Chair'
    )
    cy.get(':nth-child(2) > .flex-grow-1 > .v-card__title').contains(
      'Incredible Fresh Ball'
    )
  })

  it('should calculate cart total price', () => {
    cy.visit('/')
    cy.get(
      ':nth-child(3) > .v-lazy > .mx-auto > .v-card__actions > [data-testid=addToCart]'
    ).click()
    cy.get(
      ':nth-child(7) > .v-lazy > .mx-auto > .v-card__actions > [data-testid=addToCart]'
    ).click()
    cy.get('[data-testid=total-cart-amount] > :nth-child(3)').contains('128$')
  })
})

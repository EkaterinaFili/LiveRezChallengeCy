
function favoriteOnOffPropertyBtn(propertyName) {
    cy.contains('article', propertyName).find('[type="button"]').then(saveButtons => {
        cy.wrap(saveButtons)
            .first()
            .click()
            .should('be.visible')
        cy.wrap(saveButtons)
            .first()
            .click()
            .should('be.visible')
    })
}

export class NavigationPage {

    selectPropertyName() {
        favoriteOnOffPropertyBtn('069 Sawyer Two')
    }

    saveProperties() {
        cy.get('[class="SearchResultList__ResultWrapper-sc-1elxpj1-0 ddYjZX SearchContent__ListResults-sc-15gjq1q-2 WVNqf bt-results-list"]')
            .find('[type="button"]')
            .eq(0)
            .click({ force: true })

        cy.get('[class="SearchResultList__ResultWrapper-sc-1elxpj1-0 ddYjZX SearchContent__ListResults-sc-15gjq1q-2 WVNqf bt-results-list"]')
            .find('[type="button"]')
            .eq(1)
            .click({ force: true })

        cy.get('[class="SearchResultList__ResultWrapper-sc-1elxpj1-0 ddYjZX SearchContent__ListResults-sc-15gjq1q-2 WVNqf bt-results-list"]')
            .find('[type="button"]')
            .eq(4)
            .click({ force: true })
    }

    verifySaveProperties() {
        cy.get('[class="SearchContent__StyledHeader-sc-15gjq1q-6 eKrPCZ bt-search__header"]')
            .find('span')
            .should('contain', '3')
    }

    verifySectionWhereSaveProperties() {
        cy.get('[class="SearchContent__StyledHeader-sc-15gjq1q-6 eKrPCZ bt-search__header"]')
        cy.contains('.bt-favorites-link__count', '3')
            .click({ force: true })
        cy.get('.bt-results-list__header').find('[class="bt-result-count"]')
            .should('contain', '3')
    }

    unsaveProperties() {
        cy.get('[class="SearchResultList__ResultWrapper-sc-1elxpj1-0 ddYjZX SearchContent__ListResults-sc-15gjq1q-2 WVNqf bt-results-list"]')
            .find('[type="button"]').click({ multiple: true })
        cy.get('[class="SearchContent__SearchResultWrapper-sc-15gjq1q-4 cypJWj bt-results-list__wrapper"]')
            .should('contain', 'Looks like you have no favorites.')
    }

    verifyIndicatorSavesInPropertySection() {
        cy.contains('article', '.Christian Test 11').click()
        cy.get('span').should('contain', 'Saved')
    }

    indicatorToggledOnOffInPropertySection() {
        cy.get('[aria-label="Save as favorite .Christian Test 11"]')
            .click()
            .should('contain', 'Save')
    }

    verifyTotalSaveCountInMainHub() {
        cy.go('back')
        cy.wait(200)
        cy.get('[class="SearchContent__BtSearchWrapper-sc-15gjq1q-0 eKqyrn bt-search"]')
            .should('contain', '35 Results', '0')
    }

    selectNumberBedroomAndBathroom() {
        cy.get('[class="SearchContent__StyledHeader-sc-15gjq1q-6 eKrPCZ bt-search__header"]')
            .contains('button', 'Filters')
            .click({ force: true })
        // Select the count of bedroom 
        cy.get('.bt-modal-content')
            .find('[type="button"]').then(roundButtons => {
                cy.wrap(roundButtons)
                    .eq(2).click()
                cy.wait(500)

                cy.wrap(roundButtons)
                    .eq(2).click().should('exist')
                cy.wait(500)
                // Select the count of bathroom
                cy.wrap(roundButtons)
                    .eq(4).click()
                cy.wait(500)

                cy.wrap(roundButtons)
                    .eq(4).click()
                cy.wait(500)

                cy.wrap(roundButtons)
                    .eq(4).click()
                cy.wait(500)
                // Verify how many properties exist with our query
                cy.get('[class="ReactModal__Content ReactModal__Content--after-open bt-modal__content"]')
                    .should('contain', '18 Results')
            })
    }

    clearFiltersBtn() {
        cy.contains('[type="button"]', 'Clear Filters').click()
        cy.get('[class="ReactModal__Content ReactModal__Content--after-open bt-modal__content"]')
            .should('contain', '35 Results')
    }

    viewResoultsCloseAndVerifyDisplayProperty() {
        cy.contains('[type="button"]', 'View results').click({ force: true })
        cy.get('[class="SearchContent__BtSearchWrapper-sc-15gjq1q-0 eKqyrn bt-search"]')
            .should('contain', '35 Results', '0')
    }
}

export const navigateTo = new NavigationPage()
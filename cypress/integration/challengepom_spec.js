import { navigateTo } from "../support/page_objects /navigationPage"

describe('I want the ability to save properties I’m looking at so they can be reviewed at a later time', () => {

    beforeEach('Open application', () => {
        cy.openMainPage()
    })

    it('Each property on the hub should have an easy Favorite on/off button indicating that this property has been saved.', () => {

        navigateTo.selectPropertyName()
    })

    it('The hub should have an indicator on the number of properties selected as saved', () => {
        // Click on the indicator and save few properties
        navigateTo.saveProperties()
        // Verify this indicator should show the total count of saved properties.
        navigateTo.verifySaveProperties()
        //Verify when the indicator is clicked the hub should only display saved properties.
        navigateTo.verifySectionWhereSaveProperties()
        // I can un-save a property from the filtered view.
        navigateTo.unsaveProperties()
    })

    it('The hub should have an indicator on the number of properties selected as saved', () => {
        // Click on the indicator and save few properties
        navigateTo.saveProperties()
        // Verify there should be an indicator showing the property has been saved.
        navigateTo.verifyIndicatorSavesInPropertySection()
        // This indicator can be toggled on or off from the property detail’s view.
        navigateTo.indicatorToggledOnOffInPropertySection()
        // This change (saved/un-saved) should reflect correctly on the total saved count on the main hub
        navigateTo.verifyTotalSaveCountInMainHub()
    })
})

describe('As a user I want the ability to filter properties based on the number of bedrooms and bathrooms', () => {

    beforeEach('Open application', () => {
        cy.openMainPage()
    })

    it('The Filters selection should allow the user to select the number of either bedrooms and/or bathrooms.', () => {
        navigateTo.selectNumberBedroomAndBathroom()
        //The Clear Filters button should reset both filters to their lower value.
        navigateTo.clearFiltersBtn()
        // The View Results button should close the Filter Results page and display properties on the hub meeting the criteria.
        navigateTo.viewResoultsCloseAndVerifyDisplayProperty()
    })
})


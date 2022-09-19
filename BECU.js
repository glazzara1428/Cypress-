//Home Page for credit unions 
//describe('Automation test for Consumer Checkout', () => {
  //  it('Visits the Credit Union Website', () => {
    //    cy.visit('http://localhost:8080/store')
//***Come back and fix this submit button because there are two buttons with the form submit on them */
    //    cy.get('button[type="submit"]')
    //      .click()
    describe('Automation test for Consumer Checkout', () => {
      it('Visits the Credit Union Website', () => {
       // cy.visit('http://localhost:8080/store/Product?productId=BecuCashCard')
       cy.visit('http://localhost:8080/store/Product?productId=BecuCashCard')
       cy.get('.mdc-button--raised').first().click({ force: true })
        //next page 

        function makeid(length) {
          var result = ''; 
          var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01223456789'; 
          var charactersLength = characters.length; 
          for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength)); 
          }
          return result;
        }
        console.log(makeid(5));

        // CREATE ACCOUNT 

            cy.get('#firstName')
            .type('John') //change first name and last name 
            cy.get('#lastName')
            .type('Roland')
            cy.get('#emailAddress')
            .type(makeid(6) + "@gmail.com")
            cy.get('#newPassword')
            .type('alphabet12!')
            cy.get('#newPasswordVerify') 
            .type('alphabet12!')
            cy.get('button').last().click({ force: true })
            .wait(100)

            
//next page 

        // Intend to apply for joint credit 
        cy.get('.mdc-checkbox__native-control')
        cy.get('button').last().click({ force: true }) //not applying


        // RESIDENTIAL ADDRESS 

        cy.get('#address1')
        .type('1123 Preston Road')
        cy.get('#postalCode')
        .type('75023')
        cy.get('#city')
        .type('Plano')
        cy.get('.mdc-select__anchor').first().click();
        cy.contains('Idaho').click()
        cy.contains('Yes')
        .click()
        cy.get('.mdc-button__ripple').last().click({force: true})

//next page 

      // MOBILE PHONE 

        cy.get('#contactNumber')
        .type('2242441063')
        cy.get('#contactMechPurposeId').contains('Home').first().click({force: true})
        cy.get('.mdc-button__ripple').last().click({force: true})
//next page 

      // DATE OF BIRTH 

        cy.get('#birthDate')
        .type('11271998')
        cy.get('.mdc-button__ripple').last().click({force: true})
//next page 

      // SOCIAL SECURITY NUMBER 

        cy.get('#idValue')
        .type('666883995')
        cy.get('.mdc-button__ripple').last().click({force: true})
//next page 

      // MARITAL STATUS 

      cy.get('#maritalStatusEnumId').contains('Married').first().click({force: true})
      cy.get('.mdc-button__ripple').last().click({force: true})   
//next page 

      // HOUSING 

        cy.get('#residenceStatusEnumId').contains('Rent').first().click({force: true})
        cy.get('#housing-payment')
        .type('1000')
        cy.get('.mdc-button__ripple').last().click({force: true})



        //FINACES 

        cy.get('#financialAssets').contains('$0 - $4,999').first().click({force: true})
        cy.get('#employmentStatus').contains('Full Time').first().click({force: true})
        cy.get('#employerName')
        .type('Alkami')
        cy.get('#jobTitle')
        .type('Engineer')
        cy.get('#annualIncome')
        .type('10000')
        cy.get('.mdc-button__ripple').last().click({force: true})

//next page 

        // AFFINITY CARD BRANDING 
        cy.get('.affinity-card-option').first().click()
        cy.get('.mdc-button__ripple').last().click({force: true})

        // TERMS AND CONDITIONS 
        cy.get('.mdc-checkbox__native-control').first().click()
        cy.get('.mdc-button__ripple').last().click({force: true})



        //next page 
        it('checks all checkboxes with one command', () => {
            cy.get('#check input[type="checkbox"]')
              .as('checkboxes')
              .check()
        
            cy.get('@checkboxes')
              .each(checkbox => {
                expect(checkbox[0].checked).to.equal(true)
            cy.get('button[type="Continue"]')
                .click()     
              })
          })
        })

    })


    // Funding Amount 
// cy.get('#amount-input')
//.type('1000')
//cy.get('.mdc-button__ripple').last().click({force: true})
//cy.get('#titleOnAccount-input')
//.type('Isabella Gold')
//cy.get('.mdc-select__anchor').first().click()
//cy.contains('Checking').click()
//cy.get('#bankName-input')
//.type('Chase')
//cy.get('#accountNumber')
//.type('12345902')
//cy.get('#confirmAccountNumber-input')
//.type('12345902')
//cy.get('routingNumber-input')
//.type('90343202')
//cy.get('.mdc-button__ripple').last().click({force: true})

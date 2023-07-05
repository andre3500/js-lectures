describe('Parametrized test HOMEWORK - 1', ()=>{

      it(`Test for text`, () => { 
        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
        cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
        cy.get('[title="Forms"]').click();
        cy.get('[title="Form Layouts"]').click();
        cy.get('input[placeholder="First Name"]').type('Kolya');
        cy.get('input[placeholder="Last Name"]').type('Nekolya');
        cy.get('input[id="inputEmail"]').type("mail@mail.mail");
        cy.get('input[placeholder="Website"]').type('nema.com');
        cy.get('[class="appearance-filled size-medium shape-rectangle status-basic nb-transition"]').click();
      })
    })
  
    describe('Parametrized test HOMEWORK - 2', ()=>{
    
          it(`Test for text`, () => { 
            cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
            cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
            cy.get('[title="Forms"]').click();
            cy.get('[title="Form Layouts"]').click();
            cy.get('input[id="inputEmail3"]').type("yes@no.yes");
            cy.get('input[id="inputPassword3"]').type('1234Test!');
            cy.get('div > div > nb-checkbox > label > span.custom-checkbox').click();
            cy.get('[class="appearance-filled size-medium shape-rectangle status-warning nb-transition"]').click()
          })
        })
      



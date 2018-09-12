import { browser, by, By, protractor, element, $$, ProtractorBrowser, ProtractorExpectedConditions } from 'protractor';
import { SBHomePagePO } from '../PageObjects/ScheduleBuilder-page-po';

describe('Schedule Builder:', function () {
    browser.ignoreSynchronization = true;
    // browser.waitForAngularEnabled(false);
    var until = protractor.ExpectedConditions;
    const objAddActivity = SBHomePagePO.AddActivity;

    // Navigate to the Application 
    beforeEach(async function () {
        SBHomePagePO.navigateToHome();
        await browser.driver.manage().window().maximize();
        browser.driver.wait(until.presenceOf(objAddActivity), 10000, 'Element taking too long to appear in the DOM');
        expect(objAddActivity.isElementPresent).toBeTruthy();

    })

    // Run First Test
    it('verify warning on adding activity without any data', async function () {
        // Click on Add Activity Button    
        objAddActivity.click();
        await browser.driver.wait(until.elementToBeClickable(SBHomePagePO.ActivityTitle), 5000, 'Element taking too long to appear in the DOM');
        expect(SBHomePagePO.ActivityTitle.isDisplayed()).toBeTruthy();
        element(by.id('addNewObject')).click();

        await browser.driver.wait(until.elementToBeClickable(SBHomePagePO.warningMessage), 5000, 'Element taking too long to appear in the DOM');
        if (expect(SBHomePagePO.warningMessage.isDisplayed()).toBeTruthy()) {
            expect((await SBHomePagePO.warningMessage.getText()).trim()).toBe('No day selected. Please select the day(s) that you would like to add an activity to.')

            await SBHomePagePO.confirmButton.click();


        }
        browser.sleep(1000);
    });

    // Run Second Test
    it('Test Add Activity Feature', async function () {

        // Click on Add Activity Button    
        objAddActivity.click();
        await browser.driver.wait(until.elementToBeClickable(SBHomePagePO.ActivityTitle), 5000, 'Element taking too long to appear in the DOM');
        expect(SBHomePagePO.ActivityTitle.isDisplayed()).toBeTruthy();

        // Using await to get response of promise   
        var defaultActivity = await SBHomePagePO.ActivityTitle.getAttribute('placeholder');
        expect(defaultActivity).toBe('Activity title');
        console.log('Default value for Title is ' + defaultActivity);

        // Clear the textbox if there are any values 
        SBHomePagePO.ActivityTitle.clear();
        SBHomePagePO.ActivityTitle.sendKeys('Test Activity 1');

        var strActivityTitle = await SBHomePagePO.ActivityTitle.getAttribute('value');
        expect(strActivityTitle).toBe('Test Activity 1');
        console.log('New value for Title is ' + strActivityTitle);

        // Select a random color from the color picker  
        // Select Red Color    

        await SBHomePagePO.colourPicker();
        browser.sleep(1500);
        await pickRandomColor(until, 5);
        // SBHomePagePO.ActivityTitle.click();
        //  Select Day(s) 

        SBHomePagePO.chkDatePicker.get(0).click();
        SBHomePagePO.chkDatePicker.get(2).click();
        SBHomePagePO.chkDatePicker.get(4).click();

        // Select a random Background Color
        element(by.id('spanfull')).click();
        /* until.visibilityOf(browser, elm).to */
        browser.sleep(1500);
        await pickRandomColor(until, 3);
        browser.sleep(1500);

        /* SBHomePagePO.ActivityTitle.click(); */

        // Select and Verify Start TIme fields - Default values and value after selection

        var strDefStartHour = await SBHomePagePO.startTimeHr.$('option:checked').getText();
        expect(strDefStartHour).toBe('Starting hour');
        console.log('Default value is ' + strDefStartHour);

        SBHomePagePO.startTimeHr.sendKeys('9 AM');

        var strStartHour = await SBHomePagePO.startTimeHr.$('option:checked').getText();
        expect(strStartHour).toBe('9 AM');
        console.log('After selection - the value is ' + strStartHour);

        var strDefStartMin = await SBHomePagePO.startTimeMin.$('option:checked').getText();
        expect(strDefStartMin).toBe('00');
        console.log('Default value is ' + strDefStartMin);

        SBHomePagePO.startTimeMin.sendKeys('20');

        var strStartMin = await SBHomePagePO.startTimeMin.$('option:checked').getText();
        expect(strStartMin).toBe('20');
        console.log('After selection - the value is ' + strStartMin);

        // Select and Verify End TIme fields - Default values and value after selection

        var strDefEndHour = await SBHomePagePO.EndTimeHr.$('option:checked').getText();
        expect(strDefEndHour).toBe('Ending hour');
        console.log('Default value is ' + strDefEndHour);

        SBHomePagePO.EndTimeHr.sendKeys('11 AM');

        var strEndHour = await SBHomePagePO.EndTimeHr.$('option:checked').getText();
        expect(strEndHour).toBe('11 AM');
        console.log('After selection - the value is ' + strEndHour);

        var strDefEndMin = await SBHomePagePO.EndTimeMin.$('option:checked').getText();
        expect(strDefEndMin).toBe('00');
        console.log('Default value is ' + strDefEndMin);

        SBHomePagePO.EndTimeMin.sendKeys('05');

        var strEndMin = await SBHomePagePO.EndTimeMin.$('option:checked').getText();
        expect(strEndMin).toBe('05');
        console.log('After selection - the value is ' + strEndMin);


        // Enter Description

        var defaultDescription = await SBHomePagePO.DecriptionBox.getAttribute('placeholder');
        expect(defaultDescription).toBe('Extra lines. (Instructor, location etc.)');
        console.log('Default value is ' + defaultDescription);

        SBHomePagePO.DecriptionBox.clear();
        SBHomePagePO.DecriptionBox.sendKeys('Adding a new activity for testing.');

        var actualDescription = await SBHomePagePO.DecriptionBox.getAttribute('value');
        expect(actualDescription).toBe('Adding a new activity for testing.');
        console.log('Entered value is ' + actualDescription);

        // Click on Add Activity        
        element(by.id('addNewObject')).click();

        browser.sleep(3000);
    });
});

async function pickRandomColor(until: ProtractorExpectedConditions, color = null) {
    let elm;
    const elmList = element.all(by.css('div.full-spectrum:not(.sp-hidden) .sp-thumb-el.sp-thumb-light'));
    if (color) {
        elm = elmList.get(color);
    } else {
        const maxValue = await elmList.count();
        const randomColor = elmList.get(Math.floor(Math.random() * (maxValue - 1)));
        elm = randomColor;
    }
    await browser.driver.wait(until.presenceOf(elm), 5000, 'Element taking too long to appear in the DOM');
    await browser.driver.wait(until.elementToBeClickable(elm), 5000, 'Element taking too long to appear in the DOM');
    elm.click();
}

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const ScheduleBuilder_page_po_1 = require("../PageObjects/ScheduleBuilder-page-po");
describe('Schedule Builder:', function () {
    protractor_1.browser.ignoreSynchronization = true;
    // browser.waitForAngularEnabled(false);
    var until = protractor_1.protractor.ExpectedConditions;
    const objAddActivity = ScheduleBuilder_page_po_1.SBHomePagePO.AddActivity;
    // Navigate to the Application 
    beforeEach(function () {
        return __awaiter(this, void 0, void 0, function* () {
            ScheduleBuilder_page_po_1.SBHomePagePO.navigateToHome();
            yield protractor_1.browser.driver.manage().window().maximize();
            protractor_1.browser.driver.wait(until.presenceOf(objAddActivity), 10000, 'Element taking too long to appear in the DOM');
            expect(objAddActivity.isElementPresent).toBeTruthy();
        });
    });
    // Run First Test
    it('verify warning on adding activity without any data', function () {
        return __awaiter(this, void 0, void 0, function* () {
            // Click on Add Activity Button    
            objAddActivity.click();
            yield protractor_1.browser.driver.wait(until.elementToBeClickable(ScheduleBuilder_page_po_1.SBHomePagePO.ActivityTitle), 5000, 'Element taking too long to appear in the DOM');
            expect(ScheduleBuilder_page_po_1.SBHomePagePO.ActivityTitle.isDisplayed()).toBeTruthy();
            protractor_1.element(protractor_1.by.id('addNewObject')).click();
            yield protractor_1.browser.driver.wait(until.elementToBeClickable(ScheduleBuilder_page_po_1.SBHomePagePO.warningMessage), 5000, 'Element taking too long to appear in the DOM');
            if (expect(ScheduleBuilder_page_po_1.SBHomePagePO.warningMessage.isDisplayed()).toBeTruthy()) {
                expect((yield ScheduleBuilder_page_po_1.SBHomePagePO.warningMessage.getText()).trim()).toBe('No day selected. Please select the day(s) that you would like to add an activity to.');
                yield ScheduleBuilder_page_po_1.SBHomePagePO.confirmButton.click();
            }
            protractor_1.browser.sleep(1000);
        });
    });
    // Run Second Test
    it('Test Add Activity Feature', function () {
        return __awaiter(this, void 0, void 0, function* () {
            // Click on Add Activity Button    
            objAddActivity.click();
            yield protractor_1.browser.driver.wait(until.elementToBeClickable(ScheduleBuilder_page_po_1.SBHomePagePO.ActivityTitle), 5000, 'Element taking too long to appear in the DOM');
            expect(ScheduleBuilder_page_po_1.SBHomePagePO.ActivityTitle.isDisplayed()).toBeTruthy();
            // Using await to get response of promise   
            var defaultActivity = yield ScheduleBuilder_page_po_1.SBHomePagePO.ActivityTitle.getAttribute('placeholder');
            expect(defaultActivity).toBe('Activity title');
            console.log('Default value for Title is ' + defaultActivity);
            // Clear the textbox if there are any values 
            ScheduleBuilder_page_po_1.SBHomePagePO.ActivityTitle.clear();
            ScheduleBuilder_page_po_1.SBHomePagePO.ActivityTitle.sendKeys('Test Activity 1');
            var strActivityTitle = yield ScheduleBuilder_page_po_1.SBHomePagePO.ActivityTitle.getAttribute('value');
            expect(strActivityTitle).toBe('Test Activity 1');
            console.log('New value for Title is ' + strActivityTitle);
            // Select a random color from the color picker  
            // Select Red Color    
            yield ScheduleBuilder_page_po_1.SBHomePagePO.colourPicker();
            protractor_1.browser.sleep(1500);
            yield pickRandomColor(until, 5);
            // SBHomePagePO.ActivityTitle.click();
            //  Select Day(s) 
            ScheduleBuilder_page_po_1.SBHomePagePO.chkDatePicker.get(0).click();
            ScheduleBuilder_page_po_1.SBHomePagePO.chkDatePicker.get(2).click();
            ScheduleBuilder_page_po_1.SBHomePagePO.chkDatePicker.get(4).click();
            // Select a random Background Color
            protractor_1.element(protractor_1.by.id('spanfull')).click();
            /* until.visibilityOf(browser, elm).to */
            protractor_1.browser.sleep(1500);
            yield pickRandomColor(until, 3);
            protractor_1.browser.sleep(1500);
            /* SBHomePagePO.ActivityTitle.click(); */
            // Select and Verify Start TIme fields - Default values and value after selection
            var strDefStartHour = yield ScheduleBuilder_page_po_1.SBHomePagePO.startTimeHr.$('option:checked').getText();
            expect(strDefStartHour).toBe('Starting hour');
            console.log('Default value is ' + strDefStartHour);
            ScheduleBuilder_page_po_1.SBHomePagePO.startTimeHr.sendKeys('9 AM');
            var strStartHour = yield ScheduleBuilder_page_po_1.SBHomePagePO.startTimeHr.$('option:checked').getText();
            expect(strStartHour).toBe('9 AM');
            console.log('After selection - the value is ' + strStartHour);
            var strDefStartMin = yield ScheduleBuilder_page_po_1.SBHomePagePO.startTimeMin.$('option:checked').getText();
            expect(strDefStartMin).toBe('00');
            console.log('Default value is ' + strDefStartMin);
            ScheduleBuilder_page_po_1.SBHomePagePO.startTimeMin.sendKeys('20');
            var strStartMin = yield ScheduleBuilder_page_po_1.SBHomePagePO.startTimeMin.$('option:checked').getText();
            expect(strStartMin).toBe('20');
            console.log('After selection - the value is ' + strStartMin);
            // Select and Verify End TIme fields - Default values and value after selection
            var strDefEndHour = yield ScheduleBuilder_page_po_1.SBHomePagePO.EndTimeHr.$('option:checked').getText();
            expect(strDefEndHour).toBe('Ending hour');
            console.log('Default value is ' + strDefEndHour);
            ScheduleBuilder_page_po_1.SBHomePagePO.EndTimeHr.sendKeys('11 AM');
            var strEndHour = yield ScheduleBuilder_page_po_1.SBHomePagePO.EndTimeHr.$('option:checked').getText();
            expect(strEndHour).toBe('11 AM');
            console.log('After selection - the value is ' + strEndHour);
            var strDefEndMin = yield ScheduleBuilder_page_po_1.SBHomePagePO.EndTimeMin.$('option:checked').getText();
            expect(strDefEndMin).toBe('00');
            console.log('Default value is ' + strDefEndMin);
            ScheduleBuilder_page_po_1.SBHomePagePO.EndTimeMin.sendKeys('05');
            var strEndMin = yield ScheduleBuilder_page_po_1.SBHomePagePO.EndTimeMin.$('option:checked').getText();
            expect(strEndMin).toBe('05');
            console.log('After selection - the value is ' + strEndMin);
            // Enter Description
            var defaultDescription = yield ScheduleBuilder_page_po_1.SBHomePagePO.DecriptionBox.getAttribute('placeholder');
            expect(defaultDescription).toBe('Extra lines. (Instructor, location etc.)');
            console.log('Default value is ' + defaultDescription);
            ScheduleBuilder_page_po_1.SBHomePagePO.DecriptionBox.clear();
            ScheduleBuilder_page_po_1.SBHomePagePO.DecriptionBox.sendKeys('Adding a new activity for testing.');
            var actualDescription = yield ScheduleBuilder_page_po_1.SBHomePagePO.DecriptionBox.getAttribute('value');
            expect(actualDescription).toBe('Adding a new activity for testing.');
            console.log('Entered value is ' + actualDescription);
            // Click on Add Activity        
            protractor_1.element(protractor_1.by.id('addNewObject')).click();
            protractor_1.browser.sleep(3000);
        });
    });
});
function pickRandomColor(until, color = null) {
    return __awaiter(this, void 0, void 0, function* () {
        let elm;
        const elmList = protractor_1.element.all(protractor_1.by.css('div.full-spectrum:not(.sp-hidden) .sp-thumb-el.sp-thumb-light'));
        if (color) {
            elm = elmList.get(color);
        }
        else {
            const maxValue = yield elmList.count();
            const randomColor = elmList.get(Math.floor(Math.random() * (maxValue - 1)));
            elm = randomColor;
        }
        yield protractor_1.browser.driver.wait(until.presenceOf(elm), 5000, 'Element taking too long to appear in the DOM');
        yield protractor_1.browser.driver.wait(until.elementToBeClickable(elm), 5000, 'Element taking too long to appear in the DOM');
        elm.click();
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlYzMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9TcGVjcy9zcGVjMy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkNBQXVIO0FBQ3ZILG9GQUFzRTtBQUV0RSxRQUFRLENBQUMsbUJBQW1CLEVBQUU7SUFDMUIsb0JBQU8sQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUM7SUFDckMsd0NBQXdDO0lBQ3hDLElBQUksS0FBSyxHQUFHLHVCQUFVLENBQUMsa0JBQWtCLENBQUM7SUFDMUMsTUFBTSxjQUFjLEdBQUcsc0NBQVksQ0FBQyxXQUFXLENBQUM7SUFFaEQsK0JBQStCO0lBQy9CLFVBQVUsQ0FBQzs7WUFDUCxzQ0FBWSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQzlCLE1BQU0sb0JBQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDbEQsb0JBQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLEVBQUUsS0FBSyxFQUFFLDhDQUE4QyxDQUFDLENBQUM7WUFDN0csTUFBTSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBRXpELENBQUM7S0FBQSxDQUFDLENBQUE7SUFFRixpQkFBaUI7SUFDakIsRUFBRSxDQUFDLG9EQUFvRCxFQUFFOztZQUNyRCxtQ0FBbUM7WUFDbkMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3ZCLE1BQU0sb0JBQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxzQ0FBWSxDQUFDLGFBQWEsQ0FBQyxFQUFFLElBQUksRUFBRSw4Q0FBOEMsQ0FBQyxDQUFDO1lBQ3hJLE1BQU0sQ0FBQyxzQ0FBWSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFD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
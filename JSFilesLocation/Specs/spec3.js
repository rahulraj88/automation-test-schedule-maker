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
            yield pickRandomColor(until, 5);
            //  Select Day(s) 
            ScheduleBuilder_page_po_1.SBHomePagePO.chkDatePicker.get(0).click();
            ScheduleBuilder_page_po_1.SBHomePagePO.chkDatePicker.get(2).click();
            ScheduleBuilder_page_po_1.SBHomePagePO.chkDatePicker.get(4).click();
            // Select a random Background Color
            yield protractor_1.element(protractor_1.by.id('spanfull')).click();
            yield pickRandomColor(until);
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
});
function pickRandomColor(until, color = null) {
    return __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.sleep(1500);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlYzMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9TcGVjcy9zcGVjMy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkNBQXVIO0FBQ3ZILG9GQUFzRTtBQUV0RSxRQUFRLENBQUMsbUJBQW1CLEVBQUU7SUFDMUIsb0JBQU8sQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUM7SUFDckMsd0NBQXdDO0lBQ3hDLElBQUksS0FBSyxHQUFHLHVCQUFVLENBQUMsa0JBQWtCLENBQUM7SUFDMUMsTUFBTSxjQUFjLEdBQUcsc0NBQVksQ0FBQyxXQUFXLENBQUM7SUFFaEQsK0JBQStCO0lBQy9CLFVBQVUsQ0FBQzs7WUFDUCxzQ0FBWSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQzlCLE1BQU0sb0JBQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDbEQsb0JBQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLEVBQUUsS0FBSyxFQUFFLDhDQUE4QyxDQUFDLENBQUM7WUFDN0csTUFBTSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBRXpELENBQUM7S0FBQSxDQUFDLENBQUE7SUFFRixrQkFBa0I7SUFDbEIsRUFBRSxDQUFDLDJCQUEyQixFQUFFOztZQUU1QixtQ0FBbUM7WUFDbkMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3ZCLE1BQU0sb0JBQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxzQ0FBWSxDQUFDLGFBQWEsQ0FBQyxFQUFFLElBQUksRUFBRSw4Q0FBOEMsQ0FBQyxDQUFDO1lBQ3hJLE1BQU0sQ0FBQyxzQ0FBWSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFD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
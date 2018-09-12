import { browser, by, By, element, promise, ElementFinder, protractor } from 'protractor';
/**
 * Class representing login page.
 * Methods/properties for global elements should go here. 
 * 
 * @export
 * @class LoginPagePO
 */
export class SBHomePagePO {


    static AddActivity = element(by.id('newActivity'));
    static ActivityTitle = element(by.id('newObjectName'));
    static startTimeHr = element(by.id('startTimeObjectHours'));
    static startTimeMin = element(by.id('startTimeObjectMinutes'));
    static EndTimeHr = element(by.id('endTimeObjectHours'));
    static EndTimeMin = element(by.id('endTimeObjectMinutes'));
    static DecriptionBox = element(by.id('newObjectInfo1'));
    static chkDatePicker = element.all(by.css('.checkboxDiv'));
    static warningMessage = element(by.css('.jconfirm-box .jconfirm-content'));
    static confirmButton = element(by.css('.jconfirm-box .btn.btn-default'));

    static async colourPicker() {
        await element(by.id('textSettings1')).click();
    }
    static chkTitle() {
        return browser.driver.getTitle();
    }

    static async navigateToHome(): Promise<void> {
        await browser.driver.get('https://schedulebuilder.org/');
        //browser.sleep(5000);
    }






}
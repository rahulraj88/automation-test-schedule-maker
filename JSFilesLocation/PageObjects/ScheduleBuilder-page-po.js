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
/**
 * Class representing login page.
 * Methods/properties for global elements should go here.
 *
 * @export
 * @class LoginPagePO
 */
class SBHomePagePO {
    static colourPicker() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.element(protractor_1.by.id('textSettings1')).click();
        });
    }
    static chkTitle() {
        return protractor_1.browser.driver.getTitle();
    }
    static navigateToHome() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.driver.get('https://schedulebuilder.org/');
            //browser.sleep(5000);
        });
    }
}
SBHomePagePO.AddActivity = protractor_1.element(protractor_1.by.id('newActivity'));
SBHomePagePO.ActivityTitle = protractor_1.element(protractor_1.by.id('newObjectName'));
SBHomePagePO.startTimeHr = protractor_1.element(protractor_1.by.id('startTimeObjectHours'));
SBHomePagePO.startTimeMin = protractor_1.element(protractor_1.by.id('startTimeObjectMinutes'));
SBHomePagePO.EndTimeHr = protractor_1.element(protractor_1.by.id('endTimeObjectHours'));
SBHomePagePO.EndTimeMin = protractor_1.element(protractor_1.by.id('endTimeObjectMinutes'));
SBHomePagePO.DecriptionBox = protractor_1.element(protractor_1.by.id('newObjectInfo1'));
SBHomePagePO.chkDatePicker = protractor_1.element.all(protractor_1.by.css('.checkboxDiv'));
SBHomePagePO.warningMessage = protractor_1.element(protractor_1.by.css('.jconfirm-box .jconfirm-content'));
SBHomePagePO.confirmButton = protractor_1.element(protractor_1.by.css('.jconfirm-box .btn.btn-default'));
exports.SBHomePagePO = SBHomePagePO;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2NoZWR1bGVCdWlsZGVyLXBhZ2UtcG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9QYWdlT2JqZWN0cy9TY2hlZHVsZUJ1aWxkZXItcGFnZS1wby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkNBQTBGO0FBQzFGOzs7Ozs7R0FNRztBQUNILE1BQWEsWUFBWTtJQWNyQixNQUFNLENBQU8sWUFBWTs7WUFDckIsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNsRCxDQUFDO0tBQUE7SUFDRCxNQUFNLENBQUMsUUFBUTtRQUNYLE9BQU8sb0JBQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVELE1BQU0sQ0FBTyxjQUFjOztZQUN2QixNQUFNLG9CQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1lBQ3pELHNCQUFzQjtRQUMxQixDQUFDO0tBQUE7O0FBckJNLHdCQUFXLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7QUFDNUMsMEJBQWEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztBQUNoRCx3QkFBVyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7QUFDckQseUJBQVksR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDO0FBQ3hELHNCQUFTLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQztBQUNqRCx1QkFBVSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7QUFDcEQsMEJBQWEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO0FBQ2pELDBCQUFhLEdBQUcsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0FBQ3BELDJCQUFjLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxDQUFDLENBQUMsQ0FBQztBQUNwRSwwQkFBYSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDLENBQUM7QUFaN0Usb0NBK0JDIn0=
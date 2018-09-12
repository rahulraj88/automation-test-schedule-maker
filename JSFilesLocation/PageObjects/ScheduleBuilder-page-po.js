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
            yield protractor_1.browser.driver.get('http://www.google.com');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2NoZWR1bGVCdWlsZGVyLXBhZ2UtcG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9QYWdlT2JqZWN0cy9TY2hlZHVsZUJ1aWxkZXItcGFnZS1wby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkNBQTBGO0FBQzFGOzs7Ozs7R0FNRztBQUNILE1BQWEsWUFBWTtJQWNyQixNQUFNLENBQU8sWUFBWTs7WUFDckIsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNsRCxDQUFDO0tBQUE7SUFDRCxNQUFNLENBQUMsUUFBUTtRQUNYLE9BQU8sb0JBQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVELE1BQU0sQ0FBTyxjQUFjOztZQUN2QixNQUFNLG9CQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1lBQ2xELE1BQU0sb0JBQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLDhCQUE4QixDQUFDLENBQUM7WUFDekQsc0JBQXNCO1FBQzFCLENBQUM7S0FBQTs7QUF0Qk0sd0JBQVcsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztBQUM1QywwQkFBYSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0FBQ2hELHdCQUFXLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztBQUNyRCx5QkFBWSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUM7QUFDeEQsc0JBQVMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO0FBQ2pELHVCQUFVLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztBQUNwRCwwQkFBYSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7QUFDakQsMEJBQWEsR0FBRyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7QUFDcEQsMkJBQWMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsaUNBQWlDLENBQUMsQ0FBQyxDQUFDO0FBQ3BFLDBCQUFhLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxDQUFDLENBQUMsQ0FBQztBQVo3RSxvQ0FnQ0MifQ==
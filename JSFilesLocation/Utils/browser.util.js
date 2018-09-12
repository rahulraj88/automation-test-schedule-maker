"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
/**
 * Utility class for commonly called Protractor.browser methods.
 * The methods should be static and
 * not require new instance of class to use.
 *
 * @export
 * @class BrowserUtil
 */
class BrowserUtil {
    constructor() { }
    /**
     * * Makes the browser wait for an element to be visible before
     * executing more code. Can pass CSS selector or ElementFinder.
     *
     * @static
     * @param {string | ElementFinder} cssSelectorOrElement CSS selector to select the element or or Protractor.ElementFinder
     * @param {number} [timeout=1500] Max milliseconds to wait. Defaults to 1500.
     * @memberof BrowserUtil
     */
    static waitForElementVisibility(cssSelectorOrElement, timeout = 1500) {
        let elementToWaitFor;
        if (typeof cssSelectorOrElement === 'string') {
            elementToWaitFor = protractor_1.element(protractor_1.by.css(cssSelectorOrElement));
        }
        else {
            elementToWaitFor = cssSelectorOrElement;
        }
        protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(elementToWaitFor), timeout);
    }
    /**
     * Returns environment the test suite is executed on
     * by checking `browser.params.baseUrl`.
     *
     * @static
     * @returns {Environment}
     * @memberof BrowserUtil
     */
    static getEnv() {
        const baseUrl = protractor_1.browser.params.baseUrl;
        if (baseUrl.indexOf('qaenvurl') != -1) {
            return Environment.QA;
        }
        else if (baseUrl.indexOf('prodenvurl') != -1) {
            return Environment.PROD;
        }
        else {
            return Environment.LOCAL;
        }
    }
}
exports.BrowserUtil = BrowserUtil;
/**
 * Enum for different types of environment this test suite
 * is running on.
 *
 * @export
 * @enum {string}
 */
var Environment;
(function (Environment) {
    Environment["QA"] = "qa";
    Environment["PROD"] = "prod";
    Environment["LOCAL"] = "local";
})(Environment = exports.Environment || (exports.Environment = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlci51dGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vVXRpbHMvYnJvd3Nlci51dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQXFGO0FBRXJGOzs7Ozs7O0dBT0c7QUFDSCxNQUFhLFdBQVc7SUFDdEIsZ0JBQWUsQ0FBQztJQUVoQjs7Ozs7Ozs7T0FRRztJQUNILE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxvQkFBNEMsRUFBRSxVQUFrQixJQUFJO1FBQ2xHLElBQUksZ0JBQStCLENBQUM7UUFDcEMsSUFBSSxPQUFPLG9CQUFvQixLQUFLLFFBQVEsRUFBRTtZQUM1QyxnQkFBZ0IsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO1NBQzFEO2FBQU07WUFDTCxnQkFBZ0IsR0FBRyxvQkFBb0IsQ0FBQztTQUN6QztRQUNELG9CQUFPLENBQUMsSUFBSSxDQUFDLCtCQUFrQixDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0gsTUFBTSxDQUFDLE1BQU07UUFDWCxNQUFNLE9BQU8sR0FBRyxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFFdkMsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO1lBQ3JDLE9BQU8sV0FBVyxDQUFDLEVBQUUsQ0FBQztTQUN2QjthQUFNLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtZQUM5QyxPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUM7U0FDekI7YUFBTTtZQUNMLE9BQU8sV0FBVyxDQUFDLEtBQUssQ0FBQztTQUMxQjtJQUNILENBQUM7Q0FDRjtBQXpDRCxrQ0F5Q0M7QUFFRDs7Ozs7O0dBTUc7QUFDSCxJQUFZLFdBSVg7QUFKRCxXQUFZLFdBQVc7SUFDckIsd0JBQVMsQ0FBQTtJQUNULDRCQUFhLENBQUE7SUFDYiw4QkFBZSxDQUFBO0FBQ2pCLENBQUMsRUFKVyxXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQUl0QiJ9
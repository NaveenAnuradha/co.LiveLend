package steps;

import co.LiveLend.HomePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoanSteps {

    HomePage homePage = new HomePage();


    @Given("^I am in the home page$")
    public void iAmInTheHomePage() {
    }

    @When("^I move borrow amount slider between from £(\\d+) to £(\\d+)$")
    public void iMoveBorrowAmountSliderBetweenFrom£To£(int arg0, int arg1) {
    }

    @And("^I keep monthly payment period as (\\d+) months$")
    public void iKeepMonthlyPaymentPeriodAsMonths(int arg0) {
    }

    @Then("^I can see monthly repayment changing$")
    public void iCanSeeMonthlyRepaymentChanging() {
    }

    @When("^I move loan term slider between from (\\d+) months to (\\d+) months$")
    public void iMoveLoanTermSliderBetweenFromMonthsToMonths(int arg0, int arg1) {
    }

    @And("^I keep borrow amount as £(\\d+)$")
    public void iKeepBorrowAmountAs£(int arg0) {
    }
}

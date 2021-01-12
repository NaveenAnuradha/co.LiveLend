$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("loanAmount.feature");
formatter.feature({
  "line": 2,
  "name": "Loan",
  "description": "",
  "id": "loan",
  "keyword": "Feature"
});
formatter.before({
  "duration": 10026826100,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am in the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoanSteps.iAmInTheHomePage()"
});
formatter.result({
  "duration": 259937200,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Can see borrow amount changing with slider movement",
  "description": "",
  "id": "loan;can-see-borrow-amount-changing-with-slider-movement",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@smoke"
    },
    {
      "line": 7,
      "name": "@loanamount"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I move borrow amount slider between from £1000 to £11000",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I keep monthly payment period as 42 months",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I can see monthly repayment changing",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1000",
      "offset": 42
    },
    {
      "val": "11000",
      "offset": 51
    }
  ],
  "location": "LoanSteps.iMoveBorrowAmountSliderBetweenFrom£To£(int,int)"
});
formatter.result({
  "duration": 6522900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "42",
      "offset": 33
    }
  ],
  "location": "LoanSteps.iKeepMonthlyPaymentPeriodAsMonths(int)"
});
formatter.result({
  "duration": 147200,
  "status": "passed"
});
formatter.match({
  "location": "LoanSteps.iCanSeeMonthlyRepaymentChanging()"
});
formatter.result({
  "duration": 34400,
  "status": "passed"
});
formatter.after({
  "duration": 1633218200,
  "status": "passed"
});
formatter.before({
  "duration": 7897299300,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am in the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoanSteps.iAmInTheHomePage()"
});
formatter.result({
  "duration": 53700,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Can see loan term changing with slider movement",
  "description": "",
  "id": "loan;can-see-loan-term-changing-with-slider-movement",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@smoke"
    },
    {
      "line": 14,
      "name": "@loanterm"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I move loan term slider between from 12 months to 60 months",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I keep borrow amount as £5000",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I can see monthly repayment changing",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 37
    },
    {
      "val": "60",
      "offset": 50
    }
  ],
  "location": "LoanSteps.iMoveLoanTermSliderBetweenFromMonthsToMonths(int,int)"
});
formatter.result({
  "duration": 188700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5000",
      "offset": 25
    }
  ],
  "location": "LoanSteps.iKeepBorrowAmountAs£(int)"
});
formatter.result({
  "duration": 116700,
  "status": "passed"
});
formatter.match({
  "location": "LoanSteps.iCanSeeMonthlyRepaymentChanging()"
});
formatter.result({
  "duration": 31800,
  "status": "passed"
});
formatter.after({
  "duration": 1070781100,
  "status": "passed"
});
});
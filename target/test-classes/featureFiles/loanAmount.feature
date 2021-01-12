
  Feature: Loan

Background:
  Given I am in the home page
    @smoke
    @loanamount
      Scenario: Can see borrow amount changing with slider movement
      When I move borrow amount slider between from £1000 to £11000
      And I keep monthly payment period as 42 months
      Then I can see monthly repayment changing

    @smoke
    @loanterm
      Scenario: Can see loan term changing with slider movement
      When I move loan term slider between from 12 months to 60 months
      And I keep borrow amount as £5000
      Then I can see monthly repayment changing
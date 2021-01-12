package co.LiveLend;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Action;
import org.openqa.selenium.interactions.Actions;

public class HomePage extends Utils {

    By _slider = By.xpath("//input[@name=\"loanAmount\"]");
    By _getQuote = By.xpath("//span[text()=\"Get my quote\"]");


    public void moveSlider() {
        WebElement slider = driver.findElement(_slider);
        Actions move = new Actions(driver);
        Action action = (Action) move.dragAndDropBy(slider, 30, 0).build();
        ((Actions) action).perform();

    }
    public void clickOnGetQuote(){
        clickOnElement(_getQuote);
    }


}

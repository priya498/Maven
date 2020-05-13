package stepdefinition;

import static org.junit.Assert.*;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.NoAlertPresentException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Action;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;





public class Test_Code {
	WebDriver driver ;
	
	
	
	@Given("^user should be on facebook log-in page\\.$")
	public void user_should_be_on_facebook_log_in_page() throws Throwable {
		System.setProperty("webdriver.chrome.driver" , "C:\\Users\\Niki\\Downloads\\Selenium Java Downloads\\Chrome Driver\\chromedriver_win32\\chromedriver.exe");
		
		driver= new ChromeDriver();
		driver.get("https://www.facebook.com/");
		driver.manage().window().maximize();
	    
	}

	@When("^user enter the valid \"(.*?)\"and \"(.*?)\"$")
	public void user_enter_the_valid_and(String email,String password) throws Throwable {
		
	  driver.findElement(By.xpath("//*[@id=\"email\"]")).sendKeys(email); 
	  driver.findElement(By.id("pass")).sendKeys(password);
	  
	}
	
	@And("^click on log-in button$")
	public void click_on_ok_button() throws Throwable {
		driver.findElement(By.xpath("//*[@id=\"u_0_b\"]")).submit();  
	    
	}
	
	
	public boolean isalertpresent()
	{
		try
		{
			driver.switchTo().alert();
			return true;
		}
		catch(NoAlertPresentException e)
		{
			return false;
		}
	}
	@Then("^switch to alert click dismiss$")
	public void switch_to_alert_click_dismiss() throws Throwable {
		System.out.println(driver.getTitle());
		
		
	}
	

	

	@When("^click on log-out button$")
	public void click_on_log_out_button() throws Throwable {  
		
		
		/*   Thread.sleep(3000);	
		if(isalertpresent() == true)
		{
			Alert alert =driver.switchTo().alert();
			System.out.println(alert.getText());
			alert.dismiss();
			driver.switchTo().defaultContent();
		}   */
		Thread.sleep(2000);
			
	driver.findElement(By.xpath("//*[@id=\"userNavigationLabel\"]")).click(); 
	Thread.sleep(3000);;
	driver.findElement(By.partialLinkText("Log Out")).click();
	
		
	    
	}
	@Then("^the page title should be \"(.*?)\"$")
	public void the_page_title_should_be(String title) throws Throwable {
	    
	    String expectedresult = driver.getTitle();
	    if (expectedresult.contains(title))
	    {
	    	System.out.println(expectedresult);
	    }
	   
	}

	
	
	
	

}

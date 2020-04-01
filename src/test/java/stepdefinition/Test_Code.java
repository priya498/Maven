package stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

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
		driver.findElement(By.xpath("//*[@id=\"u_0_2\"]")).submit();
	    
	}

	@Then("^user should be able to log-in sucessfully$")
	public void user_should_be_able_to_log_in_sucessfully() throws Throwable {
	    System.out.println(driver.getCurrentUrl());
	}



	
	

}

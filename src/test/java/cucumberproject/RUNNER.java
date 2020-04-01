package cucumberproject;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features=".//Features/cucumbers.feature" ,
                      glue="stepdefinition", 
                      monochrome=true,
		      dryrun =true,
		 
                      plugin = {"pretty","html:test-output"}
                      )

public class RUNNER {

	

}

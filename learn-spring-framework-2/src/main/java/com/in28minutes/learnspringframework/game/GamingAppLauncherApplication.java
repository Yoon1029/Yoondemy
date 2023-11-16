package com.in28minutes.learnspringframework.game;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan("package com.in28minutes.learnspringframework.game")
public class GamingAppLauncherApplication{
	
	
	public static void main(String[] args) {
		
		
		try(var context = 
				new AnnotationConfigApplicationContext
				(GamingAppLauncherApplication.class)){
			
			context.getBean(GamingConsole.class).up();
			
			context.getBean(GameRunner.class).run();
			
			
			
		}
	}
	
}


//Primary는 여러 후보가 자격이 있는 경우, Bean에게 후선권을 주는 것을 말한다
//Qualifier의 경우, 특정 Bean이 자동 와이어링되어야 한다.
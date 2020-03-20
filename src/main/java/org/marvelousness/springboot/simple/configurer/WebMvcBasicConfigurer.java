package org.marvelousness.springboot.simple.configurer;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * 基础配置类
 * 
 * @author marvelousness@foxmail.com
 * @time 2020-03-16 17:12
 */
@EnableWebMvc
@Configuration
public class WebMvcBasicConfigurer implements WebMvcConfigurer {

	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		// 设置 favicon.ico 的实际文件地址
		registry.addResourceHandler("/favicon.ico").addResourceLocations("classpath:/static/images/favicon_128.ico");
		// 将所有的静态资源定位到 /statics 路径下
		registry.addResourceHandler("/statics/**").addResourceLocations("classpath:/static/");
	}

}
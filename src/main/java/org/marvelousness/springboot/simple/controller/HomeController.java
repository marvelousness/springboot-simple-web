package org.marvelousness.springboot.simple.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

/**
 * 首页控制器
 * 
 * @author marvelousness@foxmail.com
 * @time 2020-03-15 18:18
 */
@Controller
public class HomeController {

	@Value("${debug:false}")
	private Boolean debug;

	@Value("${nodejs.host:}")
	private String nodejsHost;
	@Value("${nodejs.entrance:}")
	private String nodejsEntrance;

	/**
	 * 首页视图
	 */
	@RequestMapping("")
	public ModelAndView index() {
		boolean dev = isDev();
		ModelAndView mv = new ModelAndView(dev ? "index.debug" : "index");
		mv.addObject("host", dev ? nodejsHost : "");
		mv.addObject("entrance", dev ? nodejsHost.concat(nodejsEntrance) : "");
		return mv;
	}

	/**
	 * 判断是否是开发模式
	 * 
	 * @return
	 */
	private boolean isDev() {
		if (!Boolean.TRUE.equals(debug)) {
			return false;
		}
		return !(StringUtils.isEmpty(nodejsHost) || StringUtils.isEmpty(nodejsEntrance));
	}

}
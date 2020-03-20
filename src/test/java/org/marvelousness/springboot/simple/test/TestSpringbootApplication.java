package org.marvelousness.springboot.simple.test;

import org.json.JSONObject;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

/**
 * 测试 Springboot 项目的控制器
 * @author marvelousness@foxmail.com
 * @time 2020-03-16 13:00
 */
@SpringBootTest
@RunWith(SpringRunner.class)
public class TestSpringbootApplication {

	@Autowired
	private WebApplicationContext wac;

	private MockMvc mvc;

	@Before
	public void setUp() {
		mvc = MockMvcBuilders.webAppContextSetup(wac).build();
	}

	/**
	 * 测试首页控制器是否正常
	 */
	@Test
	public void testHome() throws Exception {
		MockHttpServletRequestBuilder builder = MockMvcRequestBuilders.get("");
		builder.contentType(MediaType.TEXT_HTML);

		ResultActions actions = mvc.perform(builder);
		actions.andExpect(MockMvcResultMatchers.status().isOk());

		MvcResult result = actions.andReturn();
		MockHttpServletResponse response = result.getResponse();
		String string = response.getContentAsString();

		System.out.println(string);
	}

	/**
	 * 测试接口处理 GET 请求的接口是否正常返回数据
	 */
	@Test
	public void testGetDataList() throws Exception {
		MockHttpServletRequestBuilder builder = MockMvcRequestBuilders.get("/test/list");
		builder.contentType(MediaType.APPLICATION_JSON_UTF8_VALUE);
		builder.param("size", "30");

		ResultActions actions = mvc.perform(builder);
		actions.andExpect(MockMvcResultMatchers.status().isOk());

		MvcResult result = actions.andReturn();
		MockHttpServletResponse response = result.getResponse();
		String string = response.getContentAsString();

		System.out.println(string);
	}

	/**
	 * 测试接口处理 POST 请求的接口是否正常提交数据
	 */
	@Test
	public void testPostData() throws Exception {
		MockHttpServletRequestBuilder builder = MockMvcRequestBuilders.post("/test/save");
		builder.contentType(MediaType.APPLICATION_JSON_UTF8_VALUE);
		// 组装提交的参数
		{
			JSONObject json = new JSONObject();
			json.put("id", 1000);
			json.put("name", "tom");
			json.put("weight", 45.3);
			builder.content(json.toString());
		}

		ResultActions actions = mvc.perform(builder);
		// actions.andExpect(MockMvcResultMatchers.status().isOk());

		MvcResult result = actions.andReturn();
		MockHttpServletResponse response = result.getResponse();
		String string = response.getContentAsString();

		System.out.println(string);
	}

}
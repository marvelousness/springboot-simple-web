package org.marvelousness.springboot.simple.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * 测试数据控制器
 * 
 * @author marvelousness@foxmail.com
 * @time 2020-03-17 11:11
 */
@RestController
@RequestMapping(value = { "test", "data" })
public class TestController {

	@Value("${random.uuid}")
	private String randomString;

	/**
	 * 测试处理 GET 请求返回数据
	 * 
	 * @param page 页码数
	 * @param size 页项数
	 * @return
	 */
	@GetMapping("list")
	public ResponseEntity<List<Map<String, Object>>> list(Integer page, Integer size) {
		List<Map<String, Object>> list = new ArrayList<>();
		// 初始化参数 size
		Random random = new Random(System.currentTimeMillis());
		while (size == null || size < 0 || size > 1000) {
			size = random.nextInt();
		}
		for (int i = 0; i < size; i++) {
			Map<String, Object> map = new HashMap<>(10);
			map.put("boolean", random.nextBoolean());
			map.put("double", random.nextDouble());
			map.put("float", random.nextFloat());
			map.put("integer", random.nextInt());
			map.put("long", random.nextLong());
			if (!StringUtils.isEmpty(randomString)) {
				map.put("uuid", randomString);
			}
			list.add(map);
		}
		return new ResponseEntity<List<Map<String, Object>>>(list, HttpStatus.OK);
	}

	/**
	 * 测试处理 POST 请求返回数据
	 * 
	 * @param instance JSON示例对象
	 * @return
	 */
	@PostMapping("save")
	public ResponseEntity<?> save(@RequestBody Map<String, Object> instance) {
		if (instance == null || instance.isEmpty()) {
			return new ResponseEntity<String>("invalid request data", HttpStatus.INTERNAL_SERVER_ERROR);
		}
		Long id = null;
		// 获取主键
		{
			Object object = instance.get("id");
			if (object != null) {
				try {
					id = Long.valueOf(object.toString());
				} catch (NumberFormatException e) {
					// e.printStackTrace();
				}
			}
		}
		if (id != null) {
			if (id > 0) {
				// 大于零的数据认为是 update
				return new ResponseEntity<String>("success", HttpStatus.OK);
			} else {
				// 小于零的数据认为是 insert
				return new ResponseEntity<String>("success", HttpStatus.OK);
			}
		}
		return new ResponseEntity<String>("failure", HttpStatus.INTERNAL_SERVER_ERROR);
	}
}
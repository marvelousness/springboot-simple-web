# springboot-simple-web

继上一个项目 《 [整合 vue、viewui、axios、mock 和 webpack 的简单案例](https://github.com/marvelousness/vue-view-design) 》之后，前端的 VUE 项目可以开展本地开发、编译打包的工作了。打包之后的静态资源文件（包括 HTML，CSS，JS等资源）若需要被外部用户访问则必须部署到服务器上。目前市面上的 Web 服务器非常多，无论哪种 Web 服务器，这些静态资源都能被正常地部署。在 Java 领域，很多工程师都知道 Springboot，它内置Tomcat、Jetty和Undertow服务器的支持。很多时候只需使用合适的 "Starter" 来获取完全配置的实例就能轻松构建一个独立应用。该项目以 Springboot 结合 Vue 进行本地接口联调 为目的构建了一个简单的案例，根据这个项目可以清晰知道一个简单的 Springboot 项目的基础结构和前后端联调的基础内容，并可以在此基础上做的任何拓展。


## 项目目录结构

```
springboot-simple-web
 ├─src
 │  ├─main
 │  │  ├─org.marvelousness.springboot.simple.configurer
 │  │  ├─org.marvelousness.springboot.simple.controller
 │  │  └─resources
 │  │      ├─static
 │  │      └─templates
 │  └─test
 │      └─java
 │          └─org.marvelousness.springboot.simple.test
 ├─docs
 └─target
```


## 前端项目

本项目依赖前端提供的静态资源呈现页面，前端项目源码地址：[https://github.com/marvelousness/vue-view-design](https://github.com/marvelousness/vue-view-design)


## Spring Boot Features

1. Create stand-alone Spring applications
2. Embed Tomcat, Jetty or Undertow directly (no need to deploy WAR files)
3. Provide opinionated 'starter' dependencies to simplify your build configuration
4. Automatically configure Spring and 3rd party libraries whenever possible
5. Provide production-ready features such as metrics, health checks, and externalized configuration
6. Absolutely no code generation and no requirement for XML configuration


## Spring Boot Reference Document

1. [https://spring.io/projects/spring-boot/](https://spring.io/projects/spring-boot/)
2. [https://docs.spring.io/spring-boot/docs/2.1.13.RELEASE/reference/html/](https://docs.spring.io/spring-boot/docs/2.1.13.RELEASE/reference/html/)


## 附言

本项目仅作学习。如果您对该项目有什么建议或者意见，欢迎给我留言 [marvelousness@foxmail.com](mailto:marvelousness@foxmail.com)
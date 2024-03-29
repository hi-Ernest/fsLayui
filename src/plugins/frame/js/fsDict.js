/**
 * @Description: 字典配置
 * @Copyright: 2017 wueasy.com Inc. All rights reserved.
 * @author: fallsea
 * @version 1.8.4
 * @License：MIT
 */
layui.fsDict = {
		//城市
		city : {
			formatType : "local",
			labelField : "name",
			valueField : "code",
			//静态数据
			data:[{"code":0,"name":"北京","style":"color:#F00;"},
				{"code":1,"name":"上海"},
				{"code":2,"name":"广州"},
				{"code":3,"name":"深圳"},
				{"code":4,"name":"杭州"}
			]
		},
		//商品类型
		type : {
			formatType : "local",
			labelField : "name",
			valueField : "code",
			spaceMode : " ",//展示多个数据分隔符，默认,
			data:[{"code":"EP","name":"电子产品","css":"layui-badge layui-bg-orange"},
				{"code":"fashion","name":"潮流单品","css":"layui-badge layui-bg-green"},
				{"code":"other","name":"其他","css":"layui-badge layui-bg-cyan"}]
		}
		,
		//性别
		sex : {
			formatType : "local",
			labelField : "name",
			valueField : "code",
			spaceMode : "",//展示多个数据分隔符，默认,
			data:[{"code":"男","name":"男"},
				{"code":"女","name":"女"}]
		}
		,
		//省份
		area1 : {
			formatType : "server",
			loadUrl : "/servlet/DEMO1006",
			method : "get",
			inputs : "parentid:0",
			labelField : "name",
			valueField : "id"
		},
		//城市
		area2 : {
			formatType : "server",
			loadUrl : "/servlet/DEMO1006",
			inputs : "parentid:",
			labelField : "name",
			valueField : "id"
		},
		//区
		area3 : {
			formatType : "server",
			loadUrl : "/servlet/DEMO1006",
			inputs : "parentid:,area1:#area2222222",
			labelField : "name",
			valueField : "id"
		}
};

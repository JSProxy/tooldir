/*环形图*/
function roll(obj){
	var myChart = echarts.init(document.getElementById(obj.divId));
	var labelTop = {
	    normal : {
	        label : {
	            show : true,
	            position : 'center',
	            formatter : '{b}',
	            textStyle: {
	                baseline : 'bottom',
					fontSize : 22
	            }
	        },
	        labelLine : {
	            show : false
	        }
	    }
	};
	var labelFromatter = {
	    normal : {
	        label : {
	            formatter : function (params){
	                return 100 - params.value + '%'
	            },
	            textStyle: {
	                baseline : 'top'
	            }
	        }
	    },
	};
	var labelBottom = {
	    normal : {
	        color: '#ccc',
	        label : {
	            show : true,
	            position : 'center',
	            textStyle: {
				fontSize : 20
	            }
	        },
	        labelLine : {
	            show : false
	        }
	    },
	    emphasis: {
	        color: 'rgba(0,0,0,0)'
	    }
	};
	var radius = [55, 70];
    // 指定图表的配置项和数据
    var option = {
    		color:[obj.color],
			    series : [
			        {
			            type : 'pie',
			            center : ['50%','50%'],
			            radius : radius,
			            x: '0%', // for funnel
			            itemStyle : labelFromatter,
			            data : [
			                {name:'other', value:100-obj.bottomVal, itemStyle : labelBottom},
			                {name:obj.topText, value:obj.bottomVal ,itemStyle : labelTop}
			            ]
			        }
			    ]
			};

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}

/*折线图*/

function line(divId,xArray,yArray){
	var myChart = echarts.init(document.getElementById(divId),e_macarons);
	var option = {
	    tooltip: {
	       trigger: "item",
	       formatter: function(param){
	       	  return "客胜 "+param.value+"%  赔率  "+param.data.name
	       },
	    },   
	    xAxis: {
            type : 'category',
            boundaryGap : false,
            data : xArray,
            axisLabel:{
	            interval: 0,//标签设置为全部显示
	            formatter:function(params){
	            	return params.substring(0, 5) + "\n" + params.substring(6, params.length);
            	}
    		}
	    },
	    yAxis : [
	        {
	            type : 'value',
	            scale: true,
	            axisLabel : {
	                formatter: '{value} %'
	            },
	            min : 0 ,
	            max : 100
	        }
	    ],
	    series : [
	        {
	            name:'主胜',
	            type:'line',
				itemStyle : {
                    normal : {
                    	color: "#03b98a",
                        lineStyle:{
                            width:4,//折线宽度
                            color:"#03b98a"//折线颜色
                        }
                    }
                },
	            data:yArray[0]
	        },
	        {
	            name:'平局',
	            type:'line',
				itemStyle : {
                    normal : {
                    	color: "#ff7676",
                        lineStyle:{
                            width:4,//折线宽度
                            color:"#ff7676"//折线颜色
                        }
                    }
                },
	            data:yArray[1]
	        },
	        {
	            name:'客胜',
	            type:'line',
	            itemStyle : {
                    normal : {
                    	color: "#008ff3",
                        lineStyle:{
                            width:4,//折线宽度
                            color:"#008ff3"//折线颜色
                        }
                    }
                },
	            data:yArray[2]
	        }
	    ]
	};
	myChart.setOption(option);
}

//多数据环形图
function multipleRoll(divId,total,data){

	var myChart = echarts.init(document.getElementById(divId));
	var option = {
		title: {
	        text: '共'+total+'场',
	        textStyle : {
			    fontSize: 16,
			    fontWeight: 'normal',
			    color: '#808080'
			},
	        x: 'center',
	        y: 'center'
	  	},
	    color: ["#ff7676","#008ff3","#03b98a"],
        animation:false,
	    series : [
	        {
	            name:'访问来源',
	            type:'pie',
	            radius : ['30%', '55%'],
	            itemStyle : {
	                normal : {
	                	borderWidth: 4,
						borderColor: '#fff',
	                    label : {
	                        show : true,
	                        textStyle: {
		                        fontSize: 18,
		                    },
	                        formatter:'{b}\n{d}%'
	                    },
	                    labelLine : {
	                        show : true,
	                        length:0.001
	                    }
	                }
	            },
	            data:data
	        }
	    ]
	};
    myChart.setOption(option);
}

//多柱形
function multipleBar(divId,yArray,leftArray,rightArray){
	var myChart = echarts.init(document.getElementById(divId));
	var option = {
		grid:{
			borderWidth:'0'
		},
	    xAxis : [
	        {
	            type : 'value',
	            show:false,
	    		splitLine:{show:false},
	    		splitArea:{show:false},
	    		axisTick:{show:false},
	    		axisLine:{show:false}
	        }
	    ],
	    yAxis : [
	        {
	        	type : 'category',
	        	splitLine:{show:false},
	        	splitArea:{show:false},
	        	axisTick:{show:false},
	        	axisLine:{show:false},
	            data : yArray
	        }
	    ],
	    color: ["#008ff3","#ff7676"],
	    series : [
	        {
	            type:'bar',
	            stack: '总量',
	            barWidth : 10,
	            barCategoryGap : '30%',
	            barMinHeight: 40,
	            itemStyle: {
	            	normal: {
	            		barBorderRadius:5,
		                label : {
		                	show: true,
		                	position: 'top'
		                }
	            	}
            	},
	            data:rightArray
	        },
	        {
	            type:'bar',
	            stack: '总量',
	            barWidth : 10,
	            barCategoryGap : '30%',
	            barMinHeight: 0,
	            itemStyle: {
	            	normal: {
	            		barBorderRadius:5,
		                label : {
		                	show: true, 
		                	position: 'top',
		                	formatter:function(param){
		                		if(param.data.name != ""){
		                			return Math.abs(param.value) +"%    " +param.data.name;
		                		}
		                		return Math.abs(param.value) ;
		                	}
		                }
	            	}
            	},
	            data:leftArray
	        }
	    ]
	};
	                    
	myChart.setOption(option);
}

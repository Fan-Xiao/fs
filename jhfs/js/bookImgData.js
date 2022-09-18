// 书本目录，如果无ols变量则无目录，ols 变量名勿删，全局共享
var ols = [
  {
    "caption": "封面",
    "page": "1",
  },
  {
    "caption": "第1页",
    "page": "2",
  },
  {
    "caption": "第2页",
    "page": "3",
  },
  {
    "caption": "第3页",
    "page": "4",
  },
  {
    "caption": "第4页",
    "page": "5",
  },
  {
    "caption": "第5页",
    "page": "6",
  },
  {
    "caption": "第6页",
    "page": "7",
  },
  {
    "caption": "第7页",
    "page": "8",
  },
];

// 路径配置
var loadImgpath = "./files/thumb/"

bookConfig.largePath = loadImgpath    // 大图路径
bookConfig.normalPath = loadImgpath
bookConfig.thumbPath = loadImgpath
bookConfig.totalPageCount = ols.length    // 页面数量
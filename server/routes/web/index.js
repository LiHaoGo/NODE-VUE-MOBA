module.exports = app => {
    const router = require('express').Router()
    const mongoose = require('mongoose')
    // 初始化新闻的路由
    // const News = require('../../models/Article')
    const Category = mongoose.model('Category')
    const Article = mongoose.model('Article')
    const Hero = mongoose.model('Hero')


    //    导入新闻
    router.get('/news/init', async (req, res) => {
        const parent = await Category.findOne({
            name: '新闻分类'
        })
        const cats = await Category.find().where({
            parent: parent
        }).lean()
        // console.log(cats)

        const newsTitles = ['峡谷FUN肆玩，斗鱼赢永久皮肤/现金', '周年庆表现道具设计大赛最佳创意奖诞生！', '狄某有话说 |瑶：打野什么的，我也想试试', '王者荣耀真硒水上线，喝出盛唐养生美学', '2021王者荣耀皮肤团秋季招募开启', '8月25日挂车行为专项违规处罚公告', '8月25日体验服违规处罚公告', '8月25日游戏内违规签名、攻略信息处罚公告', '8月25日“演员”惩罚名单', '8月25日净化游戏环境声明及处罚公告', '嫦娥源·梦皮肤展示场景投票活动开启公告', '峡谷初秋多欢畅，赵云世冠皮肤即将登场', '青白蛇海报票选结果公布', '周年庆表现道具设计大赛人气TOP30作品出炉~', '积分暴击活动开启，最高可暴击1000荣耀积分', '全国大赛游戏赛道即将第二次开启!滴滴快上车', '集合，誓为家乡夺桂冠!上海、福建、陕西战队巡礼', '【重磅福利】一图get第四届全国大赛四条赛道奖励合集', '全国大赛竟成辅助噩梦？人类高质量整活行为大赏！', '零门槛当电竞选手！一图带你玩转全国大赛游戏赛道！']

        const newsList = newsTitles.map(title => {
            const randomCats = cats.slice(0).sort((a, b) => Math.random() - 0.5)
            //    console.log(randomCats.slice(0,2))
            return {
                // cats是个数组
                categories: randomCats.slice(0, 2),
                title: title
            }
        })
        // 清空数据库 
        await Article.deleteMany({})
        // 写入数据
        await Article.insertMany(newsList)
        res.send(newsList)
    })
    // 新闻列表接口
    router.get('/news/list', async (req, res) => {
        //    const parent = await Category.findOne({
        //        name:'新闻分类'
        //    }).populate({
        //        path:'children',
        //        populate:{
        //            path:'newsList'
        //        }
        //    }).lean()
        const parent = await Category.findOne({
            name: '新闻分类'
        })
        const cats = await Category.aggregate([{
                $match: {
                    parent: parent._id
                }
            },
            {
                $lookup: {
                    from: 'articles',
                    localField: '_id',
                    foreignField: 'categories',
                    as: 'newsList'
                }
            }, {
                $addFields: {
                    newsList: {
                        $slice: ['$newsList', 5]
                    }
                }
            }
        ])
        const subCats = cats.map(v => v._id)
        cats.unshift({
            name: '热门',
            newsList: await Article.find().where({
                categories: {
                    $in: subCats
                }
            }).populate('categories').limit(5).lean()
        })
        cats.map(cat => {
            cat.newsList.map(news => {
                news.categoryName = (cat.name === '热门') ? news.categories[0].name : cat.name
                return news
            })
            return cat
        })
        res.send(cats)
    })

    //    导入英雄数据
    router.get('/heroes/init', async (req, res) => {
        await Hero.deleteMany({})
        const rawData = [{
            "name": "战士",
            "heroes": [{
                "name": "赵云",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/107/107.jpg"
            }, {
                "name": "墨子",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/108/108.jpg"
            }, {
                "name": "钟无艳",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/117/117.jpg"
            }, {
                "name": "吕布",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/123/123.jpg"
            }, {
                "name": "夏侯惇",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/126/126.jpg"
            }, {
                "name": "曹操",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/128/128.jpg"
            }, {
                "name": "典韦",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/129/129.jpg"
            }, {
                "name": "宫本武藏",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/130/130.jpg"
            }, {
                "name": "达摩",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/134/134.jpg"
            }, {
                "name": "老夫子",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/139/139.jpg"
            }, {
                "name": "关羽",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/140/140.jpg"
            }, {
                "name": "程咬金",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/144/144.jpg"
            }, {
                "name": "露娜",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/146/146.jpg"
            }, {
                "name": "花木兰",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/154/154.jpg"
            }, {
                "name": "橘右京",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/163/163.jpg"
            }, {
                "name": "亚瑟",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/166/166.jpg"
            }, {
                "name": "孙悟空",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg"
            }, {
                "name": "刘备",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/170/170.jpg"
            }, {
                "name": "杨戬",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/178/178.jpg"
            }, {
                "name": "雅典娜",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/183/183.jpg"
            }, {
                "name": "哪吒",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/180/180.jpg"
            }, {
                "name": "铠",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/193/193.jpg"
            }, {
                "name": "苏烈",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/194/194.jpg"
            }, {
                "name": "梦奇",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/198/198.jpg"
            }, {
                "name": "裴擒虎",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/502/502.jpg"
            }, {
                "name": "狂铁",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/503/503.jpg"
            }, {
                "name": "孙策",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/510/510.jpg"
            }, {
                "name": "李信",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/507/507.jpg"
            }, {
                "name": "盘古",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/529/529.jpg"
            }, {
                "name": "云中君",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/506/506.jpg"
            }, {
                "name": "曜",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/522/522.jpg"
            }, {
                "name": "马超",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/518/518.jpg"
            }, {
                "name": "蒙恬",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/527/527.jpg"
            }, {
                "name": "夏洛特",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/536/536.jpg"
            }, {
                "name": "司空震",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/537/537.jpg"
            }, {
                "name": "云缨",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/538/538.jpg"
            }]
        }, {
            "name": "法师",
            "heroes": [{
                "name": "小乔",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/106/106.jpg"
            }, {
                "name": "墨子",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/108/108.jpg"
            }, {
                "name": "妲己",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/109/109.jpg"
            }, {
                "name": "嬴政",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/110/110.jpg"
            }, {
                "name": "高渐离",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/115/115.jpg"
            }, {
                "name": "孙膑",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/118/118.jpg"
            }, {
                "name": "扁鹊",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/119/119.jpg"
            }, {
                "name": "芈月",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/121/121.jpg"
            }, {
                "name": "周瑜",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/124/124.jpg"
            }, {
                "name": "甄姬",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/127/127.jpg"
            }, {
                "name": "武则天",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/136/136.jpg"
            }, {
                "name": "貂蝉",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/141/141.jpg"
            }, {
                "name": "安琪拉",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/142/142.jpg"
            }, {
                "name": "露娜",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/146/146.jpg"
            }, {
                "name": "姜子牙",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/148/148.jpg"
            }, {
                "name": "王昭君",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/152/152.jpg"
            }, {
                "name": "张良",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/156/156.jpg"
            }, {
                "name": "不知火舞",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/157/157.jpg"
            }, {
                "name": "钟馗",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/175/175.jpg"
            }, {
                "name": "诸葛亮",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/190/190.jpg"
            }, {
                "name": "干将莫邪",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/182/182.jpg"
            }, {
                "name": "女娲",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/179/179.jpg"
            }, {
                "name": "杨玉环",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/176/176.jpg"
            }, {
                "name": "弈星",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/197/197.jpg"
            }, {
                "name": "米莱狄",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/504/504.jpg"
            }, {
                "name": "司马懿",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/137/137.jpg"
            }, {
                "name": "沈梦溪",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/312/312.jpg"
            }, {
                "name": "上官婉儿",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/513/513.jpg"
            }, {
                "name": "嫦娥",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/515/515.jpg"
            }, {
                "name": "西施",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/523/523.jpg"
            }, {
                "name": "司空震",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/537/537.jpg"
            }]
        }, {
            "name": "坦克",
            "heroes": [{
                "name": "廉颇",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/105/105.jpg"
            }, {
                "name": "庄周",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/113/113.jpg"
            }, {
                "name": "刘禅",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/114/114.jpg"
            }, {
                "name": "钟无艳",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/117/117.jpg"
            }, {
                "name": "白起",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/120/120.jpg"
            }, {
                "name": "芈月",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/121/121.jpg"
            }, {
                "name": "吕布",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/123/123.jpg"
            }, {
                "name": "夏侯惇",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/126/126.jpg"
            }, {
                "name": "达摩",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/134/134.jpg"
            }, {
                "name": "项羽",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/135/135.jpg"
            }, {
                "name": "程咬金",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/144/144.jpg"
            }, {
                "name": "刘邦",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/149/149.jpg"
            }, {
                "name": "亚瑟",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/166/166.jpg"
            }, {
                "name": "牛魔",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/168/168.jpg"
            }, {
                "name": "张飞",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/171/171.jpg"
            }, {
                "name": "太乙真人",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/186/186.jpg"
            }, {
                "name": "东皇太一",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/187/187.jpg"
            }, {
                "name": "铠",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/193/193.jpg"
            }, {
                "name": "苏烈",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/194/194.jpg"
            }, {
                "name": "梦奇",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/198/198.jpg"
            }, {
                "name": "孙策",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/510/510.jpg"
            }, {
                "name": "盾山",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/509/509.jpg"
            }, {
                "name": "嫦娥",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/515/515.jpg"
            }, {
                "name": "猪八戒",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/511/511.jpg"
            }, {
                "name": "蒙恬",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/527/527.jpg"
            }, {
                "name": "阿古朵",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/533/533.jpg"
            }]
        }, {
            "name": "刺客",
            "heroes": [{
                "name": "赵云",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/107/107.jpg"
            }, {
                "name": "阿轲",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/116/116.jpg"
            }, {
                "name": "李白",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/131/131.jpg"
            }, {
                "name": "貂蝉",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/141/141.jpg"
            }, {
                "name": "韩信",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/150/150.jpg"
            }, {
                "name": "兰陵王",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/153/153.jpg"
            }, {
                "name": "花木兰",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/154/154.jpg"
            }, {
                "name": "不知火舞",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/157/157.jpg"
            }, {
                "name": "娜可露露",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/162/162.jpg"
            }, {
                "name": "橘右京",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/163/163.jpg"
            }, {
                "name": "孙悟空",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg"
            }, {
                "name": "百里守约",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/196/196.jpg"
            }, {
                "name": "百里玄策",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/195/195.jpg"
            }, {
                "name": "裴擒虎",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/502/502.jpg"
            }, {
                "name": "元歌",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/125/125.jpg"
            }, {
                "name": "司马懿",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/137/137.jpg"
            }, {
                "name": "上官婉儿",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/513/513.jpg"
            }, {
                "name": "云中君",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/506/506.jpg"
            }, {
                "name": "马超",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/518/518.jpg"
            }, {
                "name": "镜",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/531/531.jpg"
            }, {
                "name": "澜",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/528/528.jpg"
            }, {
                "name": "云缨",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/538/538.jpg"
            }]
        }, {
            "name": "射手",
            "heroes": [{
                "name": "孙尚香",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/111/111.jpg"
            }, {
                "name": "鲁班七号",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/112/112.jpg"
            }, {
                "name": "马可波罗",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/132/132.jpg"
            }, {
                "name": "狄仁杰",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/133/133.jpg"
            }, {
                "name": "后羿",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/169/169.jpg"
            }, {
                "name": "李元芳",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/173/173.jpg"
            }, {
                "name": "虞姬",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/174/174.jpg"
            }, {
                "name": "成吉思汗",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/177/177.jpg"
            }, {
                "name": "黄忠",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/192/192.jpg"
            }, {
                "name": "百里守约",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/196/196.jpg"
            }, {
                "name": "公孙离",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/199/199.jpg"
            }, {
                "name": "伽罗",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/508/508.jpg"
            }, {
                "name": "蒙犽",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/524/524.jpg"
            }, {
                "name": "艾琳",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/155/155.jpg"
            }]
        }, {
            "name": "辅助",
            "heroes": [{
                "name": "庄周",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/113/113.jpg"
            }, {
                "name": "刘禅",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/114/114.jpg"
            }, {
                "name": "孙膑",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/118/118.jpg"
            }, {
                "name": "牛魔",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/168/168.jpg"
            }, {
                "name": "张飞",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/171/171.jpg"
            }, {
                "name": "钟馗",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/175/175.jpg"
            }, {
                "name": "蔡文姬",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/184/184.jpg"
            }, {
                "name": "太乙真人",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/186/186.jpg"
            }, {
                "name": "大乔",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/191/191.jpg"
            }, {
                "name": "东皇太一",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/187/187.jpg"
            }, {
                "name": "鬼谷子",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/189/189.jpg"
            }, {
                "name": "明世隐",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/501/501.jpg"
            }, {
                "name": "盾山",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/509/509.jpg"
            }, {
                "name": "瑶",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/505/505.jpg"
            }, {
                "name": "鲁班大师",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/525/525.jpg"
            }, {
                "name": "阿古朵",
                "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/533/533.jpg"
            }]
        }];
        for (let cat of rawData) {
            if (cat.name == '热门') {
                // 跳过热门
                continue
            }
            // 找到当前分类在数据库中对应的数据
            const category = await Category.findOne({
                name: cat.name
            })
            // console.log(category)         
            cat.heroes = cat.heroes.map(hero => {
                //    console.log( 'hero',hero);

                hero.categories = [category]
                return hero
            })

            // 录入英雄
            await Hero.insertMany(cat.heroes)
        }   
        // console.log((await Hero.find()).length);
        
        res.send(await Hero.find())
    })

    // 英雄列表接口
    router.get('/heroes/list', async (req, res) => {
        const parent = await Category.findOne({
            name: '英雄分类'
        })
        // 聚合查询
        const cats = await Category.aggregate([{
                $match: {
                    parent: parent._id
                }
            },
            {
                $lookup: {
                    from: 'heroes',
                    localField: '_id',
                    foreignField: 'categories',
                    as: 'heroList'
                }
            },
        ])
        // console.log(cats);
        const subCats = cats.map(v => v._id)
        cats.unshift({
            name: '热门',
            heroList: await Hero.find().where({
                categories: {
                    $in: subCats
                }
            }).limit(10).lean()
        })
              res.send(cats)
    })

    // 文章详情
    router.get('/articles/:id',async(req,res)=>{
        const data = await Article.findById(req.params.id)
        res.send(data)
    })

    // 英雄详情
    router.get('/heroes/:id', async(req,res)=>{
        const data = await Hero.findById(req.params.id).populate('categories').lean()
        res.send(data)
    })
    app.use('/web/api', router)
}
<template>
  <div>
    <h1>{{ id ? "编辑" : "新建" }}英雄</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-tabs  type="border-card" value="basic">
        <el-tab-pane label="基本信息" name="basic">
          <el-form-item label="名称">
            <el-input v-model="model.name"></el-input>
          </el-form-item>
          <el-form-item label="称号">
            <el-input v-model="model.title"></el-input>
          </el-form-item>
          <el-form-item label="头像">
            <el-upload
              class="avatar-uploader"
              :action="uploadUrl"
              :show-file-list="false"
              :on-success="res=>$set(model,'avatar',res.url) "
              :headers="getAuthHeaders()"
            >
              <img v-if="model.avatar" :src="model.avatar" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="背景图">
            <el-upload
              class="avatar-uploader banner"
              :action="uploadUrl"
              :show-file-list="false"
              :on-success="res=>$set(model,'banner',res.url) "
              :headers="getAuthHeaders()"
          
            >
              <img  v-if="model.banner" :src="model.banner" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="类型">
            <el-select multiple v-model="model.categories">
              <el-option
                v-for="item of categories"
                :value="item._id"
                :label="item.name"
                :key="item._id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="难度">
            <el-rate
              style="margin-top: 0.6rem"
              :max="9"
              show-score
              v-model="model.scores.difficult"
            ></el-rate>
          </el-form-item>
          <el-form-item label="技能">
            <el-rate
              style="margin-top: 0.6rem"
              :max="9"
              show-score
              v-model="model.scores.skills"
            ></el-rate>
          </el-form-item>
          <el-form-item label="攻击">
            <el-rate
              style="margin-top: 0.6rem"
              :max="9"
              show-score
              v-model="model.scores.attack"
            ></el-rate>
          </el-form-item>
          <el-form-item label="生存">
            <el-rate
              style="margin-top: 0.6rem"
              :max="9"
              show-score
              v-model="model.scores.survive"
            ></el-rate>
          </el-form-item>
          <el-form-item label="顺风出装">
            <el-select multiple v-model="model.items1">
              <el-option
                v-for="item of items"
                :value="item._id"
                :label="item.name"
                :key="item._id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="逆风出装">
            <el-select multiple v-model="model.items2">
              <el-option
                v-for="item of items"
                :value="item._id"
                :label="item.name"
                :key="item._id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="使用技巧">
            <el-input type="textarea" v-model="model.usageTips"></el-input>
          </el-form-item>
          <el-form-item label="对抗技巧">
            <el-input type="textarea" v-model="model.battleTips"></el-input>
          </el-form-item>
          <el-form-item label="团战思路">
            <el-input type="textarea" v-model="model.teamTips"></el-input>
          </el-form-item>
        </el-tab-pane>
        <el-tab-pane label="技能" name="skills">
          <el-button @click="model.skills.push({})" size="medium" ><i class="el-icon-plus"></i> 添加技能</el-button>
          <el-row type="flex" style="flex-wrap:wrap">
            <el-col :md="12" style="margin-top:2rem;" v-for="(item,index) in model.skills" :key="index">
              <el-form-item  label="名称">
                <el-input v-model="item.name"></el-input>
              </el-form-item>

              <el-form-item  label="图标">
               <el-upload
              class="avatar-uploader"
              :action="uploadUrl"
              :show-file-list="false"
              :on-success="res=> $set(item,'icon' , res.url)"
              :headers="getAuthHeaders()"
            >
              <img v-if="item.icon" :src="item.icon" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
              </el-form-item>
                            <el-form-item  label="冷却值">
                <el-input v-model="item.delay"></el-input>
              </el-form-item>
              <el-form-item  label="消耗">
                <el-input v-model="item.cost"></el-input>
              </el-form-item>
              <el-form-item  label="描述">
                <el-input v-model="item.description" type="textarea"></el-input>
              </el-form-item>
              <el-form-item  label="小提示">
                <el-input v-model="item.tips" type="textarea"></el-input>
              </el-form-item>
              <el-form-item  >
                <el-button size="small"  type="danger" @click="model.skills.splice(index,1)">删除</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="最佳搭档"  name="partners">
          <el-button @click="model.partners.push({})" size="medium" ><i class="el-icon-plus"></i> 添加英雄</el-button>
          <el-row type="flex" style="flex-wrap:wrap">
            <el-col :md="12" style="margin-top:2rem;" v-for="(item,index) in model.partners" :key="index">
                <el-form-item  label="英雄">
                <el-select  filterable v-model="item.hero" type="textarea">
                  <el-option 
                  v-for="hero in heroes" :key="hero._id"
                  :value="hero._id"
                  :label="hero.name"
                  
                  ></el-option>
                </el-select>
              </el-form-item>                        
              <el-form-item  label="描述">
                <el-input v-model="item.description" type="textarea"></el-input>
              </el-form-item>
               <el-form-item  >
                <el-button size="small"  type="danger" @click="model.partners.splice(index,1)">删除</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
      <el-form-item>
        <el-button style="margin-top:1rem" type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "HeroesEdit",
  props: ["id"],
  data() {
    return {
      categories: [],
      items: [],
       heroes:[],
      model: {
        name: "",
        avatar: "",
        skills:[],
        partners:[],
        scores: {
          difficult: 0,
          skills: 0,
          attack: 0,
          survive: 0,
        },
      },
    };
  },
  methods: {
    async save() {
      let res;
      if (this.id) {
        res = await this.$http.put(`rest/heroes/${this.id}`, this.model);
      } else {
        res = await this.$http.post("rest/heroes", this.model);
      }
      console.log(res);

      this.$router.push("/heroes/list");
      this.$message({
        type: "success",
        message: "新建成功",
      });
    },
    async fetch() {
      const res = await this.$http.get(`rest/heroes/${this.id}`);
      this.model = Object.assign({}, this.model, res.data);
       
    },
    async fetchCategories() {
      let heroArr = [];
      const res = await this.$http.get(`rest/categories`);
      //遍历循环数组，找到父级是英雄列表的然后展示
      res.data.forEach((item) => {
        if (item.parent) {
          if (item.parent.name == "英雄分类") {
            heroArr.push(item);
          }
        }
      });
      this.categories = heroArr;   
    },
    async fetchItems() {
      const res = await this.$http.get(`rest/items`);
      this.items = res.data;
     
      
    },
    async fetchHeroes() {
      const res = await this.$http.get(`rest/heroes`);
      this.heroes = res.data;
     console.log('this is heroes',res.data);      
    },
  },

  created(){
    this.fetchCategories();
    this.fetchItems();
    this.fetchHeroes()
    this.id && this.fetch();
  },
};
</script>
<style >
.banner{
  width: 350px;
  height: 150px;
  }
  .banner .el-upload.el-upload--text{
 width: 100%;
 height: 100%;
  }
    .banner .el-upload.el-upload--text img{
      width: 100%;
      height: auto;
    }
   .banner .el-upload.el-upload--text .avatar-uploader-icon{
     line-height: 150px;
   }
</style>
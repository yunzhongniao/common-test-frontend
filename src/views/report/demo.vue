<template>
  <div class="app-container">
    <el-row>
      <el-col :span="8" :offset="8">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="下载文件">
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              multiple
              :limit="3"
              :on-exceed="handleExceed"
            >
              <el-button size="small" type="primary">点击下载示例</el-button>
            </el-upload>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <el-row>
      <el-form :model="form" title="关联到合约的期货变量选择">
        <el-form-item label="变量列表" :label-width="formLabelWidth">
          <el-select v-model="form.param" placeholder="请选择">
            <el-option label="match_count_contract" value="match_count_contract" />
            <el-option label="order_count_contract" value="order_count_contract" />
          </el-select>
        </el-form-item>
        <el-form-item label="选择品种" :label-width="formLabelWidth">
          <el-select v-model="form.variety" placeholder="请选择品种">
            <el-option label="a-大豆" value="a-大豆" />
            <el-option label="i-铁矿石" value="i-铁矿石" />
          </el-select>
        </el-form-item>
        <el-form-item label="选择合约" :label-width="formLabelWidth">
          <el-select v-model="form.contract" placeholder="请选择合约">
            <el-option label="a20200101" value="a20200101" />
            <el-option label="a20200102" value="a20200102" />
          </el-select>
        </el-form-item>
        <el-form-item label="变量引用" :label-width="formLabelWidth">
          <el-input v-model="value1" />
        </el-form-item>
      </el-form>
    </el-row>
    <el-divider />
    <el-row>
      <el-form :model="form" title="不需要级联选择的变量">
        <el-form-item label="变量列表" :label-width="formLabelWidth">
          <el-select v-model="form.param2" placeholder="请选择">
            <el-option label="match_count_contract" value="match_count_contract" />
            <el-option label="order_count_contract" value="order_count_contract" />
          </el-select>
        </el-form-item>
        <el-form-item label="变量引用" :label-width="formLabelWidth">
          <el-input v-model="value2" />
        </el-form-item>
      </el-form>
    </el-row>
    <el-divider />
    <pre>
  ### 变量定义
开发人员在开发阶段确定变量的所有信息。

## 报表模板制作
报表模板支持docx格式文档。变量替换支持正文中的数据替换，图表数据替换以及表格数据替换。被替换的内容需要满足固定格式。
### 正文变量
变量格式：{{ variable }}。
### 图表变量
点击图表，右侧出现的浮框选择"设置图表区域格式"-》右侧出现的配置框中，在顶端的下拉框中选择"图表区"-》选择“大小与属性”-》填写“可选文字”的"标题"，格式为：{{ chartname }}。。
### 表格变量
变量格式：{{ variable }}。

## 模板的相关信息

信息包括：模板id，模板名称，模板关联的数据，模板的上传时间，模板上传用户名。
### 模板id
用户指定模板的编号，允许输入数字和字母，64个字符。
编号全局唯一。
### 模板名称
模板名称用于描述模板意义，生成报表的名称。64个字符。
### 模板关联的数据
开发人员定制若干数据源。数据源的获取数据方式和数据的格式都在开发阶段固定。
模板中引用变量的名称。模板生成报表时，自动通过数据源的数据替换模板中的变量。
变量的名称全局唯一。
### 模板的上传时间
模板创建或者更新的时间。
### 模板上传用户名
上传模板的用户名。

## 模板管理
可以下载和上传模板。上传模板会替换之前的模板。
系统没有备份功能，被替换掉的模板直接丢失。

## 变量管理
可以查看、搜索变量列表。
业务人员不需要管理变量列表，只需要从系统页面查询变量，然后将变量的引用方式用到报表模板中。

## 报表生成下载
用户选择模板后，点击生成一个新的报表。
报表的生成需要使用盘后的统计数据，所以必须等到数据生成完毕才可以生成报表。
报表以交易日为单位进行管理，每个交易日每个模板只会保存最新生成的报表。
用户可以按照交易日查询、下载生成的报表。
用户可以查询、下载历史交易日生成的报表。
历史报表会定期清理。报表清除规则：自动删除十五个交易日外的报表。

# 2 报表依赖数据生成
mpp中生成并存储报表依赖的数据。
数据是一个固定的集合，不支持动态的增删。开发阶段通过用户需求定制数据。
数据生成时机：盘后统一生成数据。
数据格式：根据不同的需求，设计不同的数据获取方式和数据存储方式。
数据库保留历史数据。
</pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        param: '',
        variety: '',
        contract: '',
        param2: ''
      }
    }
  },
  computed: {
    value1() {
      return '{{' + this.form.param + '.' + this.form.variety + '.' + this.form.contract + '}}'
    },
    value2() {
      return '{{' + this.form.param2 + '}}'
    }
  }
}
</script>


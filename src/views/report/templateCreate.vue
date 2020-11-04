<template>
  <div class="app-container">
    <el-row>
      <el-col :span="8" :offset="8">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="模板id">
            <el-input v-model="form.id" />
          </el-form-item>
          <el-form-item label="模板名称">
            <el-input v-model="form.name" />
          </el-form-item>
          <el-form-item label="关联变量">
            <el-button type="primary" @click="dialogFormVisible = true">添加变量</el-button>
            <el-button type="primary" @click="dialogFormVisible2 = true">添加变量2</el-button>
            <el-button type="primary">删除变量</el-button>
            <el-input v-model="form.name1">变量1</el-input>
            <el-input v-model="form.name2">变量2</el-input>
            <el-input v-model="form.name3">变量3</el-input>
            <el-input v-model="form.name4">变量4</el-input>
          </el-form-item>
          <el-form-item label="上传文件">
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              multiple
              :limit="3"
              :on-exceed="handleExceed"
              :file-list="fileList"
            >
              <el-button size="small" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-form-item>
          <el-form-item>
            <el-button>取消</el-button>
            <el-button type="primary">创建</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <el-dialog title="生成变量" :visible.sync="dialogFormVisible">
      <el-form :model="form">
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
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">生成报表</el-button>
      </div>
    </el-dialog>
    <el-dialog title="生成变量" :visible.sync="dialogFormVisible2">
      <el-form :model="form">
        <el-form-item label="变量列表" :label-width="formLabelWidth">
          <el-select v-model="form.param2" placeholder="请选择">
            <el-option label="match_count_total" value="match_count_total" />
            <el-option label="order_count_total" value="order_count_total" />
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible2 = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible2 = false">生成报表</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialogFormVisible: false,
      dialogFormVisible2: false,
      formLabelWidth: '200px',
      form: {
        id: '',
        name: '',
        name1: '{{match_total_count}}',
        name2: '{{match_total_count}}',
        name3: '{{match_total_count}}',
        name4: '{{match_total_count}}',
        region: '',
        param: '',
        param2: '',
        variety: '',
        contract: ''
      },
      fileList: [{ name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }]
    }
  },
  methods: {
    handleClick() {
      this.dialogFormVisible = true
    },
    handleClick2() {
      this.dialogFormVisible2 = true
    },
    onSubmit() {
      console.log('submit!')
    }
  }
}
</script>

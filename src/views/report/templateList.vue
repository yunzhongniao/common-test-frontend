<template>
  <div class="app-container">
    <el-tag>报表列表</el-tag>
    <div class="block">
      <el-button
        type="success"
        size="small"
        icon="el-icon-circle-check-outline"
      >
        创建
      </el-button>
    </div>
    <el-table
      :data="tableData"
      style="width: 100%"
    >
      <el-table-column
        prop="templateId"
        label="模板id"
      />
      <el-table-column
        prop="templateName"
        label="模板名称"
      />
      <el-table-column
        prop="createTime"
        label="模板创建时间"
      />
      <el-table-column
        prop="updateTime"
        label="模板上传时间"
      />
      <el-table-column
        prop="updateUser"
        label="模板上传用户名"
      />
      <el-table-column align="center" label="操作" width="320">
        <template>
          <el-button
            type="success"
            size="small"
            icon="el-icon-circle-check-outline"
          >
            下载
          </el-button>
          <el-button
            type="success"
            size="small"
            icon="el-icon-circle-check-outline"
          >
            编辑
          </el-button>
          <el-button
            type="success"
            size="small"
            icon="el-icon-circle-check-outline"
            @click="handleClick()"
          >
            生成
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="生成报表" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="模板名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off" />
        </el-form-item>
        <el-form-item label="选择交易日期" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择交易日">
            <el-option label="20200101" value="20200101" />
            <el-option label="20200102" value="20200102" />
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">生成报表</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogFormVisible: false,
      formLabelWidth: '120px',
      form: {
        name: '选择的模板id',
        region: ''
      },
      tableData: [{
        templateId: 'firstTemplate',
        templateName: '第一个模板',
        templatePath: '/root/report/20200202/firstTemplate-report.docx',
        updateUser: 'yunzhong',
        createTime: '20201001 10:10:10',
        updateTime: '20201001 10:10:10'
      },
      {
        templateId: 'firstTemplate',
        templateName: '第一个模板',
        templatePath: '/root/report/20200202/firstTemplate-report.docx',
        updateUser: 'yunzhong',
        createTime: '20201001 10:10:10',
        updateTime: '20201001 10:10:10'
      },
      {
        templateId: 'firstTemplate',
        templateName: '第一个模板',
        templatePath: '/root/report/20200202/firstTemplate-report.docx',
        updateUser: 'yunzhong',
        createTime: '20201001 10:10:10',
        updateTime: '20201001 10:10:10'
      },
      {
        templateId: 'firstTemplate',
        templateName: '第一个模板',
        templatePath: '/root/report/20200202/firstTemplate-report.docx',
        updateUser: 'yunzhong',
        createTime: '20201001 10:10:10',
        updateTime: '20201001 10:10:10'
      }]
    }
  },
  methods: {
    handleClick() {
      this.dialogFormVisible = true
    }
  }
}
</script>

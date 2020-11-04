<template>
  <div class="app-container">
    <div class="block">
      <span class="demonstration">选择交易日期：</span>
      <el-date-picker
        v-model="value1"
        type="date"
        placeholder="选择日期"
      />
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
        prop="reprotId"
        label="报表id"
      />
      <el-table-column
        prop="reprotName"
        label="报表名称"
      />
      <el-table-column
        prop="createDate"
        label="交易日期"
      />
      <el-table-column
        prop="createTime"
        label="生成时间"
      />
      <el-table-column align="center" label="操作">
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
            重新生成
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        templateId: 'firstTemplate',
        reprotId: 'firstTemplate-report',
        reprotName: '第一个报表',
        reprotPath: '/root/report/20200202/firstTemplate-report.docx',
        createDate: '20201001',
        createTime: '20201001 10:10:10'
      },
      {
        templateId: 'firstTemplate',
        reprotId: 'firstTemplate-report',
        reprotName: '第二个报表',
        reprotPath: '/root/report/20200202/firstTemplate-report.docx',
        createDate: '20201001',
        createTime: '20201001 10:10:10'
      },
      {
        templateId: 'firstTemplate',
        reprotId: 'firstTemplate-report',
        reprotName: '第三个报表',
        reprotPath: '/root/report/20200202/firstTemplate-report.docx',
        createDate: '20201001',
        createTime: '20201001 10:10:10'
      },
      {
        templateId: 'firstTemplate',
        reprotId: 'firstTemplate-report',
        reprotName: '第四个报表',
        reprotPath: '/root/report/20200202/firstTemplate-report.docx',
        createDate: '20201001',
        createTime: '20201001 10:10:10'
      }]
    }
  }
}
</script>


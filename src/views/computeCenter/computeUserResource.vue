<template>
  <div class="dashboard-container">
    <component :is="currentRole" />
  </div>
</template>

<script>
import DashboardResoure from './resource'

export default {
  name: 'ComputeUserResource',
  components: { DashboardResoure },
  data() {
    return {
      currentRole: 'DashboardResoure'
    }
  },
  computed: {
  },
  created() {
  }
}
</script>

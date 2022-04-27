<template>
  <div class="home">    
    <ResumeChart />
  </div>
</template>

<script>
// @ is an alias to /src
import ResumeChart from '@/components/ResumeChart.vue'

export default {
  name: 'HomeView',
  components: {    
    ResumeChart
  }
}
</script>

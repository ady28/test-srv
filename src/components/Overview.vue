<template>
  <div class="m-4">
    <h3 class="text-white">Overview</h3>
    <OverviewSummaryCards />
  </div>
</template>

<script>
import OverviewSummaryCards from './OverviewSummaryCards.vue'
export default {
  name: "OverviewPage",
  components: { OverviewSummaryCards }
}
</script>
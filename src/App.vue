<script>
import Sidedbar from '@/components/sidebar/Sidebar.vue'
import { sidebarWidth } from './components/sidebar/state'
import "./main.js"
export default{
  components: { Sidedbar },
  setup(){
    return { sidebarWidth }
  }
}

</script>

<template>
  <Sidedbar />
  <div :style="{ 'margin-left': sidebarWidth }">
  <router-view />
</div>

</template>




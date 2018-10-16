<template>
  <div id="app">
<div id="wrapper">
<div id="main">
						<div id="scroll-content" class="inner">
								<router-view></router-view>
						</div>
					</div>

					<div id="sidebar" :class="{'inactive':sidebarActive}">
						<div class="inner">
            
							<appMainMenu />
                
						</div>
            <a href="#" @click="sidebarActive=!sidebarActive" class="toggle">Toggle</a>
					</div>

			</div>

   </div>
</template>

<script>
import appMainMenu from './components/main/Menu.vue';
export default {
 components: {
   appMainMenu
 },
 data(){
   return {
     sidebarActive: false
   }
 },
 methods:{
   
 }
}
</script>

<style lang="scss">

@import "assets/sass/main.scss";

</style>

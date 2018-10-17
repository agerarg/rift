<template>
  <div id="app">
<div id="wrapper">
<appMainNavBar @toggleSideBar="sidebarActive=!sidebarActive" />
<div id="main">
	
						<div id="scroll-content" class="inner">
							<transition name="nextPageAnim" mode="out-in">
								<router-view></router-view>
							</transition>
						</div>
					</div>

					<div id="sidebar" :class="{'inactive':sidebarActive}">
						<div class="inner">
            
							<appMainMenu />
                
						</div>
            
					</div>
				
			</div>
				<appMainChatOnScreen />
   </div>
</template>

<script>
import appMainMenu from './components/main/Menu.vue';
import appMainNavBar from './components/main/NavBar.vue';
import appMainChatOnScreen from './components/main/Chats/ChatOnScreen.vue';
export default {
 components: {
   appMainMenu,
	 appMainNavBar,
	 appMainChatOnScreen
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

.nextPageAnim-enter-active{
	animation: nextPEnter 1s ease-out forwards;
}
.nextPageAnim-leave-active{
		animation: nextPLeave 1s ease-out forwards;
}

@keyframes nextPEnter {
	0%{
				opacity: 0;
				transform: translateX(-50%);
	}
	100%{
				opacity: 1;
				transform: translateX(0);

	}
}
@keyframes nextPLeave {
	0%{
				opacity: 1;
					transform: translateX(0);
	}
	100%{
				opacity: 0;
				transform: translateX(-50%);
	}
}

</style>

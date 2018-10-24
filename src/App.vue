<template>
  <div id="app" >
		<appMainTopBar :isMakingPost="isWritingMsg" />
		<div id="Container" class="Container">
			<transition  name="routerAnim" mode="out-in">
				<router-view name="left"></router-view>
			</transition>
			<transition  name="routerAnim" mode="out-in">
				<router-view name="mid"></router-view>
			</transition>
			<transition  name="routerAnim" mode="out-in">
				<router-view name="right"></router-view>
			</transition>
		</div>
		<div @click="isWritingStop" :class="{imNotThefather:isWritingMsg}"></div>
		<span id="textSizeFix"></span>
  </div>
</template>

<script>
import appMainTopBar from './components/main/TopBar.vue';

export default {
	components: {
	appMainTopBar
	},
	methods:{
		isWritingStop(){
			this.$store.dispatch('isNotWriting');
			return false;
		},
		loadMorePosts(){
			
		}
	},
	computed:{
		isWritingMsg(){
			return this.$store.getters.isWriting;
		},
		allowRightContent(){
			return this.$store.state.allowRightContent;
		}
	}
}
</script>
<style lang="scss">
@import 'assets/sass/main.scss';

#textSizeFix{
	position: absolute;
	top: 0px;
	left: 0px;
	}

.routerAnim-enter-active{
	 position: relative;
	animation: nextPEnter .5s ease-out forwards;
}
.routerAnim-leave-active{
	 position: relative;
		animation: nextPLeave .5s ease-out forwards;
}

@keyframes nextPEnter {
	0%{
				opacity: 0;
				transform: rotateY(90deg);
	}
	100%{
				opacity: 1;
				transform: rotateY(0);

	}
}
@keyframes nextPLeave {
	0%{
				opacity: 1;
					transform: rotateY(90deg);
	}
	100%{
				opacity: 0;
				transform: rotateY(0);
	}
}

</style>

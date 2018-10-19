<template>
  <div id="app" >
		<appMainTopBar :isMakingPost="isWritingMsg" />
		<div id="Container" class="Container">
			<appMainContentLeft />
			<router-view></router-view>
			<appMainContentRight v-if="allowRightContent" />
		</div>
		<div @click="isWritingStop" :class="{imNotThefather:isWritingMsg}"></div>
		<span id="textSizeFix"></span>
  </div>
</template>

<script>
import appMainTopBar from './components/main/TopBar.vue';
import appMainContentLeft from './components/main/ContentLeft.vue';
import appMainContentRight from './components/main/ContentRight.vue';

export default {
	components: {
	appMainTopBar,
	appMainContentLeft,
	appMainContentRight
	},
	methods:{
		isWritingStop(){
			this.$store.state.isWritingMsg=false;
			return false;
		},
		loadMorePosts(){
			
		}
	},
	computed:{
		isWritingMsg(){
			return this.$store.state.isWritingMsg;
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

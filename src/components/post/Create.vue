<template>
    <div id="shareContent" class="contentBox" @click="makingNewMsg">
					<div class="boxHead">Share something to the world</div>
					<div class="boxBody"> 
						<div class="boxHead-img">
							<img src="@/assets/images/pic01.jpg" width="50" height="50" />
						</div>
						<div class="boxHead-newMsg">
							<textarea @keyup.enter.native="share" v-model="message" class="newMsg" rows="2" cols="32" placeholder="what are u thinking?" />
						</div>
					</div>	
						<div class="boxHead-options">
							<div class="options"><i class="far fa-image"></i> Image</div>
							<div class="options"><i class="fas fa-user-plus"></i> Friends</div>
						</div>
						<div class="button-conteiner">
							<div @click="share" class="button-share">Share</div>
						</div>
				</div>
</template>
<script>
export default {
	data(){
		return{
			message:""
		}
	},
    methods:{
		share(){
			this.$store.dispatch('isNotWriting');
			this.$emit("newShare",this.message);
			this.message="";
		},
        makingNewMsg(){
				this.$store.dispatch('isWriting');
        }
    }
}
</script>
<style lang="scss" scoped>
	#shareContent{
		z-index: 11;
		max-width: 500px;
		position: relative;
	}
</style>


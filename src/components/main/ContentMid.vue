<template>
  <div class="Middle">
	 			 <appCreate />
				<appPost v-for="post in posts" :postData="post" :key="post.id" />
  </div>	
</template>
<script>
import appPost from '../post/Post.vue';
import appCreate from '../post/Create.vue';
export default {
	components:{
		appPost,
		appCreate
	},
	data(){
		return {
			scrollIndex:0,
			triggerLoadPosts:{load:false},
			posts:[],
			postId:1	
		}
	},
	mounted(){
			window.addEventListener('scroll', this.handleScroll);
			for(let i=0;i<5;i++)
			{
				this.postId++;
				this.posts.push({
					id: this.postId,
					name: 'Juan Carlos',
					group: 'Random Group',
					text: 'aparte de goblin slayer vi que hubo mucha gente quejandose cuando violaban a las mujeres ahi y la muerte que les daban, no imagino si algun dia animaran gantz, lo cual dudo pero si se hace, adios compañiia que lo hizo xD'
				});
			}
	},
	destroyed(){
		window.removeEventListener("scroll", this.handleScroll);
	},
	methods:{
		loadMorePosts(){
			for(let i=0;i<5;i++)
			{
				this.postId++;
				this.posts.push({
					id: this.postId,
					name: 'Juan Carlos',
					group: 'Random Group',
					text: 'aparte de goblin slayer vi que hubo mucha gente quejandose cuando violaban a las mujeres ahi y la muerte que les daban, no imagino si algun dia animaran gantz, lo cual dudo pero si se hace, adios compañiia que lo hizo xD'
				});
			}
		},
		handleScroll(sc){
			this.$store.state.isWritingMsg=false;
			this.scrollIndex=window.pageYOffset;
			console.log(this.scrollIndex);
			if(this.scrollIndex>(1500*this.$store.state.loadDataPack) && !this.triggerLoadPosts.load)
			{
				this.$store.state.loadDataPack++;
				this.loadMorePosts();
			}
		},
		 makingPostStop(){
            this.$store.state.isWritingMsg=false;
			return false;
        }
	},
	computed:{
        isMakingPost(){
            return this.$store.state.isWritingMsg;
        }
	}
}
</script>

<style lang="scss">
.postConteiner{
	position: relative;
}
.theOne{
	z-index: 10;
}
.button-conteiner{
	position: relative;
	.button-share {
		background-color: #4267B2; 
		position: absolute;
		border: none;
		color: white;
		padding-top: 5px;
		text-align: center;
		text-decoration: none;
		display: block;
		font-size: 14px;
		font-weight: bold;
		height: 28px;
		width: 90%;
		border-radius: 2px;
		cursor: pointer;

		left: 50%;
		transform: translate(-50%, 0) ;
		&:hover{
			background-color: #365899;
		}
		
	}
}
.contentBox{
	border: 1px solid #DDDFE2; 
	border-radius: 5px;
	background-color: #FFFFFF;
	margin-bottom: 10px;
	min-height: 200px;
	.boxHead-options{
		border-top: #E9EBEE solid 1px;
		height: 50px;
		margin-top: 5px;
		.options{
			float: left;
			border-radius: 50px;
			background-color: #F5F6F7;
			width: 100px;
			height: 32px;
			font-size: 14px;
			font-weight: bold;
			cursor: pointer;
			padding-top: 10px;
			margin-top: 5px;
			text-align: center;
			&:hover{
				background-color: #EBEDF0;
			}
		}
	}
	.boxBody{
		padding-top: 5px;
	}
	.boxHead{
		background-color: #F5F6F7;
		height: 30px;
		border-bottom: 1px #DDDFE2 solid;
		padding: 5px;
		font-size: 12px;
		font-weight: bold;
		  border-radius: 5px 5px 0px 0px;
	}
	.boxHead-img{
		float: left;
		height: 100%;
		width: 60px;
		text-align: center;
		img{
			 border-radius: 50%;
		}
	}
	.newMsg{
		background-color: white;
		border: 0px;
		resize: none;
		font-size: 24px;
		font-family: Arial, Helvetica, sans-serif;
		 &::placeholder {
           opacity: 0.5; 
    }
	}
	.newMsg:focus {
    outline: none !important;
    border:0px;
    box-shadow: 0;
}
}

</style>

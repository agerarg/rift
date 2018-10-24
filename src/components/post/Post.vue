<template>
    <div class="posts" >
						<div class="contentBox">
						<div class="boxPostHead"> 
							<div class="boxPostHead-img">
								<img src="@/assets/images/pic01.jpg" width="40" height="40" />
							</div>
							<div class="boxPostHead-profile">
								<div class="profile-name profile-big"><a href="#">{{ postData.name }}</a> <i class="fas fa-caret-right"></i> <a href="#">{{ postData.group  }}</a>  </div>
								<div class="profile-time"> 25 Min</div>
							</div>
						</div>	
							<div class="text-content">
									{{ postData.text  }}
							</div>
							<div class="data-content">
									<div class="data-content-likes">Likes: 3</div>
									<div class="data-content-comments">3 comments</div>
							</div>
							<div class="options-content">
									<div @mouseover="mouseOverLike" @mouseleave="mouseLeaveLike" class="option-button-post">
									<i class="far fa-thumbs-up"></i> 
									Like
									</div>
									<div class="option-button-post" @click="FocusComment(postData.id)">
										<i class="far fa-comment-alt"></i>
										Comment
									</div>
										<div class="option-button-post">
										<i class="fas fa-share"></i>
										Share
									</div>
									<transition name="smilesOpt">
								 <div v-if="showLikesOnMain" @mouseover="mouseOverLike" @mouseleave="mouseLeaveLike"  class="commments-smiles">
									 <div class="smile-box">
										 <div class="smile-desc">Like</div>
									 	<div class="smile-icon"><i class="fas fa-thumbs-up"></i></div>
									 </div>
									 <div class="smile-box">
										 <div class="smile-desc">Love</div>
										 <div class="smile-icon"><i class="fab fa-gratipay"></i> </div>
									  </div>
									 <div class="smile-box">
										  <div class="smile-desc">Haha</div>
										<div class="smile-icon"> <i class="fas fa-laugh-squint"></i> </div>
									  </div>
									 <div class="smile-box">
										  <div class="smile-desc">Wow</div>
									 	<div class="smile-icon"><i class="fas fa-surprise"></i> </div>
									  </div>
									 <div class="smile-box">
										 <div class="smile-desc">Sad</div>
									 	<div class="smile-icon"><i class="fas fa-sad-tear"></i></div> 
									  </div>
									 <div class="smile-box">
										 <div class="smile-desc">Angry</div>
									 	<div class="smile-icon"><i class="fas fa-angry"></i></div>
									  </div>
								</div>
									</transition>
							</div>

							<div class="comments" >
									<div class="comments-body" v-for="(comment,index) in comments" :key="index">
										<div class="comment-box "> 
											<div>
												<div class="comments-img">
													<img src="@/assets/images/pic01.jpg" width="35" height="35" />
												</div>
											</div>
											<div>
												<div class="comments-textBox">
													<p class="comments-message"><span class="profile-name"><a href="#">{{comment.name}}</a></span> {{comment.text}}</p>
												</div>
												<div class="comments-options normal-link"><a href="#">Like</a> · <a href="#">Comment</a> · 51 min</div>
											</div>

										</div>	
									</div>
							</div>

                            <appPostComment :postId="postData.id" @Answer="newAnsert" />
					</div>
				</div>
</template>
<script>
import appPostComment from './MyComment.vue';
export default {
	props: ['postData'],
    data(){
        return{
			comments:[],
			showLikesOnMain:false,
			likeTimer:false
        }
    },
    mounted(){
        this.comments.push({
            name: 'Reymont Kings Kenedy',
            text: 'Mejorará el rendimiento'
        });
         this.comments.push({
            name: 'Reymont Kings Kenedy',
            text: 'Mejorará el rendimiento'
        });
         this.comments.push({
            name: 'Reymont Kings Kenedy',
            text: 'Mejorará el rendimiento'
        });
        
    },
    components:{
        appPostComment
    },
    methods:{
		FocusComment(id)
		{
			//this.$refs["comment_" + id][0].$el.focus();
			document.getElementById("comment_" + id).focus();
		},
		mouseLeaveLike(){
				setTimeout(()=>{
					if(!this.likeTimer)
						this.showLikesOnMain=false;
				},500);
				this.likeTimer=false;
		},
		mouseOverLike(){
			if(!this.likeTimer)
			{
				setTimeout(()=>{
					if(this.likeTimer)
						this.showLikesOnMain=true;
				},500);
			}
			this.likeTimer=true;
		},
        newAnsert(text){
             this.comments.push({
            name: 'Agustin',
            text: text
        });
        }
    }
}
</script>

<style lang="scss" scoped>

.smilesOpt-enter-active {
	animation: smileEnter .2s ease-out forwards;
}
.smilesOpt-leave-active {
	animation: smileLeave .5s ease-out forwards;
}


@keyframes smileEnter {
	0%{
		 opacity: 0;
 		 transform: translateY(30px);
	}
	100%{
		opacity: 1;
 		 transform: translateY(0px);
	}
}
@keyframes smileLeave {
	0%{
		opacity: 1;
	}
	100%{
		opacity: 0;
	}
}
.boxPostHead{
	padding: 10px;
	position: relative;
}
.commments-smiles{
	position: absolute;
	font-size: 25px;
	background-color: #FFFFFF;
	border: #B6B6B6 1px solid;
	border-radius: 50px;
	padding: 2px;
	top: -56px;	
	left: -15px;
	.smile-box{
		float: left;
		width: 50px;
		text-align: center;
		font-size: 40px;
		height: 50px;
		position: relative;
		i{
			position: relative;
			cursor: pointer;
			transition: all .2s;
			color: #1D2129;
			&:hover{
				font-size: 50px;
				color: #365899;
			}
		}
		.smile-desc{
			position: absolute;
			font-size: 12px;
			color: white;
			background: black;
			opacity: 0;
			transition: all 0.2s;
			border-radius: 25px;
			top:-5px;
			width: 50px;
			left: 0;
		}
		&:hover > .smile-desc{
			opacity: 1;
			top:-15px;
		}
		

	}
}
.profile-time{
    font-size: 12px;
    color: #868A91;
}

.posts{
    position: relative;
	max-width: 500px;
	.comments{
		border-top: 2px #E5E5E5 solid;
		height: 100%;
		.comments-img{
			width: 40px;
			padding-left: 10px;
			img{
			 border-radius: 50%;
			}
		}
		.comment-box{
			  display: flex;
			  flex-wrap: nowrap;
		}
		.comments-textBox{
			margin-top: -15px;
		}
		.comments-message{
			padding: 10px;
			margin-left: 10px;
			
			font-size: 14px;
			background-color: #EFF1F3;
			border-radius: 25px;
		}
		.comments-body{
			padding-top: 10px;
		}
		.comments-options{
			margin-top: -15px;
			margin-left: 20px;
			color: #868A91;
		}
	}
	.data-content{
		padding: 10px;
		height: 40px;
		.data-content-likes{
			float: left;
			font-size: 14px;
		}
		.data-content-comments{
			float: right;
			color: #1D2129;
			opacity: .8;
			font-size: 14px;
		}
		
	}
	.options-content{
		position: relative;
		height: 32px;
		border-top: 1px #E5E5E5 solid;
		margin-left: 10px;
		margin-right: 10px;
		.option-button-post{
			float: left;
			width: 33%;
			cursor: pointer;
			height: 30px;
			text-align:center;
			padding-top: 5px;
			&:hover{
				background-color: #F6F6F7;
		}
	
	}
	}
	.text-content{
		padding-left: 10px;
		padding-right: 10px;
		font-size: 14px;
	}
	.boxPostHead-img{
		float: left;
		height: 50px;
		width: 60px;
		img{
			 border-radius: 50%;
		}
	}
	.boxPostHead-profile{
		width: 100%;
		height: 50px;
		
		.profile-name{
			font-size: 16px;
			font-weight: bold;
			:link, :visited{
				color: #365899;
				font-size: 16px;
				text-decoration: none;
				&:hover{
					text-decoration:underline;
				}
			}
			
			
		}
	}
}
</style>

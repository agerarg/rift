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
									<div class="option-button-post">
									<i class="far fa-thumbs-up"></i> 
									Like
									</div>
									<div class="option-button-post">
										<i class="far fa-comment-alt"></i>
										Comment
									</div>
										<div class="option-button-post">
										<i class="fas fa-share"></i>
										Share
									</div>
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
												<div class="comments-options normal-link"><a href="#">Me gusta</a> · <a href="#">Responder</a> · 51 min</div>
											</div>

										</div>	
									</div>
							</div>

                            <appPostComment @Answer="newAnsert" />
					</div>
				</div>
</template>
<script>
import appPostComment from './MyComment.vue';
export default {
	props: ['postData'],
    data(){
        return{
            comments:[]
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
.boxPostHead{
	padding: 10px;
	position: relative;
}

.profile-time{
    font-size: 12px;
    color: #868A91;
}

.posts{
    position: relative;
   
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

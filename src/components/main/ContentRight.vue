<template>
  <div class="Right">
				 <div class="fixedRight">
				<div class="contentBox right-box">
					<div class="right-box-img">
						<img width="100%"  src="https://ep01.epimg.net/verne/imagenes/2017/02/07/articulo/1486460356_768109_1486460432_noticia_normal.jpg" />
					</div>
					<div class="right-box-body">
						<div class="profile-name"><a href="#"> El LoL NO es basura</a></div>
						<div class="right-box-data">5 amigos · 118.000 miembros</div>
					</div>
				</div >
				<div class="contentBox right-box">
					<div class="right-box-img">
						<img width="100%"  src="@/assets/images/meme.png" />
					</div>
					<div class="right-box-body">
						<div class="profile-name"><a href="#"> Meme Land</a></div>
						<div class="right-box-data"> 113.000 miembros</div>
					</div>
				</div >

				 <div class="copyright">BOTs © 2018</div>
				 </div>
			</div>
</template>
<style lang="scss" scoped>
	.right-box{
		padding: 10px;
	}
	.fixedRight{
		position: fixed;
		width: 310px;
	}
	.copyright{
		text-align: center;
		font-size: 12px;
	}
	.profile-name{
			font-weight: bold;
			:link, :visited{
				font-size: 12px;
				color: #365899;
				text-decoration: none;
				&:hover{
					text-decoration:underline;
				}
			}
	}
	.right-box-data{
		font-size: 14px;
		color: #868A91;
	}
	.right-box-img{
		img{
			border-radius: 2px;
		}
	}
</style>

<template>
   <div class="Left">
	   <div class="fixedLeft">
				<div class="boxToRight">
					<div class="titleRight">
						Groups:
					</div>
					<div class="buttonRight">
						<i class="fas fa-users"></i> Some Group
					</div>
					<div class="buttonRight">
						<i class="fas fa-users"></i> Some Group
					</div>
					<div class="buttonRight">
						<i class="fas fa-users"></i> Some Group
					</div>
					<div class="buttonRight">
						<i class="fas fa-users"></i> Some Group
					</div>
					<div class="buttonRight">
						<i class="fas fa-users"></i> Some Group
					</div>
				</div>
			</div>
   </div>		
</template>
<style lang="scss" scoped>
.titleRight{
	width: 185px;
	padding: 5px;
	font-size: 16px;
	font-weight: bold;
	color: #616770;

}
.buttonRight{
	width: 185px;
	border: #E9EBEE 1px solid;
	transition: all 0.2s;
	font-size: 14px;
	padding: 5px;
	cursor: pointer;
	&:hover{
		 background-color: #F5F6F7;
			border: #DDDFE2 1px solid;
	}
}
.boxToRight{
	float: right;
	width: 200px;
}
.fixedLeft{
	position: fixed;
}
</style>

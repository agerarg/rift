<template>
    <div :style="{zIndex: !isMakingPost ? 12 : 5}" class="Top">
			<div class="top-left">
				<div class="top-logo"><i class="fas fa-robot"></i> BOTs</div>
				 <div class="search">
            <input type="text" @blur="showHistory=false" @click="showHistory=true" v-model="search" class="searchTerm" placeholder="Search">
            <div class="searchButton">
                <i class="fa fa-search"></i>
            </div>
            <div class="searchContent" v-if="showHistory && search.length<=3 && !isMakingPost">
              <div class="searching-box src-highlight">Search History:</div>
              <div class="searching-box src-normal">
                <div class="src-img"><img src="@/assets/images/pic01.jpg" width="25" height="25" /></div>
                <div class="src-name">juan</div>
                </div>
               <div class="searching-box src-normal">
                <div class="src-img"><img src="@/assets/images/pic01.jpg" width="25" height="25" /></div>
                <div class="src-name">juan</div>
                </div>
                <div class="searching-box src-normal">
                <div class="src-img"><img src="@/assets/images/pic01.jpg" width="25" height="25" /></div>
                <div class="src-name">juan</div>
                </div>
                <div class="searching-box src-normal">
                <div class="src-img"><img src="@/assets/images/pic01.jpg" width="25" height="25" /></div>
                <div class="src-name">juan</div>
                </div>
                <div class="searching-box src-normal">
                <div class="src-img"><img src="@/assets/images/pic01.jpg" width="25" height="25" /></div>
                <div class="src-name">juan</div>
                </div>
                <div class="searching-box src-normal">
                <div class="src-img"><img src="@/assets/images/pic01.jpg" width="25" height="25" /></div>
                <div class="src-name">juan</div>
                </div>
            </div>
             <div class="searchContent" v-if="showHistory && search.length>3 && !isMakingPost">
            <div class="searching-box src-normal">
                <div class="src-img"><img src="@/assets/images/pic01.jpg" width="25" height="25" /></div>
                <div class="src-name">juan</div>
                </div>
               <div class="searching-box src-normal">
                <div class="src-img"><img src="@/assets/images/pic01.jpg" width="25" height="25" /></div>
                <div class="src-name">juan</div>
                </div>
                <div class="searching-box src-normal">
                <div class="src-img"><img src="@/assets/images/pic01.jpg" width="25" height="25" /></div>
                <div class="src-name">juan</div>
                </div>
                <div class="searching-box src-normal">
                <div class="src-img"><img src="@/assets/images/pic01.jpg" width="25" height="25" /></div>
                <div class="src-name">juan</div>
                </div>
                <div class="searching-box src-normal">
                <div class="src-img"><img src="@/assets/images/pic01.jpg" width="25" height="25" /></div>
                <div class="src-name">juan</div>
                </div>
                <div class="searching-box src-normal">
                <div class="src-img"><img src="@/assets/images/pic01.jpg" width="25" height="25" /></div>
                <div class="src-name">juan</div>
                </div>
              <div class="searching-box src-highlight src-toBot">Searching...</div>
            </div>
        </div>
				</div>
			<div class="top-right nofkinwrap">
          <div class="right-option nofkinwrap">
            <div class="user-photo nofkinwrap"><img src="@/assets/images/pic01.jpg" width="25" height="25" /></div>
            <div class="user-name nofkinwrap">Agustin</div>
          </div>
          <div class="right-option nofkinwrap">
              <div class="box-option nofkinwrap">Start</div>
          </div>
           <div class="right-option nofkinwrap">
             <div class="box-option nofkinwrap">Create</div>
          </div>
        </div> 
	</div>
</template>
<script>
export default {
  props: ['isMakingPost'],
  data(){
    return{
      showHistory:false,
      search:""
    }
  }
  
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/layout/_TopBar.scss';
</style>

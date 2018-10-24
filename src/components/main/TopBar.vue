<template>
    <div :style="{zIndex: !isMakingPost ? 12 : 5}" class="Top">
			<div class="top-left">
				<div class="top-logo"><i class="fas fa-robot"></i> BOTs</div>
				 <div class="search">
            <input id="searchMaster" type="text" @blur="showHistory=false" @click="showHistory=true" v-model="search" class="searchTerm" placeholder="Search">
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
          <div @click="perfil" class="right-option nofkinwrap">
            <div class="user-photo nofkinwrap"><img src="@/assets/images/pic01.jpg" width="25" height="25" /></div>
            <div class="user-name nofkinwrap">Agustin</div>
          </div>
          <div class="right-option nofkinwrap">
              <div @click="start" class="box-option nofkinwrap">Home</div>
          </div>
           <div class="right-option nofkinwrap">
             <div  class="box-option nofkinwrap">Create</div>
          </div>
           <div class="right-option-icons nofkinwrap">
             <div class="box-option-icons nofkinwrap">
               <i class="fas fa-user-friends main-option-icons"></i> 
               <i class="fas fa-comment main-option-icons"></i>
                <i class="fas fa-bell main-option-icons"></i>
                <i class="fas fa-sign-out-alt main-option-icons"></i>
              </div>
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
  },
  methods:{
    start(){
       window.scrollTo(-200, 0);
        this.$router.push( {name: "Home"} );
    },
    perfil(){
      this.$router.push( {name: "Profile"} );
    }
  }
  
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/layout/_TopBar.scss';
</style>

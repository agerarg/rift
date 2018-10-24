<template>
    <div class="myComment">
            <div class="comments-img">
                <img src="@/assets/images/pic01.jpg" width="35" height="35" />
            </div>
            <div class="form-comment">
                <textarea 
                :ref="'comment_'+postId"
                :id="'comment_'+postId"
                v-model="commentText" 
                :rows="rowLines" 
                cols="46" 
                placeholder="write an answer..."
                @keyup.enter.prevent="submitComment"
                >
                </textarea>
            </div>
            <div class="options-comment">
                <a href="#" class="smile-button"><span class="far fa-smile"></span></a>

               <a href="#" class="smile-button"><span class="fas fa-camera"></span></a>
            </div>
        </div>
</template>
<script>
export default {
    props: ['postId'],
    data(){
        return{
            commentText:"",
            rowLines:1
        }
    },
    watch:{
        commentText(){
                var element = document.getElementById('textSizeFix');
                element.innerHTML = this.commentText;
                let w = element.offsetWidth;
                if(this.rowLines==1)
                    this.rowLines = parseInt(w/340)+1;
                else
                    this.rowLines = parseInt(w/340)+2;
                
                if(w<1)
                this.rowLines=1;
                
             return false;

        }
    },
    methods:{
        submitComment(){
            this.$emit("Answer",this.commentText);
            this.commentText="";
            return false;
        }
    }
}
</script>

<style lang="scss" scoped>
.myComment{
       padding-bottom: 10px;
       position: relative;
       .options-comment{
              width: 80px;
              position: absolute;
              bottom: 23px;
              right: 0px;
             
              .smile-button{
                color: black;
                opacity: 0.5;
                cursor: pointer;
                padding-left: 5px;
                &:hover{
                    opacity: 1;
                }
              }
          }
       .form-comment{
          padding-top: 10px;
          textarea {
              font:inherit;
              resize: none;
              background-color: #F2F3F5;
              border: 1px solid #CCD0D5;
              border-radius: 25px;
              outline: none;
              padding: 10px;
              overflow: hidden;
            
            &::placeholder {
                   color: #999DA4;
            }
           &:focus::-webkit-input-placeholder{
                    opacity: 0.5; 
            } 
          }

       }
        .comments-img{
			width: 50px;
            padding-left: 10px;
            margin-top: 7px;
             float: left;
			img{
			 border-radius: 50%;
			}
    }
}
</style>

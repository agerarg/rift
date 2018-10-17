<template>
    <div class="chats-row" :style="{right: chatPosition+'px'}">
		<div>Name: {{ chatData.speakTo }}</div>
        <div>Text: {{ chatData.chatText }}</div>
	</div> 
</template>
<script>
export default {
    props: ['chatData'],
    computed:{
        chatPosition(){
            switch(this.chatData.order)
            {
            case 1:
               return 0;
           break;
           case 2:
                return 300;
            break;
           default:
                return (300*(this.chatData.order-1));
            break;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.chats-row{
    position: fixed;
    background-color: lightslategrey;
    z-index: 9999;
    width: 280px;
    height: 340px;
    bottom: 0;

}

</style>

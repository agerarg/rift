<template>
    <div>
        <appMainChats v-for="chat in chats" :chatData="chat" :key="chat.order" />
        
    </div>
</template>
<script>
import appMainChats from './Chats.vue';
export default {
    components:{
        appMainChats
    },
    data(){
        return {
            chats: []
        }
    },
    mounted(){
        for(let i=1;i<5;i++)
        {
            this.chats.push({
                order: i,
                speakTo: 'juancito',
                chatText: 'blah blah'
            });
        }
    }
}
</script>

<template>
    
    <div class="email-page">
        
            <button>Profile</button>
            <button>Help</button>
        
    </div>
    <div>
        <button @click="newSMS">NEW SMS</button>
    </div>

    <SendSMS  @closeForm="newSMS" v-if="show"/>
</template>

<script>

import SendSMS from './sendSMS.vue';

export default{
    data() {
        return {
            show: false,
        }
    },
    components: { SendSMS },
    methods:{
        newSMS(){
            if(this.show)
            {
                this.show=false
            }else{
                this.show=true
            }
            
        }
    }
}

</script>

<style>

.email-page{
        width: auto;
		box-shadow: 0 0 3px rgba(0,0,0,0.3);
        background-color: #2f855a;

        
}


</style>
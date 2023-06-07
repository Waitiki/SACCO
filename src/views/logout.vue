<template>
  <a v-on:click="logout" href="/#">Logout Now</a>
</template>

<script>
        export default{
    methods:{
        logout(){
            localStorage.clear();
            this.$router.push({ name:'Email' })
        }
    }
}
        
</script>
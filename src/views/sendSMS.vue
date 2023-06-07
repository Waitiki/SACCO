<template>
    <div class="pageWrapper">
        <div class="smsFORM">
      
           
      <div class="cancel">
            <span class="top" @click="$emit('closeForm')">
                 <i class="fa-solid fa-xmark" />
            </span>
    </div>
      <h3 class="formTitle">SEND BULKY  SMS</h3>
  <div class="userInput">
        <select class="x" name="" id="">
            <option>Select Option</option>
            <option>All Members</option>
            <option>Active Members</option>
            <option>Members with active loans</option>
        </select>
        
        <textarea class="x" placeholder="Write here: " name="" id="" cols="20" rows="1" />
</div>
  <button type="submit">SEND</button>
  
  
</div>



    </div>
  
</template>

<script>
export default{

    
    methods:{
      
    }
}
</script>

<style scoped>
*
{
    padding: 0;
    margin: 0;
    box-sizing: border-box;

}
.pageWrapper
{
    width: 100vw;
    height: 100vh;
}
.x{
    width: 60%;
    margin-bottom: 8px;
    padding: 8px;
    border: none;
    border: 1px solid #808080;
    border-radius: 5px;
    background: #f9edf3;
    color: #000;
}
.top{
    right: 0;

}

.smsFORM{
    
    background-color: #2f855a;
    position: fixed;
    z-index: 1;
    border-radius: 5px;
    padding: 20px !important;
    min-height: 20rem;
    margin:auto;
    left: 0;
    right: 0;
    width:30rem;

}
.formTitle{
    padding: 10px;
    text-align: center;
}
.userInput
{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: .5rem;
}
.userInput textarea ,.userInput select
{
    width: 90% !important;
    padding: 10px;
}
.cancel
{
    display: flex;
    flex-direction: row-reverse;
}




</style>
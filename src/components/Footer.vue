<template>
<footer>
    <p>{{ footerWords }}</p>
</footer>
    
</template>

<script>
export default {
    data (){
        return{
            footerWords: '© 2022 Chrisaner Matthys 🐞'
        }
    }
  }
</script>

<style scoped>
#foot{
    background-color: black;
    color: white;
    padding:10px;
}

</style>
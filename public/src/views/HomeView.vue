<template>
  <div class=" container">
  <img src="../assets/landing.jpg.jpg" id="land"/> 
<div class="text-block">
  <h2>Hi, I'm Chrisaner Matthys</h2>
  <h4>Here's but a snippet of my life, enjoy!</h4>

</div>
</div>
</template>

<script>
export default {};
</script>

<style scoped>
.container{
  position:relative;
}
img {
  width: 100%;
  margin-bottom: 0px;
}

#landing{
  background-color: grey;
  color: black;
  font-family:Georgia, 'Times New Roman', Times, serif;
  font-size:22px;
  font-weight: 50;
  font-style: italic;
  width: 50%;
  margin-left: 150px;
  margin-top:-50px;
}

#land{
 max-height: 650px;
  
}

.text-block{
  position:absolute;
  width: 550px;
  bottom: 380px;
  left: 30px;
  padding: 5px; 
  color: black;
  font-family:Georgia, 'Times New Roman', Times, serif;
  font-style:italic;
  font-size: 25px;
} 

h4{
  font-size: 18px;
  text-align: center;
}
</style>

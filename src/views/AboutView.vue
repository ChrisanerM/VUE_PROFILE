<template>
  <div class="about" id="ab">
    <img src="../assets/IMG-20210925-WA0022.jpg">
    <h1>About Me</h1>
    <p>
      My present career aim is to work within an organization where I'm able to
      contribute to improving systems. The opportunity to learn new skills and
      engage with individuals where I may broaden my skillset appeals to me.

      I perform my duties diligently and consistently and I'm capable to relate
      and adapt to a wide range of people and situations. I believe there's
      always room for improvement both personally and professionally.
      In my leisure time I enjoy spending time with my siblings,listening to
      music and reading non-fiction books.
    </p>
  </div>
</template>

<Script>
   export default {
     
   }
 </Script>

<style scoped>
img{
  height: 340px;
  width:280px;
  margin-left: 300px;
  border-radius: 50%;
  margin-top:20px;
}
.about {
  display: grid;
  margin-top: 100px;
  margin-left: 390px;
  margin-right: 390px;
  padding: 1px;
}
#ab {
  background-color: rgb(103, 83, 57);
  border-radius: 20px;
  width:60%;
  margin-left: 280px;
}
h1 {
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-style: italic;
  font-size: 36px;
  text-align: center;
  padding: 10px;
  color: white;
  text-decoration: underline;
}

p {
  color: lightgray;
  font-style: oblique;
  font-size: 17px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 40px;
  text-align: center;
}
</style>

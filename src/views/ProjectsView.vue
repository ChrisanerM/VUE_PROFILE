<template>
  <h2>Projects</h2>
<dim v class="container" id="netlify" style="display:inline-block;">
<div class="row justify-content-center cols-3">
 <div class="flip-card" style="background-color: tan;border:solid 4px;border-radius:12px; border-color:brown;" v-for="item in testimonials">
    <div class="flip-card-inner">
     <div class="flip-card-front">
        <img
         :src="item.img"
          alt="Avatar"
          style="width: 100%; height: 100%;"/>
          <a :href="item.netlify">Netlify</a>
          <a :href="item.github">Github</a>
      </div>
      <div class="flip-card-back">
        <h1>{{item.description}}</h1>
        <p>{{item.netlify}}</p>
       </div>
    </div>
  </div>
</div>
</dim>
</template>
<script>
export default {
testimonials: "netlify-cards",
data(){
    return{
        testimonials:[
            {description:'HTML and CSS practise',
            img:'https://i.postimg.cc/3rp3xyst/htmlandcssprac.jpg',
            netlify:'https://htmlcssprac.netlify.app/',
            github: '',
            },
            {description:'Bootstrap EOMP',
            img:'https://i.postimg.cc/tgggsSXy/EOMP1.png',
            netlify: "https://chrisaner-portfolio.netlify.app/",
            github: '',
          },
            {description:'E-Commerce',
            img:'https://i.postimg.cc/8P4Q7Ltm/E-commerce.jpg',
            netlify:'',
            github: '',
          },
            {description:'Calculator JS',
            img:'https://i.postimg.cc/nLZD3bvJ/cal-js.jpg',
            netlify:'https://chrisanermatthys-calculator.netlify.app/',
            github: '',
          },
            {description:'JS_EOMP',
            img:'https://i.postimg.cc/ry7gg3bn/JS-EOMP.png',
            netlify:' https://finaljs-cleanexpress.netlify.app/',
            github: '',
          },
            {description:'My First Vue App',
            img:'https://i.postimg.cc/W3kq4Wnz/First-Vue-App.png',
            netlify:'',
            github: '',  
          }
        ]
    }
}
}
</script>
<style scoped>
.flip-card {
background-color: transparent;
width: 300px;
height: 300px;
perspective: 1000px;
margin: 40px;
}
/* This container is needed to position the front and back side */
.flip-card-inner {
position: relative;
width: 100%;
height: 100%;
text-align: center;
transition: transform 0.8s;
transform-style: preserve-3d;
}
/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
transform: rotateY(180deg);
}
/* Position the front and back side */
.flip-card-front, .flip-card-back {
position: absolute;
width: 100%;
height: 100%;
-webkit-backface-visibility: hidden; /* Safari */
backface-visibility: hidden;
border: 1cm;
border-color: solid black;
}
/* Style the back side */
.flip-card-back {
background-color: burlywood;
color: black;
transform: rotateY(180deg);
font-size: 15px;
}

h2{
  text-align: center;
}
</style>
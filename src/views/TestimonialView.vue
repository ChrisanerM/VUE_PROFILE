<template>
  <h2>Testimonials</h2>
<dim v class="container" style="display:inline-block;">
<div class="row justify-content-center cols-3">
 <div class="flip-card" style="background-color: violet;border:solid; border-color:black;" v-for="item in testimonials">
    <div class="flip-card-inner">
     <div class="flip-card-front">
        <img
         :src="item.img"
          alt="Avatar"
          style="width: 100%; height: 100%;"/>
      </div>
      <div class="flip-card-back">
        <h1>{{item.name}}</h1>
        <h4>{{item.title}}</h4>
        <p>{{item.test}}</p>
       </div>
    </div>
  </div>
</div>
</dim>
</template>
<script>
export default {
testimonials: "test-cards",
data(){
    return{
        testimonials:[
            {name:'Megan Alexander',
            title:'Ex-colleague',
            img:'https://i.postimg.cc/bvh6D3hM/alexander-jpg.jpg',
            test:'Chrisaner is a very quiet person but very friendly, dedicated and hard worker. '
            },
            {name:'Kauthar Dreyer',
            title:'Ex-colleague',
            img:'https://i.postimg.cc/3RbCBZs3/dreyer.jpg',
            test: "She's a kind, loving and friendly individual whom you may always ask help for."
            },
            {name:'Mellisa Mulllins',
            title:'Ex-colleague',
            img:'https://i.postimg.cc/wj0VMHwt/mullins-jpg.jpg',
            test:' A well mannered individual, always up for new challenges. She sets out goals & works hard to achieve them.'
            },
            {name:'Chipo Saidi',
            title:'Ex-colleague',
            img:'https://i.postimg.cc/kGm8whj3/Saidi-jpg.jpg',
            test:'Has the intelligence & work ethic to add value wherever she is.'
            },
            {name:'Abigail Temm',
            title:'Ex-colleague',
            img:'https://i.postimg.cc/T10y02Lg/temm-jpg.jpg',
            test:'Always prepared for the day and ensures all tasks are completed to the best of her abiliy.'
            },
            {name:'Xolelwa Manqina',
            title:'Colleague',
            img:'https://i.postimg.cc/GhF4d9RG/Xolelwa-Manqina.jpg',
            test:'Chrisaner is a hard-working and strong individual that ensures that she understands something completely before implementing it. She has a great personality. Her ability to assess an issue and solve it, is really good and she strives to reach perfection in her work.',
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
margin: 20px;
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
/* Style the front side (fallback if image is missing) */
.flip-card-front {
background-color:violet;
color: black;
}
/* Style the back side */
.flip-card-back {
background-color: violet;
color: black;
transform: rotateY(180deg);
}
</style>
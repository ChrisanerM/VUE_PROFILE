<template>
  <h2>Resume</h2>
<dim v class="container" id="info" style="display:inline-block;">
<div class="row justify-content-center cols-3">
 <div class="flip-card" style="background-color: tan;border:solid 4px;border-radius:12px; border-color:brown;" v-for="item in resumes">
    <div class="flip-card-inner">
     <div class="flip-card-front">
       
      </div>
      <div class="flip-card-back">
        <h1>{{item.def}}</h1>
        <h4>{{item.year}}</h4>
        <p>{{item.info}}</p>
       </div>
    </div>
  </div>
</div>
</dim>
</template>
<script>
export default {
resumes: "info-cards",
data(){
    return{
        resumes:[
            {def:'Skills',
            year:'Present: Life Choices Academy',
            info:'HTML, CSS, Bootstrap, Javascript, Vue, js'
            },
            {def:'Work',
            year:'August 2022: Education Assistant',
            info: "Supervising group activities, carrying out administrative duties such as preparing classroom resources. Providing extra support to learners to complete tasks at hand."
            },
            {def:'Education: Wynberg Senior Secondary',
            year:'2018',
            info:'Subjects: English, Afrikaans, Life Orientation, Mathematical Literacy, Life Sciences, History, Music.'
            },
        ]
    }
}
}
</script>
<style scoped>
h2{
  text-align: center;
}
#info{
  margin-top: 50px;
  width: 60%;
  margin-right:270px;
}

h1{
  font-size: 28px;
  text-align:center;
  
}
h4{
  font-size: 28px;
  text-align:center;
}

p{
  
  text-align:center;
}
</style>
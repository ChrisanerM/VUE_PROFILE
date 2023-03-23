<template>
  <form action="https://formspree.io/f/xqkokror" method="post">
<div class="container">   
    <div class="contact">
      <h5>I'D LOVE YOU KEEP IN TOUCH!</h5>
      <label for="name">Name</label>
      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        id="name"
        required
      />
      <label for="Surname">Surname</label>
      <input
        type="text"
        name="surname"
        placeholder="Enter your surname"
        id="sur"
        required
      />
      <label for="email">Email</label>
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        id="email"
        required
      />
      <label for="Message">Message</label>
      <textarea
        id="bio"
        name="bio"
        placeholder="Type your message here"
      ></textarea>
      <button>Submit</button>
    </div>
    </div>
  </form>
</template>

<script>
export default {};
</script>

<style scoped>
.contact {
  display: grid;
  background-color: #f7f2cd;
  font-weight:100;
  font-size: 20px;
  padding: 25px;
  height: 80vh;
  margin-left:250px;
  margin-top: 50px;
  text-align: center;
  border-radius: 15px;
  width:70%;
}

button {
  background-color: tan;
  border-radius: 5px;
  border-color: tan;
  padding: 1px;
  margin-left: 200px;
  margin-right: 200px;
}

h5{
  font-size:25px;
  text-align:center;
  font-family: Helvetica, Arial, sans-serif;

}
</style>

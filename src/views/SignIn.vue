<template>


  <div>






    <div class="w-50  rounded p-3 mx-auto " style="margin-top: 100px;">
     <h3 style="color: #ffffff;">Войти</h3> 
     <p v-if="incorrectAuth">Incorrect username or password entered - please try again</p>
     <form  @submit.prevent="login()" >
       <div class="form-group">
         <label for="username" style="color: #ffffff;">Логин:</label>
         <input v-model="username" required type="text" id="username" class="inborder"  placeholder="Логин...">

       </div>
       <div class="form-group">
         <label for="password" style="color: #ffffff;">Пароль:</label>
         <input v-model="password" type="password" id="password" class="inborder" required  placeholder="Пароль...">
       </div>
       
       <button variant="primary" :href="url" type="submit" class="regbut" style="padding: 5px 15px 8px 15px;">Войти</button>
       <p class="mt-3" style="color: #ffffff;">Ещё не зарегистрированы? <router-link to="/auth/register/">Регистрация</router-link>
       </p>
   
     </form>
   
   </div>


   
    





  </div>
 

</template>
<script>
export default {
 name: "SignIn",
 data() {
   return {
     username: "",
     password: "",
     url:""

   };
 },
  methods: {

    login () { 
      this.$store.dispatch('userLogin', {
        username: this.username,
        password: this.password
      })
      .then(() => {
        location.href='/';
      })
      .catch(err => {
        console.log(err)
        this.incorrectAuth = true
      })
      }
    




  }
};

</script>
<style scoped>
.inborder{
  border-radius: 3px;
  border: 1px solid green;
}
.regbut{
  border-radius: 6px;


  margin: 0 auto;
  text-align: center;
  display: -webkit-box;

  color: white;
  background-color: rgb(2, 143, 104);
  border: black 1px solid;
}
.regbut:hover{
  background-color: #f4f4f4;
  color: black; 
}
</style>
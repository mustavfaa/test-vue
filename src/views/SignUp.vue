<template>
  <div>


     <div class="container" style="margin-top: 100px;">
        <h3 style="color: #ffffff;">Регистрация</h3> 
        <form @submit="register">
          <div >


            <div class="form-group">
               <label for="username" style="color: #ffffff;"><span class="text-danger">*</span>Логин:</label>
               <input v-model="username" type="text" id="username" class="inborder"  required>
             </div>
             
             
             


             <div class="form-group required">
                <label style="color: #ffffff;" class="control-label" for="password"><span class="text-danger">*</span>Пароль:</label>
                <input v-model="password" type="password" id="password" class="inborder" required>
              </div>

              

          
            




          </div>
         

          <button variant="primary" class="regbut" type="submit" :disabled="formValid">Регистрация</button>
          
          <p class="mt-3" style="color: #ffffff;">Уже есть аккаунт? <router-link to="/">Войти</router-link>
          </p>

       </form>
    

    </div>



        







  </div>

</template>
<script>
import { required, minLength, sameAs } from 'vuelidate/lib/validators'
import { IMaskDirective } from 'vue-imask'
export default {
 name: "SignUp",
 data() {
   return {
     username: "",
     password: "",
     repeatPassword: "",
     phone: "",
     email:"",
     errorLogin:"",
     Login:"Такой логин занять"


     
   };
 },
 computed: {
  
   
  },
 validations: {
    username: {
      required,
      minLength: minLength(5)
    },
    password: {
      required,
      minLength: minLength(8)
    },
    repeatPassword: {
      required,
      sameAs: sameAs('password')
    },
    phone: {
      required
    },
    customerOrExecutor: {
      required
    }
  },
 methods: {
  
   register(event) {
     event.preventDefault();

     this.axios
    .post(`http://localhost:8000/api/v1/auth/users/`, {'username': this.username, 'password': this.password,'email':this.email })
    .then(response => {console.log(response) ;this.$router.push('/') })
    .catch(function(error) {
    if (error.response && error.response.status === 400) {
      this.errorLogin=this.Login
    } else {
      // 
    }
  });

   }
 },

 directives: {
    imask: IMaskDirective
  }
};

</script>
<style scoped>
.inborder{
  border-radius: 3px;
  border: 1px solid green;
}


.mt-3{

}
.regbut{
  color: white;background-color: rgb(2, 143, 104);border: black 1px solid;border-radius: 6px;padding: 5px 15px 8px 15px;margin: 0 auto;text-align: center;  display: -webkit-box;

}
</style>
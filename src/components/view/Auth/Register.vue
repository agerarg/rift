<template>
    <div>
            <section>
                <header class="main">
                    <h1>Registro:</h1>
                </header>
                <div class="box">
               <h2 id="content">Datos:</h2>
               <form>
                        <dl>
                            <div :class="{'invalid':$v.name.$error}">
                            <dt>Nombre de cuenta:</dt>
                            <dd >
                                <input 
                                type="text" 
                                @blur="$v.name.$touch()" 
                                name="name" 
                                v-model="name"  
                                value="" 
                                placeholder="Nombre"
                                autocomplete="username" />
                                 <div v-if="$v.name.$error"> 
                                 <p v-if="!$v.name.required"> Ingrese un nombre! </p> 
                                 </div>
                            </dd>
                           
                         </div>   
                         <div :class="{'invalid':$v.email.$error}">
                         <dt>Email:</dt>
                            <dd >
                            <input type="text"  autocomplete="usermail" @blur="$v.email.$touch()" v-model="email" name="email"  value="" placeholder="Email@email.com" />
                             <div v-if="$v.email.$error"> 
                                <p v-if="!$v.email.email"> Ingrese un Email valido! </p> 
                                <p v-if="!$v.email.required"> Ingrese un Email! </p> 
                            </div>
                            </dd>
                         </div>
                          <div :class="{'invalid':$v.password.$error}">
                        <dt>Clave:</dt>
                            <dd>
                                <input  autocomplete="new-password" type="password" @blur="$v.password.$touch()" v-model="password" name="password" value=""  />
                                <div v-if="$v.password.$error"> 
                                    <p v-if="!$v.password.required"> Ingrese una clave! </p> 
                                    <p v-if="!$v.password.minLen"> La clave es muy corta, debe tener almenos {{ $v.password.$params.minLen.min }} caracteres! </p> 
                                </div>
                            </dd>
                          </div> 
                           <div :class="{'invalid':$v.confirmPassword.$error}">
                       <dt>Clave de nuevo:</dt>
                            <dd>
                                <input  autocomplete="new-password" type="password"  @blur="$v.confirmPassword.$touch()" v-model="confirmPassword" name="password2" value=""  />
                                  <div v-if="$v.confirmPassword.$error"> 
                                    <p v-if="!$v.confirmPassword.same"> La clave tiene que ser la misma! </p> 
                                </div>
                            </dd>
                           </div>   
<hr>
                         <div :class="{'invalid':$v.age.$error}">
                            <dt>Edad:</dt>
                            <dd>
                                <div class="ageConteiner">
                                    <input @blur="$v.age.$touch()" type="text" v-model="age" name="age" value=""  />
                                </div>
                                 <div v-if="$v.age.$error"> 
                                <p v-if="!$v.age.required"> Ingrese la edad! </p> 
                                  <p v-if="!$v.age.numeric"> La edad tiene que ser un numero! </p> 
                                   <p v-if="!$v.age.minVal"> Tienes que ser mayor de {{ $v.age.$params.minVal.min }}!</p> 
                                     </div>
                              </dd>
                         </div>

                             <div :class="{'invalid':$v.terms.$error}">
                            <dt>Terminos de uso:</dt>
                            <dd>
                                <input type="checkbox" @blur="$v.terms.$touch()" v-model="terms" id="terms" name="tems">
								<label for="terms">he leído, entiendo y acepto las condiciones </label>
                               
                                 <div v-if="$v.terms.$error"> 
                                <p v-if="!$v.terms.required"> Tienes que leer y aceptar los terminos de uso! </p> 
                                 
                                     </div>
                              </dd>
                         </div>
                       

         <hr>         
            
                        <dt></dt>
                            <dd>
                                <button @click.prevent="submit" type="submit" :disabled="!$v.$invalid" >Crear Cuenta</button>  
                            </dd>
                        </dl>
                        </form>
                </div>
	


            </section>

    </div>
</template>
<script>
import {required, email, numeric, minValue, minLength, sameAs} from 'vuelidate/lib/validators';
export default {
    data(){
        return {
            name:"",
            email: "",
            password: "",
            confirmPassword:"",
            age: 0,
            terms: false
        }
    },
    validations:{
        email:{
            required, 
            email
        },
        name: {
            required
        },
        password:{
             required,
             minLen: minLength(3)
        },
        confirmPassword:{
             same: sameAs('password')
        },
        age: {
            required,
            numeric,
            minVal: minValue(18)
        },
        terms:{
            acepted(v){
                return v;
            }
        }
    },
    methods:{
        submit(){
            this.$http.get("?hello=moto").then(responce=>{
                console.log("todo bien:");
                console.log(responce.data['ok']);
            }
            , responce => {
                console.log("error:");
                    console.log(responce);
             });
        }
    }

 }
    
</script>

<style lang="scss" scoped>
   .invalid {
   color: red;
    input{ 
            //background-color: red;
            border: 1px solid red;
        }
   }
   .ageConteiner{
       width: 20%;
   }
</style>


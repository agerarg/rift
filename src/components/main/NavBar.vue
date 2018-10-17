<template>
   <div class="topnav" >
     <div>
             <div class="toggleButton" @click="openSideBar">&#9776;</div>
     </div>
    <div>
        <div id="mainBuscador" >
            <input type="text" name="demo-name" id="demo-name" value="" placeholder="Buscar" />
        </div>
    </div>
    <div>
        <div>
            <div class="mainBtns">
             <router-link :to="{name:'Register'}" >Registrar</router-link>
            </div>
             <div class="mainBtns">
             <router-link :to="{name:'Login'}" >Ingresar</router-link>
            </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
    methods:{
        openSideBar(){
            this.$emit("toggleSideBar");
        }
    }
}
</script>

<style lang="scss" scoped>
.mainBtns{
    float:right;
}
#mainBuscador{
    padding-top: 5px;
    width: 50%;
    margin: auto;
}
@media only screen and (max-width: 600px) {
              #mainBuscador{
                    width: 100%;
              }
              #mainBuscador{
                    padding-top: 10px;
              }
               .mainBtns{
                     display: none;
              }
        }      
.topnav {
    background-color: #232323;
    overflow: hidden;
    position: fixed;
    width: 100%;
    height: 50px;
    z-index: 999;
    transition: all 0.2s;
     display: grid;
     grid-template-columns: 1fr 5fr 2fr;
}

.topnav a {
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    border-right: 1px solid black;
     display: block;
   
}
.toggleButton{
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
}
.toggleButton:hover {
    color: brown;
}
.topnav a:hover {
    background-color: #ddd;
    color: black;
}

.topnav a.active {
    background-color: #4CAF50;
    color: white;
}


li a:hover {
    background-color: #111;
}
li {
    border-right: 1px solid black;
}

li:first-child {
    border-right: none;
}

		
</style>

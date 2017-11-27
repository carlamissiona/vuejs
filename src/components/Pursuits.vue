<template>
  <div style="padding:0;">
  <br/><br/><br/><br/>
    <!-- Wrapper -->
    <!---- Contents of Side Component ----->
    <left-side :menu="sidelinks"></left-side> 
    <!---- Contents of Side Component ----->
        
            <div class="col-md-10 col-md-offset-1">
               <div id="main">
                   <div class="row">
                     <div class="col-md-12 col-md-offset-">
                        <article class="post">
                           <header>
                              <div class="title" style="padding-left:75px;">
                                 <h2><a href="profile.html">Hanns Gover</a></h2>
                                 <p>This is my daily grind, I work and work for my 
                                    living for family. <br>
                                 </p>
                              </div>
                              <div class="meta">
                                 <span class="fh5co-icon"><i class="icon-trophy"></i>443</span>
                                 <strong class="fh5co-uppercase-sm">Guild Rank</strong>
                                 <br>
                                 <span class="fh5co-icon"><i class="icon-rocket"></i>80%</span>
                                 <strong class="fh5co-uppercase-sm">Hireability<br>Score </strong>
                                 <br>
                                 <strong><a href="#notifs">See Notifications</a></strong>
                              </div>
                           </header>
                           <footer>
                              <ul class="actions">
                                 <li><a href="#" class="button small">Manage Pursuits</a></li>
                                 <li><a href="#" class="button small">Build More Pursuits</a></li>
                              </ul>
                              <h3>You have 2 Active Pursuits</h3>
                           </footer>
                        </article>
                     </div>
                  
                        <!---------- Notifications -------->
                        <!---------- Notifications -------->
                        <article class="post" id="notifs">
                           <header>
                              <div class="title">
                                 <h3>Pursuits</h3>
                              </div>
                              <div class="meta">
                                 <a href="#" class="author text-center">
                                 <span class="text-right">You have 4<br>Orders @Store</span>&nbsp;&nbsp;
                                 <img src="images/avatar.jpg" alt="">
                                 </a>
                              </div>
                              <div class="meta">
                                 <a href="#" class="author text-center">
                                 <span class="text-right">You have 4<br>interviews</span>&nbsp;&nbsp;
                                 <img src="images/avatar.jpg" alt="">
                                 </a>
                              </div>
                           </header>
                           <!--------Pursuits ---------->
                           <footer>
                              <div style="display:block;height:contain; margin:30px 10px; padding:20px 0px; ">
                                 <div class="col-md-4 text-center">
                                    <a href="project-dashboard.html"><img src="http://lorempixel.com/130/130/abstract/1/" class="text-center img-circle"> </a><br><br>
                                    <h3><strong>Sleep Rythmn Mobile App</strong></h3>
                                    <p class="text-justify"> 
                                       Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat.  
                                    </p>
                                 </div>
                                 <div class="col-md-4 text-center">
                                    <a href="store-dashboard.html"><img src="http://lorempixel.com/130/130/abstract/1/" class="text-center img-circle"></a> <br><br>
                                    <h3><strong>Empanada Republic</strong></h3>
                                    <p class="text-justify"> 
                                       Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat.  
                                    </p>
                                 </div>
                                 <div class="col-md-4 text-center">
                                    <a href="jobs-applied.html"> <img src="http://lorempixel.com/130/130/abstract/1/" class=" text-center img-circle"> </a><br><br>
                                    <h3><strong>3 Job Applications</strong></h3>
                                    <p class="text-justify">
                                       Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat.    
                                    </p>
                                 </div>
                                 <hr>
                              </div>
                           </footer>
                           <footer>
                           </footer>
                        </article>
                        <!---------- Notifications -------->
                        <!---------- Notifications -------->
                        <!------------   Feeds ------------>
                        <!------------   Feeds ------------>
                        <article class="post">
                           <header>
                              <div class="meta">
                                 <h3>Store</h3>
                              </div>
                              <div class="meta">
                                 <h3>Service</h3>
                              </div>
                              <div class="meta">
                                 <h3>Projects</h3>
                              </div>
                           </header>
                           <h3 class="text-center">Build Your Pursuits</h3>
                           <br>
                           <footer>
                              <div style="display:block;height:contain; margin:30px 10px; padding:20px 0px; ">
                                 <div class="col-md-4 text-center">
                                    <img src="http://lorempixel.com/130/130/abstract/1/" class="text-center img-circle"> <br><br>
                                    <h3><a href="open-store.html" class="button big fit">OPEN STORE</a></h3>
                                    <p class="text-justify"> 
                                       Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat.  
                                    </p>
                                 </div>
                                 <div class="col-md-4 text-center">
                                    <img src="http://lorempixel.com/130/130/abstract/1/" class="text-center img-circle"> <br><br>
                                    <h3><a href="open-project.html" class="button big fit">Build Project</a></h3>
                                    <p class="text-justify"> 
                                       Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat.  
                                    </p>
                                 </div>
                                 <div class="col-md-4 text-center">
                                    <img src="http://lorempixel.com/130/130/abstract/1/" class=" text-center img-circle"> <br><br>
                                    <h3><a href="open-service.html" class="button big fit">Create Service</a></h3>
                                    <p class="text-justify">
                                       Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat.    
                                    </p>
                                 </div>
                                 <hr>
                              </div>
                           </footer>
                           <br>
                        </article>
                   </div>
                      
               </div>
           </div>


    <!-- End Wrapper Below-->
    </div>

</template>

<script>
 import LeftSide from './LeftSideMenu.vue';
 import axios from 'axios';

export default {
  name: 'Pursuits',
  data  () {
     return {
     }
        
    }
  ,
  components : { LeftSide },
  created() {
   
  },


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

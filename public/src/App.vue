<template>
  
    <!---  we put our web design here ---->

     <div id="wrapper">
             
            <header id="header">
               <h1><a href="#">PURSUITS</a></h1>
               <nav class="links">
                  <ul>
                     <li>find a living</li>
                     <li><a href="#"></a></li>
                     <li><a href="#"></a></li>
                     <li> <router-link :to="{ path: '/'}">Home</router-link></li>
                     <li> <router-link :to="{ path: 'careers'}">Careers</router-link></li>
                     <li> <router-link :to="{ path: 'pursuits'}">Pursuits</router-link></li>
                     <li> <router-link :to="{ path: 'crowd'}">Crowd</router-link></li>
                     
                     <li style="margin-left:33%;"><a href="store.html">Exchange</a></li>
                  </ul>
               </nav>
               <nav class="main">
                  <ul>
                     <li class="search">
                        <a class="fa-search" href="#search">Search</a>
                        <form id="search" method="get" action="#">
                           <input type="text" name="query" placeholder="Search" />
                        </form>
                     </li>
                     <li class="menu">
                        <a class="fa-bars" href="#menu">Menu</a>
                     </li>
                  </ul>
               </nav>
            </header>
            
            <section id="menu">
               <!-- Search -->
               <section>
                  <form class="search" method="get" action="#">
                     <input type="text" name="query" placeholder="Search" />
                  </form>
               </section>
               <!-- Links -->
               <section>
                  <ul class="links">
                     <li>
                        <a href="#">
                           <h3>Lorem ipsum</h3>
                           <p>Feugiat tempus veroeros dolor</p>
                        </a>
                     </li>
                     <li>
                        <a href="#">
                           <h3>Dolor sit amet</h3>
                           <p>Sed vitae justo condimentum</p>
                        </a>
                     </li>
                     <li>
                        <a href="#">
                           <h3>Feugiat veroeros</h3>
                           <p>Phasellus sed ultricies mi congue</p>
                        </a>
                     </li>
                     <li>
                        <a href="#">
                           <h3>Etiam sed consequat</h3>
                           <p>Porta lectus amet ultricies</p>
                        </a>
                     </li>
                  </ul>
               </section>
               <!-- Actions -->
               <section>
                  <ul class="actions vertical">
                     <li><a href="#" class="button small fit">Log In</a></li>
                  </ul>
               </section>
            </section>
           
            <div class="container">
               <div class="row">
                 <!--Router View-->
                 <router-view/>
                 <!--End Router View-->
               </div>
            </div>
            
   
           


      </div>  

  
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
 
</style>

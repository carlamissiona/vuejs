<template>
  <div style="padding:0;">
  <br/><br/><br/><br/>
    <!-- Wrapper -->
    <!---- Contents of Side Menu Component ----->
    <!-- We want to put this in another component other than Home.vue-->
        
    <!---- Contents of Side Menu Component ----->
         <left-side-menu :menu="sidelinks"></left-side-menu> 

            <div class="col-md-10 col-md-offset-1">
               <div id="main">
                  <!-- Post -->
           
                        <article class="post">
                           <header>
                              <div class="title" style="padding-left:75px;">
                                 <h2><a href="profile.html">Hanns Gover</a></h2>
                                 <p>This is my daily grind, I work and work for my 
                                    living for family. <br/>
                                 </p>
                              </div>
                              <div class="meta">
                                 <span class="fh5co-icon"><i class="icon-trophy"></i>443</span>
                                 <strong class="fh5co-uppercase-sm">Guild Rank</strong>
                                 <br/>
                                 <span class="fh5co-icon"><i class="icon-rocket"></i>80%</span>
                                 <strong class="fh5co-uppercase-sm">Hireability<br>Score </strong>
                                 <br/>
                                 <strong><a href="#notifs">See Notifications</a></strong>
                              </div>
                           </header>
                           <footer>
                              <ul class="actions">
                                 <li><a href="profile.html" class="button small">View Profile</a></li>
                              </ul>
                           </footer>
                        </article>
                  
                  <!---------- Notifications -------->
                  <!---------- Notifications -------->
                  <article class="post" id="notifs">
                     <header>
                        <div class="title">
                           <h3>Notifications</h3>
                        </div>
                        <div class="meta">
                           <a href="#" class="author text-center">
                           <span class="text-right">You have 4<br/>interviews</span>&nbsp;&nbsp;
                           <img src="src/assets/images/avatar.jpg" alt="" />
                           </a>
                        </div>
                        <div class="meta">
                           <a href="#" class="author text-center">
                           <span class="text-right">You have 4<br/>assessment<br/>requests</span>&nbsp;&nbsp;
                           <img src="images/avatar.jpg" alt="" />
                           </a>
                        </div>
                     </header>
                     <header>
                        <div class="title">
                           <h3>Reminders</h3>
                           <span class="col-md-4"><h3><i class="fa fa-shopping-bag fa-lg" aria-hidden="true"></i></h3></span>
                           <span class="col-md-4"> <h3><i class="fa fa-shopping-bag fa-lg" aria-hidden="true"></i></h3></span>
                        </div>
                        <div class="meta">
                           <h3>Advertisements</h3>
                        </div>
                     </header>
                     <footer>
                        <ul class="actions">
                           <li><a href="#" class="button small">View all notifications</a></li>
                        </ul>
                        <ul class="stats">
                           <li><a href="#">General</a></li>
                           <li><a href="#" class="icon fa-heart">28</a></li>
                           <li><a href="#" class="icon fa-comment">128</a></li>
                        </ul>
                     </footer>
                  </article>
                  <!---------- Notifications -------->
                  <!---------- Notifications -------->
                  <!------------   Feeds ------------>
                  <!------------   Feeds ------------>
                  <article class="post">
                     <header>
                        <div class="title">
                           <h3><a href="#">Feeds</a></h3>
                           <p><small>Here listed your Crowd, peers, guilds Crowds and offers and services request offered to you.</small></p>
                        </div>
                        <div class="meta">
                           <h3>A New Service Was Created Near You {{ feedslist.length }} </h3>
                        </div>
                     </header>
                     <span v-for="feed in feedslist">
                       <feed-boxes :feedsdetail="feed"> </feed-boxes>
                     </span>
                  </article>
               </div>
           </div>


    <!-- End Wrapper Below-->
    </div>

</template>

<script>
 import LeftSideMenu from './LeftSideMenu.vue';
 import FeedBoxes from './HomeFeeds.vue';
 import feeds from '../assets/objects/feeds.json';
 import axios from 'axios';

export default {
  name: 'Home',
  data  () {
     return {
      
         feedslist:  feeds,
         sidelinks: [
          {
            href: 'about.html',
            icon: 'fa fa-search'
          }
            ,
          {
            href: 'home.html',
            icon: 'fa fa-search'
           },
             {
            href: 'logout.html',
            icon: 'fa fa-search'
           }
         ]
     }
        
    }

  ,
  components : { LeftSideMenu, FeedBoxes  },
  created() {
    axios.get(`http://jsonplaceholder.typicode.com/posts`)
    .then(response => {
      // JSON responses are automatically parsed.
      console.log("from axios post");
      console.log(response.data);
      console.log("--------------from axios post--------------------");
    })
    .catch(e => {
      this.errors.push(e);
    })
    
  },


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

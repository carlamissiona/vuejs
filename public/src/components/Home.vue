<template>
  <div class="container">
              
              <div class="container">
                 <div class="row">
                    <div class="col-md-1">
                        <section id="intro" style="position:relative;z-index:200;margin:0 15px;">
                           <img src="http://lorempixel.com/180/190/transport/avatar" class="img-circles"> 
                           <div class="col-md-1 col-md-offset-1">
                               <left-side-menu :menu="sidelinks"></left-side-menu> 
                           </div>
                        </section>
                      </div>
                    <div class="col-md-10 col-md-offset-1">
                       <div id="main"> 
                          <!-- Post -->
                          <div class="row">
                             <div class="col-md-12">
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
                                         <strong class="fh5co-uppercase-sm"> <a href="guild-home.html">Guild Rank</a> </strong>
                                         <br>
                                         <span class="fh5co-icon"><i class="icon-rocket"></i>80%</span>
                                         <strong class="fh5co-uppercase-sm">Hireability<br>Score </strong>
                                         <br>
                                         <strong><a href="#notifs">See Notifications</a></strong>
                                      </div>
                                   </header>
                                   <footer>
                                      <ul class="actions">
                                         <li><a href="profile.html" class="button small">View Profile</a></li>  
                                         <li><a href="profile.html" class="button small">View All Notifications</a></li>
                                      </ul>
                                   </footer>
                                </article>
                          
                          <!---------- Notifications -------->
                          <!---------- Notifications -------->
                          <article class="post" id="notifs">
                             <header>
                                <div class="title">
                                   <h3>Feeds</h3>
                                </div>
                                
                                <div class="meta" style="border:0;">
                                     <span class="fa fa-heart" data-toggle="tooltip" title="Page Views"> 28</span> 
                                      <span class="fa fa-heart" data-toggle="tooltip" title="Page Views"> 20</span> 
                                </div>
                             </header>
                             <header>
                                <div class="title">
                                  <div class="row">
                                    <div class="col-md-2">
                                       <img src="http://via.placeholder.com/60x60" style="float:left;">
                                    </div>
                                    <div class="col-md-10">

                                     <p> <strong>Jill Gomez</strong> <span class="label label-danger">Peers</span> Mauris neque quam fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. </p> 
                                     <span class="text-left col-md-6" style="padding-left:0px;">
                                        <a href="#" class="button small">Comment</a>
                                    </span>
                                     <span class="text-right col-md-6"> 
                                        <a href="#" class="icon fa-heart">28</a>  &nbsp;&nbsp;&nbsp;&nbsp;
                                        <a href="#" class="icon fa-comment">128</a>
                                    </span>
                                         
                                    </div>                          
                                  </div> 
                                  <!--Post-->
                                  <br><br>
                                  <div class="row">
                                    <div class="col-md-2">
                                       <img src="http://via.placeholder.com/60x60" style="float:left;">
                                    </div>
                                    <div class="col-md-10">

                                     <p> <strong>Jill Gomez</strong> <span class="label label-danger">Client</span> Mauris neque quam fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. </p> 
                                     <span class="text-left col-md-6" style="padding-left:0px;">
                                        <a href="#" class="button small">Comment</a>
                                    </span>
                                     <span class="text-right col-md-6"> 
                                        <a href="#" class="icon fa-heart">28</a>  &nbsp;&nbsp;&nbsp;&nbsp;
                                        <a href="#" class="icon fa-comment">128</a>
                                    </span>
                                         
                                    </div>                          
                                  </div> 
                                  <!--Post-->
                                      <br><br>
                                  <div class="row">
                                    <div class="col-md-2">
                                       <img src="http://via.placeholder.com/60x60" style="float:left;">
                                    </div>
                                    <div class="col-md-10">

                                     <p> <strong>Bill Gates</strong> <span class="label label-danger">Following</span> Mauris neque quam fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat.  </p> 
                                     <span class="text-left col-md-6" style="padding-left:0px;">
                                        <a href="#" class="button small">Comment</a>
                                    </span>
                                     <span class="text-right col-md-6"> 
                                        <a href="#" class="icon fa-heart">28</a>  &nbsp;&nbsp;&nbsp;&nbsp;
                                        <a href="#" class="icon fa-comment">128</a>
                                    </span>
                                         
                                    </div>                          
                                  </div> 
                                  <!--Post-->
                                  <br><br>
                                  <div class="row">
                                    <div class="col-md-2">
                                       <img src="http://via.placeholder.com/60x60" style="float:left;">
                                    </div>
                                    <div class="col-md-10">

                                     <p> <strong>Jill Gomez</strong> <span class="label label-danger">Client</span> 
                                      <br>
                                      <img src="http://lorempixel.com/200/300/foods">
                                     </p> 
                                     <span class="text-left col-md-6" style="padding-left:0px;">
                                        <a href="#" class="button small">Comment</a>
                                    </span>
                                     <span class="text-right col-md-6"> 
                                        <a href="#" class="icon fa-heart">28</a>  &nbsp;&nbsp;&nbsp;&nbsp;
                                        <a href="#" class="icon fa-comment">128</a>
                                    </span>
                                         
                                    </div>                          
                                  </div> 
                                  <!--Post--> 
                                  <br><br>
                                  <div class="row">
                                    <div class="col-md-2">
                                       <img src="http://via.placeholder.com/60x60" style="float:left;">
                                    </div>
                                    <div class="col-md-10">

                                     <p> <strong>Jill Gomez</strong> <span class="label label-danger">Client</span> 
                                      <br>
                                      <img src="http://lorempixel.com/200/300/sports">
                                     </p> 
                                     <span class="text-left col-md-6" style="padding-left:0px;">
                                        <a href="#" class="button small">Comment</a>
                                    </span>
                                     <span class="text-right col-md-6"> 
                                        <a href="#" class="icon fa-heart">28</a>  &nbsp;&nbsp;&nbsp;&nbsp;
                                        <a href="#" class="icon fa-comment">128</a>
                                    </span>
                                         
                                    </div>                          
                                  </div> 
                                  <!--Post-->
                                  <br><br>
                                  <div class="row">
                                    <div class="col-md-2">
                                       <img src="http://via.placeholder.com/60x60" style="float:left;">
                                    </div>
                                    <div class="col-md-10">

                                     <p> <strong>Bill Gates</strong> <span class="label label-danger">Following</span> Mauris neque quam fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat.  </p> 
                                     <span class="text-left col-md-6" style="padding-left:0px;">
                                        <a href="#" class="button small">Comment</a>
                                    </span>
                                     <span class="text-right col-md-6"> 
                                        <a href="#" class="icon fa-heart">28</a>  &nbsp;&nbsp;&nbsp;&nbsp;
                                        <a href="#" class="icon fa-comment">128</a>
                                    </span>
                                         
                                    </div>                          
                                  </div> 
                                  <!--Post-->

                                </div>
                                <div class="meta" style="min-width:14em;display:block;padding:2.5em;">
                                  <h3>
                                    <span class="label label-info">Content</span>
                                    <span class="label label-warning">Active</span>
                                    <span class="label label-warning">Famous</span>
                                    <hr>
                                    <p class="text-right"> 
                                       <img src="images/avatar.jpg" class="img-circle"><br>
                                        <a href="#" class="">
                                          <strong class="text-right">New Content Published @Bill Gover</strong>
                                           
                                        </a>
                                      
                                      <br>
                                       <img src="images/avatar.jpg" class="img-circle"><br>
                                        <a href="#" class="">
                                          <strong class="text-right">New Content Published @Bill Gover</strong>
                                           
                                        </a>
                                      
                                      <br>
                                       <img src="images/avatar.jpg" class="img-circle"><br>
                                        <a href="#" class="">
                                          <strong class="text-right">New Content Published @Bill Gover</strong>
                                           
                                        </a>
                                      
                                    </p>
                                  </h3> 
                                    <br><br><br>
                                   <h3><span class="label label-warning"> Chat </span></h3>
                                   <hr>
                                   <img src="images/avatar.jpg" class="img-circle">
                                   <img src="images/avatar.jpg" class="img-circle">
                                   <img src="images/avatar.jpg" class="img-circle">
                                   <img src="images/avatar.jpg" class="img-circle">
                                   <img src="images/avatar.jpg" class="img-circle">
                                   <img src="images/avatar.jpg" class="img-circle">
                                   <img src="images/avatar.jpg" class="img-circle">
                                   <img src="images/avatar.jpg" class="img-circle">
                                   <img src="images/avatar.jpg" class="img-circle">
                                   <img src="images/avatar.jpg" class="img-circle">
                                   <img src="images/avatar.jpg" class="img-circle">
                                   <img src="images/avatar.jpg" class="img-circle">
                                   <img src="images/avatar.jpg" class="img-circle">
                                   <h3>
                                    <div class="form-group">
                                        <textarea type="text" class="form-control active" placeholder="Store Name"> </textarea>
                                    </div><span class="label label-info label-md">Send</span></h3>

                                `   </div>
                             </header>
                             <footer>
                               <h3>See New Guild Content</h3>
                             </footer>
                          </article>
                          <!---------- Notifications -------->
                          <!---------- Notifications -------->
                          <!------------   Feeds ------------>
                          <!------------   Feeds ------------>
                          <article class="post">
                             <header>
                                <div class="title">
                                   <h3><a href="#">Following</a></h3>
                                   <p><small>Here listed your Crowd, peers, guilds Crowds and offers and services request offered to you.</small></p>
                                </div>
                                <div class="meta">
                                   <h3>A New Service Was Created Near You</h3>
                                </div>
                             </header>
                              <header>
                                <div class="title">
                                   <h3><a href="#">Guild</a></h3>
                                   <p><small>Here listed your Crowd, peers, guilds Crowds and offers and services request offered to you.</small></p>
                                </div>
                                <div class="meta">
                                   <h3>A New Service Was Created Near You</h3>
                                </div>
                             </header>
                            
                          </article>
                          </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
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

<template>
   <div class="col-md-1" style="position:fixed; left:0;margin:auto 20px auto 30px;">
                                 <nav class="navbar navbar-fixed-left navbar-minimal open animate" role="navigation">
                                    <div class="navbar-toggler animate">
                                       <span class="menu-icon"></span>
                                    </div>
                                    <ul class="navbar-menu animate">
                                       <li>
                                          <a href="#about-us" class="animate side-menuico">
                                          <span class="desc animate" style="display: none;"> Message </span>
                                          <span class="glyphicon glyphicon-user side-ico"></span>
                                          </a>
                                       </li>
                                       <li>
                                          <a href="project-board.html" class="animate side-menuico">
                                          <span class="desc animate" style="display: none;"> Board </span>
                                          <span class="glyphicon glyphicon-info-sign side-ico"></span>
                                          </a>
                                       </li>
                                       <li>
                                          <a href="#contact-us" class="animate side-menuico">
                                          <span class="desc animate" style="display: none;">Work </span>
                                          <span class="glyphicon glyphicon-comment side-ico"></span>
                                          </a>
                                       </li>
                                    </ul>
                                 </nav>
                              </div>
</template>

<script>
export default {
  name: 'LeftSideMenu',
  data () {
    return {
      
    }
  },
  props:['menu'],
  created: function () { 
  
  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

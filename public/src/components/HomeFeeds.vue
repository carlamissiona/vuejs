<template>
  <div style="padding:0;">
    
         <img src="http://via.placeholder.com/60x60" style="float:left;">
           <p style="padding-left:80px;">{{ feedsdetail.feed  }}</p>
           <footer>
              <ul class="actions" style="padding-left:20px;">
                    <li><button data-toggle="modal" data-target="#myModal" class="icon fa-heart button small">Comment </button></li>
              </ul>
              <ul class="stats">
                 <li>
                    <span class="label label-danger">&nbsp;&nbsp; {{ feedsdetail.type }} &nbsp;&nbsp; </span>
                 </li>
                  <li><a href="#" class="icon fa-message">{{ feedsdetail.comments }}</a></li>
                 <li><a href="#" class="icon fa-comment">{{ feedsdetail.likes }}</a></li>
              </ul>

           </footer>


           <div class="modal fade" id="myModal" role="dialog">
           <br/><br/><br/><br/>
			    <div class="modal-dialog">
			    
			      <!-- Modal content-->
			      <div class="modal-content"> 
			        <div class="modal-header">
			          <button type="button" class="close" data-dismiss="modal">&times;</button>
			          <h4 class="modal-title">Modal Header</h4>
			        </div>
			        <div class="modal-body">
			          <p>Some text in the modal.</p>
			        </div>
			        <div class="modal-footer">
			          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
			        </div>
			      </div>
			      
			    </div>
		  </div>
		  <br/><br/>
   		 
  </div>
</template>

<script>
export default {
  name: 'HomeFeeds',
  data () {
    return {
      showModal:false
    }
  },
  props:['feedsdetail'],
   created: function () { 
  }		
}
</script> 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>  

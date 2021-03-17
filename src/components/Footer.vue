<template>
  <footer class="pa-relative pa-bg-white pa-w-full  pa-py-3 pa-px-20 xxs:pa-px-0   xxs:pa-px-10 s:pa-px-10 xs:pa-px-10
   pa-border-t-2 pa-border-gray-200" >

      <div class="inner-footer  pa-max-w-7xl pa-flex pa-flex-wrap pa-justify-center pa-m-auto pa-px-2.5 pa-py-7">
            
            <div class="footer-items" v-for='(item, i) in linkText' :key='i'>   
             <h4>{{item.title}}</h4>
             <ul>
                 <li v-for='(link,i) in item.content' :key='i'><a href="" class="help pa-inline-block pa-pb-1">{{link}}</a></li>       
             </ul>
           </div> 
           <div class="footer-items">   
             <h4>Follow us</h4>
             <ul class="pa-flex pa-text-3xl">
                   <li class="pa-mr-5">
                       <a href="" class="pa-inline-block ">
                       <i class="fab fa-facebook-f pa-transition pa-duration-300"></i></a>
                    </li>
                   <li class="pa-mr-5">
                       <a href="" class=""><i class="fab fa-twitter  pa-transition pa-duration-300 "></i></a>
                    </li>
                   <li class="pa-mr-5">
                       <a href=""><i class="fab fa-youtube pa-transition pa-duration-300"></i></a>
                    </li>
                    <li class="">
                       <a href=""><i class="fab fa-instagram pa-transition pa-duration-300"></i></a>
                    </li>
               </ul>
           </div> 

        <!-- copyright -->
          <div class="pa-text-black pa-h-12 pa-text-center pa-w-full pa-absolute pa-bottom-0 pa-left-0 pa--translate-x-1/2  pa--translate-y-1/2 pa-pt-2">
              &copy; KOZA 2021
          </div>

      </div>  <!--container -->
  </footer>
</template>

<script>
export default {
    data() {
        return {
            linkText:[
                {
                 title:'Get Help',
                 content:['FAQ','SHIPPING','RETURNS','ORDER STATUS']
                },
                {
                 title:'About us',
                 content:['ABOUT','SERVICES','PRIVICY POLICY']
                },
                {
                 title:'Useful Link',
                 content:['HOME','CART','ACCOUNT']
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
  @mixin scale($scale_num,$color) {
      transform: scale($scale_num);
      color: $color
  }
  @mixin animation ($opacity,$trans) {
  opacity: $opacity;
  transform:$trans;
   
}


  .footer-items {
      width: 20%;
      padding: 0.5rem;     
      ul {
        padding-left: 0;      
        a {
        color:rgb(0, 0, 0);
        transition:all .3s;
        letter-spacing: .5px;
      } 
       .help:hover,.about:hover,.link:hover {
         color:rgb(202, 160, 21);
         transform:translateX(10px)
       }
     
      li {
          margin: .5rem 0;
          height: 1.3rem;
           i {
            margin-right: 2rem;           
            color:rgb(0, 0, 0);   
        }
         .fa-facebook-f:hover{
             @include scale (1.5,#4064AC)
         }
         .fa-twitter:hover{
             @include scale (1.5,#00A7E6)
         }
         .fa-youtube:hover{
             @include scale (1.5,#F60000)
         }
         .fa-instagram:hover{
             @include scale (1.5,#bf2f22)
         }
      }   
    } 
     h4 {
        font-size:1.4rem;
        font-weight: 500;
        color:rgb(22, 21, 21);
        margin-bottom: 1rem;
        padding-bottom: .4rem; 
        position: relative;
         &::before {
        content:'';
        position: absolute;
        left:0;
        bottom:2px;
        background-color: #181818;
        height: 3px;
        width: 45px;
      }    
    }      
  }
   @media (max-width:1172px) {
      .footer-items {
          width: 50%;
      }
  }
   @media (max-width:639px) {
       .footer-items {
           width: 100%;
           margin-bottom: 2rem;
       }       
   }
</style>
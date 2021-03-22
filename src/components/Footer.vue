<template>
  <footer class="pa-relative pa-bg-white pa-w-full  pa-py-3 pa-px-20 xxs:pa-px-0   xxs:pa-px-10 s:pa-px-10 xs:pa-px-10
   pa-border-t-2 pa-border-gray-200" >

      <div class="inner-footer  pa-max-w-7xl pa-flex pa-flex-wrap pa-justify-center pa-m-auto pa-px-2.5 pa-py-7">
            
            <div class="footer-items" v-for='(item, i) in linkText' :key='i'>   
             <h4 >{{item.title}}</h4>
             <ul>
                 <li v-for='(link,i) in item.content' :key='i'><a href="" class="help pa-inline-block pa-pb-1">{{link}}</a></li>       
             </ul>
           </div> 
           <div class="footer-items">   
             <h4>Follow us</h4>
             <ul class="pa-flex p">
                <li class="pa-mr-6" v-for='(img,i) in footerIcons' :key="i">
                  <a href="" class="pa-inline-block ">
                    <img :src="require( `../assets/svg/${img.name}.svg`)" alt="icon"   class="pa-w-14 "></a>
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
import img from '@/assets/json/img-link.json'
export default {
    data() {
        return {
            linkText:img.linkText,
            footerIcons:img.footerIcons
        }
    }
}
</script>

<style lang="scss" scoped>
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
         color:rgb(150, 50, 3);
         transform:translateX(10px)
       }
     
      li {
          margin: .5rem 0;
          a{
             &:hover {
                transform:translateY(-10px);
            }
              img {
               margin-right: 2rem;           
               color:rgb(0, 0, 0);               
          }        
        }                
      }   
    } 
     h4 {
        font-size:1.2rem;
        font-weight: 400;
        color:rgb(22, 21, 21);
        margin-bottom: 1rem;
        padding-bottom: .4rem; 
        position: relative;
         &::before {
        content:'';
        position: absolute;
        left:0;
        bottom:2px;
        background-color: #8f5805;
        height: 2px;
        width: 35px;
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
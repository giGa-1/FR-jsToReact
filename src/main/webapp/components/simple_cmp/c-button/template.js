export default function(func) {return ` 

	<style>
  		 button {
  			border-radius: 8px;
  			border-style: none;
  			box-sizing: border-box;
  			color: rgb(10,10,10)!important;
  			cursor: pointer;
  			flex-shrink: 0;
  			font-family: "Inter UI","SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;
  			font-size: 14px;
  			font-weight: 500;
  			width: 	130px;
  			height: 3rem;
  			padding: 0 1.6rem;
  			text-align: center;
  			text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;
  			transition: all .5s;
  			user-select: none;
  			-webkit-user-select: none;
  			touch-action: manipulation;
  			border: solid;
  			border-width:2px;
  			border-color: rgb(33, 16, 78);
		}
		
		div button:hover {
  			box-shadow: rgba(80, 63, 205, 0.5) 0 1px 30px;
 			transition-duration: .1s;
		}


		
   	</style>
 
   	<div class="container">       
   		<button class="button">
    	<slot></slot>
    	${func._cValue}  
   		</button>
  	</div>              
`}
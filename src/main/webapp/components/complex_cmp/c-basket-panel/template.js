export default function(cls) {return `
	<style>
		.dropdownContainer {
    		position: absolute;
    		display: inline-block;
    		z-index: 3;
    		top: 100px;
    		left: 20px;
    		width: 3vw;
    		height: 3vw;
		}

		img {
   			color: white;
   			padding: 16px;
   			font-size: 16px;
    		border: none;
    		margin-top: 5px;
		}

		.dropdownContent {
    		display: none;
    		position: relative;
    		border-radius: 8px;
    		background-color: rgba(0,0,0,0.3);
    		z-index: 3;
    		bottom: 65px; 
    		left: 65px;
    		width: 6vw; 
		}

		.dropdownContentLine {
    		color: black;
    		padding: 12px 16px;
    		text-decoration: none;
    		display: block;
		}

		.dropdownContainer:hover .dropdownContent{display: block;}


		.dropdownContentLineMessage {
    		color: black;
    		padding: 12px 16px;
    		text-decoration: none;
    		display: block;
		}		

		.contentMessage {
    		display: none;
    		border-top: 2px solid #585858;
    		position: relative;
    		z-index: 1;
    		padding: 12px 16px;
		}
	</style>
	
	
	
   	<div class="dropdownContainer">       
   		<img src="add-product.png" id="userImg"  width="40" height="40"></img>
   		<div class="dropdownContent">
   			<div class="dropdownContentLineMessage">
   			</div>
   			
   			
   		</div>
  	</div>  
	
   		
`}

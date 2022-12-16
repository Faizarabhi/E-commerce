<?php 
function devOps() {
    
    for($i=1;$i<=100;$i++ ){
        if(($i%3 == 0) && ($i%5== 0)){
            echo "DevOps"."</br>";
        }
        elseif($i%3== 0){
            echo "Ops"."</br>";
        }
        elseif($i%5== 0){
            echo "Dev"."</br>";
        }
        else {
            echo $i . "</br>";
        }
    }

}
devOps();

 function isPrime($x){
     $c=0;
     for($i=1; $i<$x;$i++){
         if($x % $i ==0){
             $c++;
         }
     }
     return $c == 2 ? true : false;
 }
 echo isPrime(73) ? 'Prime' : 'Composite';
?>

2022-12-15 23:17:54:513 +0100 - [localhost]: Saving to Cloud: Started
2022-12-15 23:17:54:532 +0100 - [localhost]: Compressing document root folder…: Done
2022-12-15 23:17:54:538 +0100 - [localhost]: Creating archive…: Done
2022-12-15 23:17:54:540 +0100 - [localhost]: Moving data to desktop…: Done
2022-12-15 23:17:54:540 +0100 - [localhost]: Saving to Cloud: Finished

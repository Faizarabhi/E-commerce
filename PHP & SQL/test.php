<?php 
function devOps() {
    
    for($i=1;$i<=100;$i++ ){
        if($i%3 == 0){
            echo "Dev";
        }
        elseif($i%5== 0){
            echo "Ops";
        }
        elseif(($i%3 == 0) && ($i%5 == 0)){
            echo "DevOps";
        }
        else {
            echo $i;
        }
    }

}
devOps();

function isPrime($x){
    $c=0;
    for($i=0; $i<$x;$i++){
        
        if($x%$i==0){
            $c++;
        }

    }
    return $c == 2 ? true : false;
}

echo isPrime(73) ? 'Prime' : 'Composite';
?>

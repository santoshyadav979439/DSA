const arr=[1,3,2,10,6,19,12,4]

function sort(arr){
    let l= 0;
    let r = arr.length-1
    function mergeSort(l,r){
        if(l<r){
            const mid= Math.floor((l+r)/2)
            mergeSort(l,mid)
            mergeSort(mid+1,r)
            merge(l,mid,r)
        }
        
    }
    function merge(l,mid,r){
        const arr1= new Array(mid-l+1)
        const arr2= new Array(r-mid);
        let k=l;
        for(let i=0;i<arr1.length;i++){
            arr1[i]=arr[k]
            k++;
        }
        k=mid+1;
        for(let i=0;i<arr1.length;i++){
            arr2[i]=arr[k]
            k++;
        }
        let i=0,j=0;
         k=l;
        while(i<arr1.length && j<arr2.length){
            if(arr1[i]<arr2[j])
            {
                arr[k]=arr1[i];
                i++;
            }
            else{
                arr[k]=arr2[j];
                j++
            }
            k++;
        } 
            while(j!==arr2.length){
                arr[k]=arr2[j]
                j++;
                k++
            }
           while(i!==arr1.length){
                arr[k]=arr1[i]
                i++;
                k++
            }
        }
    
    mergeSort(l,r)
    return arr;
    
}
sort(arr)
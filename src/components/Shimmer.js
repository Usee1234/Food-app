const Shimmer=()=>{
    return( 
        <div className="Reaturent-cards">
        {
         Array(10).fill("").map((value,index)=>{
            return(
            <> 
            <main>
            <div className="myshimmer" key={index}>
                       
            </div>
            <br></br>
            <div className="myshimmer" key={index}>
                       
            </div>
            </main>
            </>
            )
         })
        
        }
       </div>
    )
   
}
export default Shimmer
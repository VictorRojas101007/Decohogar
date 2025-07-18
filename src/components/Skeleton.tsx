import S from "../styles/Skeleton.module.css"



const Skeleton=()=>{
    console.log()
return (
    <section className={S.skeletonContainer}>
        {Array(6).fill(null).map((_, index) => {
            return (
                <article className={S.skeletonCard} key={index}>
                    <p className={S.description}> </p>
                </article>
            )
        })}
   
    </section>
)
}
export default Skeleton;
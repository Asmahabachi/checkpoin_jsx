import imageInSrc from './../imageInSrc.png'
const mainpage = () => {
    return (
        <div className="mainpage">
            <div style={{border:"solid 1px black",maxWidth:"100vw"}}>

            <h1 class="title red">Your name here</h1>

            <br/>

            <img src={imageInSrc} />

            <br/>

            <img src={"/imageInPublic.png"} />

            </div>

            <video width="320" height="240" controls>

            <source src="myVideo.mp4" type="video/mp4" />

            </video>
        </div>
       
    )
}
export default mainpage;

function windMill (props) {
    return (
        <div>
            <div className='ActiveWindmillWrapper' style={{left: props.fromLeft, bottom: props.size / 2 + 'px'}}>
                <div id="div1" style={{height: props.size + 'px', width:props.size + 'px'}}>
                    <div id="div2" className={props.extraClassName}  style={{backgroundImage: `url("./img/windmill.png")` , height: props.size + 'px', width:props.size + 'px'}}>
                    </div> 
                    <img className='WindmillBase' src='./img/Untitled.png' alt='Untitled' style={{height: props.size + 'px'}}/>  
                </div>
            </div>
        </div>
    )
}

export default windMill;



export const fadeIn = (direction, delay) => {
    return {
        hidden:{
            y: direction === 'up' ? 10 : direction === 'down' ? -10 : 0,
            x: direction === 'left' ? 10 : direction === 'right' ? -10 : 0,
        },
        show: {
            y: 0,
            x:0,
            opacity:1,
            transition: {
                type: 'tween',
                duration:1.2,
                delay:delay,
                ease: [0.25,0.25,0.25,0.75]
            }
        }
    
    }

}

export const textVariant ={
    hidden:
    {
      y:-10, 
      x:-10
    },
    show:
    {
      y:0,
      x:0,
      transition:
      {
        type:'spring',
        delay:0.5,
      }
    }
   
  }

  export const titleVariant ={
    hidden:
    {
      x:-10,
      opacity:0
    },
    show:
    {
      x:0,
      opacity:1,
      transition:
    {
      type:'spring',
      delay:0.5
    }
    }
  
  }
  export const cards =(direction, delay) =>{
    return{
      hidden:
      {
        x :direction === 'left' ? -10 : direction === 'right' ? 10: 0,
        opacity:0,
      },
      show:
      {
        x:0,
        opacity:1,
        transition:
        {
          type:'spring',
          delay:delay,
          duration:0.8,
          stiffness:60
        }
      }
    }
  }
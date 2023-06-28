export const motionPhone1 = {
    
    initial: {
        opacity: 0,
        y: -200,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 400,
            duration: 200
        }
    }
}
export const motionPhone2 = {
    
    initial: {
        opacity: 0,
        y: -200,
    },
visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 600,
            duration: 200,
            
        }
    }
}
export const motionPhone3 = {
    
    initial: {
        opacity: 0,
        y: -200,
    },
   visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 800,
            duration: 200
        }
    },
    leave: {
        opacity: 1,
        y: -100,
    }
    
}